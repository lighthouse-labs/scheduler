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
// const appts = selectedDay ? selectedDay.appointments : [];
// return appts ? appts.map((a) => state.appointments[a]) : [];

// let apptArray = [];
// console.log(state);
// for (let d of state.days) {
//   if (d.name === state.day) {
//     apptArray = d.appointments;
//   }
//   return apptArray.map((apptId) => state.appointments[apptId]);
// }

const getInterview = function(state, interview) {
  console.log(state);
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

// const getInterviewersForDay = function(state, day) {
//   const selectedDay = state.days.find((d) => d.name === day);
//   const interviewers = selectedDay ? selectedDay.interviewers : [];
//   return interviewers ? interviewers.map((i) => state.interviewers[i]) : [];
// };

//   let apptArray = [];

//   for (let d of state.days) {
//     if (d.name === day) {
//       apptArray = d.appointments;
//     }
//   }
//   return apptArray.map((apptId) => state.appointments[apptId]);
//
export { getInterview, getAppointmentsForDay, getInterviewersForDay };
