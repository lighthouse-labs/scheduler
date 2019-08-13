import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewer: null,
    interviewers: {}
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  // const setDays = (days) => setState((prev) => ({ ...prev, days }));
  // const setAppointments = (appointments) =>
  //   setState((prev) => ({ ...prev, appointments }));
  // const setInterviewers = (interviewers) =>
  //   setState((prev) => ({ ...prev, interviewers }));

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/days`),
      axios.get(`http://localhost:3001/api/appointments`),
      axios.get('http://localhost:3001/api/interviewers')
    ])

      .then((res) => {
        const renderState = {
          day: state.day,
          days: res[0].data,
          appointments: res[1].data,
          interviewers: res[2].data
        };
        setState(renderState);
      })
      .catch((error) => {
        console.log('Error =>', error);
      });
  }, [state.day]);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`http://localhost:3001/api/appointments/${id}`, {
        interview: interview
      })
      .then(() => {
        setState({ ...state, appointments });
      })
      .catch((e) => {
        console.log('error =>', e);
      });
  };

  const deleteInterview = (id, time) => {
    const emptyAppointment = {
      id: id,
      interview: null,
      time: time
    };
    return axios
      .delete(`http://localhost:3001/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments: { ...state.appointments, [id]: emptyAppointment }
        });
      })
      .catch((e) => {
        console.log('error =>', e);
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  };
}

//   const interviewers = getInterviewersForDay(state, state.day);

//   const appointments = getAppointmentsForDay(state, state.day).map(
//     (appointment) => {
//       return (
//         <Appointment
//           key={appointment.id}
//           {...appointment}
//           interview={getInterview(state, appointment.interview)}
//           interviewers={interviewers}
//           bookInterview={bookInterview}
//           deleteInterview={deleteInterview}
//         />
//       );
//     }
//   );

//   return (
//     <main className="layout">
//       <section className="sidebar">
//         <img
//           className="sidebar--centered"
//           src="images/logo.png"
//           alt="Interview Scheduler"
//         />
//         <hr className="sidebar__seperator sidebar--centered" />
//         <nav className="sidebar__menu">
//           <DayList days={state.days} day={state.day} setDay={setDay} />
//         </nav>
//         <img
//           className="sidebar__lhl sidebar--centered"
//           src="images/lhl.png"
//           alt="lighthouse labs"
//         />
//       </section>
//       <section className="schedule">
//         <section className="schedule">
//           {appointments}
//           <Appointment key="last" time="5pm" />
//         </section>
//       </section>
//     </main>
//   );
// }
