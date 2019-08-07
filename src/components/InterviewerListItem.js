import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerlistClass = classnames("interviewers__item", {
  "interviewers__item--selected": props.selected  
  
  })
  
  return (
  
    <li onClick={() => {if (props.setInterviewer){props.setInterviewer(props.id)}}} className={interviewerlistClass}>

  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  <h2>{props.name}</h2>
</li>
  )
}