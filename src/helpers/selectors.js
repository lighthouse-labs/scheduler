// Returns an array of appointment objects for each day
const getAppointmentsForDay = function(state, day) {
  const foundDays = state.days.find((foundDay) => foundDay.name === day);
  if (foundDays) {
    if (foundDays.appointments) {
      return foundDays.appointments.map((appointment) => {
        return state.appointments[appointment];
      });
    }
  } else {
    return [];
  }

  // if (foundday) {
  //   if (foundday.appointments) {
  //     return foundday.appointments.map((appt) => {
  //       return state.appointments[appt];
  //     });
  //   }
  // } else {
  //   return [];
  // }
};
// Returns a new interview object
const getInterview = function(state, interview) {
  if (!interview) {
    return null;
  } else {
    return ({ ...state.interview } = {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] }
    });
  }
};
// Returns an array of interviewer IDs based on the selected day
const getInterviewersForDay = function(state, day) {
  const foundDays = state.days.find((foundDay) => foundDay.name === day);
  if (foundDays) {
    if (foundDays.interviewers) {
      return foundDays.interviewers.map((interview) => {
        return state.interviewers[interview];
      });
    }
  } else {
    return [];
  }
};

export { getInterview, getAppointmentsForDay, getInterviewersForDay };
