



export function getAppointmentsForDay(state, day) {
    let dayData = state.days.find(ele =>{
        return ele.name === day
    })
    if (!dayData) {
      return [];
    }
    let output = [];
    for (let appointment of dayData.appointments) {
      output.push(state.appointments[String(appointment)]);
    }
    return output;
  }

export function getInterview(state, interview) {
    if (!interview) {
      return null;
    }
    return {
      student: interview.student,
      interviewer: state.interviewers[String(interview.interviewer)]
    };
  }
  
 export function getInterviewersForDay(state, day) {

    let dayData = state.days.find(ele =>{
        return ele.name === day
    })
    if (!dayData) {
      return [];
    }
    let output = [];
    for (let interviewer of dayData.interviewers) {
       

            output.push(state.interviewers[String(interviewer)]);
       
    
    }
    
    return output;


  }

