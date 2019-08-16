import React from 'react';
import DayListItem from './DayListItem';
import 'components/DayListItem.scss';

// Each day is rendered with props passed from the DayListItem
export default function DayList(props) {
  const dayListItems = props.days.map((day) => {
    let spotsAvailable = 0;
    day.appointments.forEach((appointmentId) => {
      if (props.appointments[appointmentId].interview === null) {
        spotsAvailable++;
      }
    });
    return (
      <DayListItem
        key={day.id}
        selected={day.name === props.day}
        name={day.name}
        spots={spotsAvailable}
        setDay={props.setDay}
      />
    );
  });
  return (
    <div>
      <ul>{dayListItems}</ul>
    </div>
  );
}
