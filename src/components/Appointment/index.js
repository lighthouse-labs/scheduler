import React from "react";
import "components/Appointment/styles.scss";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/header";

export default function Appointment(props) {
  const interview = props.interview ? <Show {...props} /> : <Empty />;
  return (
    <div>
      <Header time={props.time} />
      {interview}
    </div>
  );
}
