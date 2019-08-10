import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'components/Application.scss';
import DayList from './DayList';
import InterviewerList from './InterviewerList';
import Appointment from './Appointment/Index.js';
import { getAppointmentsForDay, getInterview } from 'helpers/selectors.js';

const daysURL = `http://localhost:3001/api/days`;
const apptsURL = `http://localhost:3001/api/appointments`;
const interviewersURL = `http://localhost:3001/api/interviewers`;
const daysAPI = axios.get(daysURL);
const apptsAPI = axios.get(apptsURL);
const interviewersAPI = axios.get(interviewersURL);
const days = [];
const appointments = [];
const interviewers = [];

export default function Application(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = (day) => setState({ ...state, day });
  const AppointmentsList = getAppointmentsForDay(state, state.day).map(
    (appointment) => {
      const interview = getInterview(state, appointment.interview);
      return (
        <Appointment
          // pass props. these into the form
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
        />
      );
    }
  );
  //API request
  useEffect(() => {
    Promise.all([daysAPI, apptsAPI, interviewersAPI]).then((all) => {
      const daysData = all[0].data;
      const apptsData = all[1].data;
      const interviewersData = all[2];
      setState({
        ...state,
        days: daysData,
        appointments: apptsData,
        interviewers: interviewersData
      });
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />

        <DayList days={state.days} day={state.day} setDay={setDay} />

        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>

      <section className="schedule">{AppointmentsList}</section>
    </main>
  );
}
