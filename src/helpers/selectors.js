import React from 'react';
import axios from 'axios';
import DayList from 'components/DayList';

export function getAppointmentsForDay(state, day) {
  let apptArray = [];

  for (let d of state.days) {
    if (d.name === day) {
      apptArray = d.appointments;
    }
  }
  return apptArray.map((apptId) => state.appointments[apptId]);
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  console.log(state);
  const result = {
    student: interview.student,
    interviewer: {
      ...state.interviewers.data[interview.interviewer]
    }
  };
  return result;
}
