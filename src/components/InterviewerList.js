import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import classnames from "classnames";

{
  /* <section class="interviewers">
  <h4 class="interviewers__header text--light">Interviewer</h4>
  <ul class="interviewers__list" />
</section>; */
}

export default function InterviewList(props) {
  const listOfItems = props.interviewers.map(item => (
    <InterviewerListItem
      avatar={item.avatar}
      selected={item.id === props.value}
      alt={props.name}
      key={item.id}
      name={item.name}
      setInterviewer={() => props.onChange(item.id)}

      //setInterviewer={props.setInterviewer()}

      //setInterviewer={props.setInterviewer()}
    />
  ));

  return (
    <section class="interviewers">
      <h4 class="interviewers__header" />
      <ul class="interviewers__list">{listOfItems}</ul>
    </section>
  );
}
