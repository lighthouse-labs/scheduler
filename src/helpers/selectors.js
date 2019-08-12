const getAppointmentsForDay = function(state, day) {
  const selectedDays = state.days.find((d) => d.name === day);
  if (selectedDays) {
    if (selectedDays.appointments) {
      return selectedDays.appointments.map((appt) => {
        return state.appointments[appt];
      });
    }
  } else {
    return [];
  }
};

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

const getInterviewersForDay = function(state, day) {
  const selectedDays = state.days.find((d) => d.name === day);
  if (selectedDays) {
    if (selectedDays.interviewers) {
      return selectedDays.interviewers.map((interview) => {
        return state.interviewers[interview];
      });
    }
  } else {
    return [];
  }
};

export { getInterview, getAppointmentsForDay, getInterviewersForDay };
