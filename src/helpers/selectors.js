// Returns an array of appointment objects for each day
const getAppointmentsForDay = function(state, day) {
  const foundday = state.days.filter((d) => d.name === day)[0];

  if (foundday) {
    if (foundday.appointments) {
      return foundday.appointments.map((appt) => {
        return state.appointments[appt];
      });
    }
  } else {
    return [];
  }
};
// Returns a new interview object
const getInterview = function(state, interview) {
  if (!interview) {
    return null;
  } else {
    const foundInterview = {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] }
    };
    return foundInterview;
  }
};
// Returns an array of interviewer IDs based on the selected day
const getInterviewersForDay = function(state, day) {
  const foundday = state.days.filter((d) => d.name === day)[0];

  if (foundday) {
    if (foundday.appointments) {
      return foundday.appointments.map((appt) => {
        return state.appointments[appt];
      });
    }
  } else {
    return [];
  }
};

export { getInterview, getAppointmentsForDay, getInterviewersForDay };
