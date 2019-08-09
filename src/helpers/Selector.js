function getAppointmentsForDay(state, day) {
  let dayData = null;
  for (let e of state.days) {
    if (e.name === day) {
      dayData = e;
      break;
    }
  }
  if (!dayData) {
    return [];
  }
  let output = [];
  for (let appointment of dayData.appointments) {
    output.push(state.appointments[String(appointment)]);
  }
  return output;
}
function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[String(interview.interviewer)]
  };
}
module.exports = { getAppointmentsForDay, getInterview };
