import React, { useEffect, useReducer } from "react";
import axios from "axios";

export default function useApplicationData() {
	const SET_DAY = "SET_DAY";
	const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
	const SET_INTERVIEW = "SET_INTERVIEW";
	function reducer(state, action) {
		switch (action.type) {
			case SET_DAY:
				return { ...state, day: action.day };
			case SET_APPLICATION_DATA:
				return {
					...state,
					appointments: action.appointments,
					days: action.days,
					interviewers: action.interviewers
				};
			case SET_INTERVIEW: {
				return { ...state, appointments: action.appointments };
			}

			default:
				throw new Error(
					`Tried to reduce with unsupported action type: ${action.type}`
				);
		}
	}

	// const [state, dispatch] = useReducer()

	const [state, dispatch] = useReducer(reducer, {
		day: "Tuesday",
		days: [],
		appointments: {},
		interviewers: {}
	});
	useEffect(() => {
		Promise.all([
			axios.get("http://localhost:3001/api/days"),
			axios.get("http://localhost:3001/api/appointments"),
			axios.get("http://localhost:3001/api/interviewers")
		]).then(all => {
			//   let combinedPull = {
			//     day: state.day,
			//     days: all[0].data,
			//     appointments: all[1].data,
			//     interviewers: all[2].data
			//   };
			//   setState(combinedPull);

			//   dispatch({type: SET_APPLICATION_DATA, combinedPull})
			dispatch({
				type: SET_APPLICATION_DATA,
				appointments: all[1].data,
				days: all[0].data,
				interviewers: all[2].data
			});
			// let getInterview = selector.getInterview(state, interviewers);
		}); // calling api whenever state changes. needs work
	}, [state]);

	// function setDay(day){
	//     setState({...state, day: day})
	// }{...state, appointments: {...state.appointments, [id]: interview}

	function bookInterview(id, interview) {
		return axios
			.put(`http://localhost:3001/api/appointments/${id}`, interview)
			.then(() => {
				dispatch({
					type: SET_INTERVIEW,
					appointments: { ...state.appointments, [id]: interview }
					//spots: spots++
				});
			})
			.then(response => {
				return response;
			});
	}

	function deleteInterview(id, time) {
		const onDelete = { id: id, time: time, interview: null };
		return axios
			.delete(`http://localhost:3001/api/appointments/${id}`)
			.then(() => {
				//setState({...state, appointments: {...state.appointments, [id]: onDelete}})
				dispatch({
					type: SET_INTERVIEW,
					appointments: { ...state.appointments, [id]: onDelete }
				});
			})
			.then(() => {
				return "returning a Promise for later use";
			});
	}

	function setDay(day) {
		dispatch({ type: SET_DAY, day: day });
	}

	return { state, setDay, bookInterview, deleteInterview };
}
