import { useEffect, useReducer } from 'react';
import axios from 'axios';
// All Application data is managed in this Hook
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
  // Reducer functionality
  // Updates the state object based on the data that needs to be updated
  function reducer(state, action) {
    // Brings in State and updates the day
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };
      // Brings in state and updates the Appointments object
      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers
        };
      // Brings in state and appends an interview to the appointments object
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
  // Reducer function definitions (Promisified)
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
  // Helper function that runs the Axios request and reducer function to reset the state after each reducer function is called
  const resetState = function() {
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
  };

  useEffect(() => {
    resetState();
  }, [state.day]);
  // New Appointments being booked trigger this function
  const bookInterview = (id, interview) => {
    return axios
      .put(`http://localhost:3001/api/appointments/${id}`, {
        interview: interview
      })
      .then(() => {
        setInterview(id, interview);
        resetState();
      })
      .catch((e) => {
        console.log('error =>', e);
      });
  };
  // Existing Appointments being deleted triggers this function
  const deleteInterview = (id) => {
    return axios
      .delete(`http://localhost:3001/api/appointments/${id}`)
      .then(() => {
        setInterview(id, null);
        resetState();
      })
      .catch((e) => {
        console.log('error =>', e);
      });
  };
  // State object being passed to the Application level
  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  };
}
