import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/header";

export default function Appointment(props) {
  return (
    <div>
      <Header time={props.time} />
    </div>
  );
}
