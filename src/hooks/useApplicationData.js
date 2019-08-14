import { useEffect, useReducer } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const SET_DAY = 'SET_DAY';
  const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
  const SET_INTERVIEW = 'SET_INTERVIEW';
  const [state, dispatch] = useReducer(reducer, {
    day: 'Monday',
    days: [],
    appointments: {},
    interviewer: null,
    interviewers: {}
  });

  //  action represents an object taking on the new state object.
  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };

      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers
        };
      case SET_INTERVIEW: {
        const currentAppointments = state.appointments;
        const updatedAppointments = {
          ...currentAppointments,
          [action.id]: {
            ...currentAppointments[action.id],
            interview: action.interview
          }
        };
        return { ...state, appointments: updatedAppointments };
      }

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  function setDay(day) {
    dispatch({ type: SET_DAY, day: day });
  }
  function setApplicationData(days, appointments, interviewers) {
    dispatch({
      type: SET_APPLICATION_DATA,
      days: days,
      appointments: appointments,
      interviewers: interviewers
    });
  }
  function setInterview(id, interview) {
    dispatch({ type: SET_INTERVIEW, id: id, interview: interview });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/days`),
      axios.get(`http://localhost:3001/api/appointments`),
      axios.get('http://localhost:3001/api/interviewers')
    ])

      .then((res) => {
        setApplicationData(res[0].data, res[1].data, res[2].data);
      })
      .catch((error) => {
        console.log('Error =>', error);
      });
  }, [state.day]);

  const bookInterview = (id, interview) => {
    return axios
      .put(`http://localhost:3001/api/appointments/${id}`, {
        interview: interview
      })
      .then(() => {
        setInterview(id, interview);
      })
      .catch((e) => {
        console.log('error =>', e);
      });
  };

  const deleteInterview = (id) => {
    return axios
      .delete(`http://localhost:3001/api/appointments/${id}`)
      .then(() => {
        setInterview(id, null);
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
