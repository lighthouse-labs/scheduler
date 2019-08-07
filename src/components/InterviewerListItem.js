import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
//import InterviewerListItem from "./InterviewerListItem";

const info = (
  <li class="interviewers__item">
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt="Sylvia Palmer"
    />
    Sylvia Palmer
  </li>
);

export default function(props) {
  const interviewerItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  const interviewerItemImageClass = classnames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected && props.image
  });

  return (
    <li className={interviewerItemClass} onClick={props.setInterviewer}>
      <img
        className={interviewerItemImageClass}
        src={props.avatar}
        alt={props.name}
      />
      <div>{props.selected ? props.name : ""}</div>
    </li>
  );
}
