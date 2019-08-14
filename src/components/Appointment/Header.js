import React from 'react';
import 'components/Appointment/Styles.scss';

// Header component that appears on each appointment
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}
