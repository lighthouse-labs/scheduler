import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import axios from "axios";

const { getAppointmentsForDay, getInterview, getInterviewersForDay } = require("../helpers/Selector");



export default function Application(props) {
  
  function deleteInterview(id, time){
    const onDelete = {id: id, time: time, interview: null} 
return axios.delete(`http://localhost:3001/api/appointments/${id}`).then(()=>{
  
  setState({...state, appointments: {...state.appointments, [id]: onDelete}})
}).then(()=>{return 'returning a Promise for later use'})
  }
  function bookInterview(id, interview) {
    return axios.put(`http://localhost:3001/api/appointments/${id}`, interview).then(()=>{
      setState({...state, appointments: {...state.appointments, [id]: interview}})
    }).then((response)=>{
      return response;
    })
  }
  const [state, setState] = useState({
    day: "Tuesday",
    days: [],
    appointments: {}
  });
 
useEffect(()=>{
  Promise.all([
    axios.get("http://localhost:3001/api/days"),
    axios.get("http://localhost:3001/api/appointments"),
    axios.get("http://localhost:3001/api/interviewers")
  ]).then(all => {
    let combinedPull = {
      day: state.day,
      days: all[0].data,
      appointments: all[1].data,
      interviewers: all[2].data
    };
    setState(combinedPull);
    // let getInterview = selector.getInterview(state, interviewers);
  });
}, [])
  

  let appointmentDays = getAppointmentsForDay(state, state.day);

  const appointmentList = appointmentDays.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    const interviewList = getInterviewersForDay(state, state.day)

    

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers ={interviewList}
        bookInterview = {bookInterview}
        deleteInterview = {deleteInterview}
       
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            state={state}
            day={state.day}
            setDay={(day) => setState({ ...state, day:day })}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">{appointmentList}</section>
    </main>
  );
}
