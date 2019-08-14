import React from 'react';

import 'components/InterviewerListItem.scss';
const classNames = require('classnames');
// The interviewer object is rendered and appended to the list of interviewers here
// The avatar and name are highlighted upon being selected on the form
export default function InterviewerListItem(props) {
  const interviewerlistClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
  });

  return (
    <li onClick={props.onChange} className={interviewerlistClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      <h2>{props.selected && props.name}</h2>
    </li>
  );
}
