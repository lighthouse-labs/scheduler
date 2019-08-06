import React from "react";
import classnames from "classnames";
import InterviewerListItem from "./InterviewerListItem";

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
  const interviewerItem = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item-image": props.image,
    "interviewers__item--selected-image": props.selected && props.image
  });
  return (
    <li className={interviewerItem}>
      <div>
        <img src={props.avatar} alt={props.name} />

        {props.name}
      </div>
    </li>
  );
}
