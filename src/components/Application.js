import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import useApplicationData from "../hooks/useApplicationData";
import axios from "axios";

const {
	getAppointmentsForDay,
	getInterview,
	getInterviewersForDay
} = require("../helpers/Selector");

export default function Application(props) {
	const {
		state,
		setDay,
		bookInterview,
		deleteInterview
	} = useApplicationData();

	let appointmentDays = getAppointmentsForDay(state, state.day);
	console.log("Hello Kitty", state.day);
	console.log(appointmentDays);
	const appointmentList = appointmentDays.map(appointment => {
		console.log("SIMONNNNNN", appointment);
		const interview = getInterview(state, appointment.interview);
		const interviewList = getInterviewersForDay(state, state.day);

		return (
			<Appointment
				key={appointment.id}
				id={appointment.id}
				time={appointment.time}
				interview={interview}
				interviewers={interviewList}
				bookInterview={bookInterview}
				deleteInterview={deleteInterview}
			/>
		);
	});

	return (
		<main className="layout">
			<section className="sidebar">
				<img
					className="sidebar--centered"
					src="images/logo.png"
					alt="Interview Scheduler"
				/>
				<hr className="sidebar__separator sidebar--centered" />
				<nav className="sidebar__menu">
					<DayList
						days={state.days}
						state={state}
						day={state.day}
						setDay={day => {
							setDay(day);
						}}
					/>
				</nav>
				<img
					className="sidebar__lhl sidebar--centered"
					src="images/lhl.png"
					alt="Lighthouse Labs"
				/>
			</section>
			<section className="schedule">{appointmentList}</section>
		</main>
	);
}
