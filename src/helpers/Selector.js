export function getAppointmentsForDay(state, day) {
	console.log("LOOOOOOOOK", state, state.day, "loooooooooooooook");
	let dayData = state.days.find(ele => {
		return ele.name === day;
	});
	if (!dayData) {
		console.log("should never do this");
		return [];
	}
	let output = [];
	for (let appointment of dayData.appointments) {
		console.log("PANDAAAAAA");
		console.log(appointment);
		console.log(state.appointments);
		console.log(state.appointments[String(appointment)]);
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
	let dayData = state.days.find(ele => {
		return ele.name === day;
	});
	if (!dayData) {
		return [];
	}
	let output = [];
	for (let interviewer of dayData.interviewers) {
		output.push(state.interviewers[String(interviewer)]);
	}

	return output;
}
