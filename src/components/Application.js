import React from 'react';
import 'components/Application.scss';
import DayList from './DayList';
import useApplicationData from 'hooks/useApplicationData';
import Appointment from './Appointment/Index.js';
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
} from 'helpers/selectors.js';

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    deleteInterview
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);
  const interviewersForDay = getInterviewersForDay(state, state.day);
  // Mapping through the appointments array and appending the corresponding interviews to each
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      // JSX: Passing props to the Appointment component
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        {...appointment}
        interview={interview}
        interviewers={interviewersForDay}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
      />
    );
  });
  // JSX that renders the elements for the sidebar and schedule layouts
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
        {<Appointment id="last" time="5pm" />}
      </section>
    </main>
  );
}
