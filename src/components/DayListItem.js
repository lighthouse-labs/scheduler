import React from 'react';
import 'components/DayListItem.scss';
const classnames = require('classnames');
// Days are rendered with the number of available Appointment spots remaining
// The Day state is set using the set Day function onClick
export default function DayListItem(props) {
  const daylistClass = classnames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  let spotsRemaining = `${props.spots}`;
  if (props.spots > 1) {
    spotsRemaining = `${props.spots} spots remaining`;
  } else if (props.spots === 1) {
    spotsRemaining = `${props.spots} spot remaining`;
  } else {
    spotsRemaining = `no spots remaining`;
  }

  return (
    <li
      className={daylistClass}
      key={props.id}
      onClick={() => props.setDay(props.name)}
    >
      <h2>{props.name}</h2>
      <p>{spotsRemaining}</p>
    </li>
  );
}
