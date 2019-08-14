import React, { useState } from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

{
	/* <section class="interviewers">
  <h4 class="interviewers__header text--light">Interviewer</h4>
  <ul class="interviewers__list" />
</section>; */
}

export default function InterviewList(props) {
	const [selected, changeSelected] = useState(false);
	console.log(props);
	const listOfItems = props.interviewers.map(item => {
		// console.log("here", item);

		return (
			<InterviewerListItem
				avatar={item.avatar}
				alt={props.name}
				key={item.id}
				interviewId={item.id}
				name={item.name}
				setInterviewer={props.setInterviewer}
				selected={props.value === item.id}

				//setInterviewer={props.setInterviewer()}

				//setInterviewer={props.setInterviewer()}
			/>
		);
	});

	return (
		<section class="interviewers">
			<h4 class="interviewers__header" />
			<ul class="interviewers__list">{listOfItems}</ul>
		</section>
	);
}

InterviewList.propTypes = {
	value: PropTypes.number,
	onChange: PropTypes.func.isRequired
};
