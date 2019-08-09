import React, { useState } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import axios from "axios";
const { getAppointmentsForDay, getInterview } = require("../helpers/Selector");

const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 4,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 4,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 2,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  }
];
// const setDay = day => setState({ ...state, day });
// const setDays = days => setState({ ...prev, days });

// const setAppointment = appointments =>
//   setState(prev => ({ ...prev, appointments }));

// const setInterviews = appointments =>
//   setState(prev => ({ ...prev, interviews }));

export default function Application(props) {
  // const [today, changeDay] = useState(0);
  // const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  // axios.get("http://localhost:3001/api/days").then(res => {
  //   setState({ ...state, days: res.data });
  // });

  // const setDays = function(data){
  //   setState({...state}, {day: data.day})
  // }
  // const setAppointments = function(data){
  //   setState({...state}, {day: data.day})
  // }
  // const setInterviewers = function(data){
  //   setState({...state}, {day: data.day})
  // }

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

  let appointmentDays = getAppointmentsForDay(state, state.day);

  console.log("LOOK HERE RERERERE", appointmentDays);
  const appointmentList = appointmentDays.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
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
            day={state.day}
            setDay={() => setState({ ...state, day: state.day })}
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
