import React from "react";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default function Application(props) {
  const  [dayState, setDayState] = React.useState(  'Monday' )
  const [interviewerState, setInterviewerState] = React.useState(  null )
  // console.log(state, setState)
  // if (state.day === 'Monday') {
  //   setState({day: 'Tuesday'})
  // }
   console.log('state: ', dayState);
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
          
        <DayList 
          days={days}
          day={dayState}
          setDay={day => setDayState( day)}
        />
          
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        /> 
      </section>

      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}