import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'components/Application.scss';
import DayList from './DayList';
import Appointment from './Appointment/Index.js';
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
} from 'helpers/selectors.js';

export default function Application(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  const setDays = (days) => setState((prev) => ({ ...prev, days }));
  const setAppointments = (appointments) =>
    setState((prev) => ({ ...prev, appointments }));
  const setInterviewers = (interviewers) =>
    setState((prev) => ({ ...prev, interviewers }));

  //API request

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/days`),
      axios.get(`http://localhost:3001/api/appointments`),
      axios.get('http://localhost:3001/api/interviewers')
    ])
      // .then((all) => {
      //   setDays(all[0].data);
      //   setAppointments(all[1].data);
      //   setInterviewers(all[2].data);
      // })
      .then((res) => {
        const renderState = {
          day: state.day,
          days: res[0].data,
          appointments: res[1].data,
          interviewers: res[2].data
        };
        setState(renderState);
      })
      .catch((e) => {});
  }, [state.day]);

  const appointments = getAppointmentsForDay(state, state.day);
  const interviewersForDay = getInterviewersForDay(state, state.day);

  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        {...appointment}
        interview={interview}
        interviewers={interviewersForDay}
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>

      <section className="schedule">
        {schedule}
        {/* <Appointment id="last" time="5pm" /> */}
      </section>
    </main>
  );
}
