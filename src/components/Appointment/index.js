import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/header";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "components/Appointment/Form.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Appointment(props) {
  const modeTracker = useVisualMode(props.interview ? SHOW : EMPTY);
  return (
    <div>
      <Header time={props.time} />
      {modeTracker.mode === EMPTY && (
        <Empty
          onAdd={() => {
            modeTracker.transition(CREATE);
          }}
        />
      )}
      {modeTracker.mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {modeTracker.mode === CREATE && (
        <Form
          interviewers={interviewers}
          interviewer={5}
          onCancel= {()=>{
            modeTracker.transition(EMPTY);
          }}
          name="angelina"
          onSave={() => {
            console.log("saving");
            //console.log(name);
            //console.log(interviewer);
          }}
        />
      )}
    </div>
  );
}
