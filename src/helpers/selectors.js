export function getAppointmentsForDay(state, day) {
  let appointmentFound = null;
  for (let dayOfWeek in state.days) {
    if (state.days[dayOfWeek].name === day) {
      appointmentFound = state.days[dayOfWeek].appointments;
    }
  }

  let appointmentList = [];
  for (let appointmentID of appointmentFound) {
    if (state.appointments[appointmentID]) {
      appointmentList.push(state.appointments[appointmentID]);
    }
  }

  return appointmentList;
}
