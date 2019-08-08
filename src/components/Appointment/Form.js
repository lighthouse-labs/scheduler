import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import InterviewerList from "../../components/InterviewerList";
export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(null);
  function reset() {
    setName("");
    setInterviewer(null);
    //props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          interviewer={props.interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={reset}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              console.log(name, interviewer);
              reset();
            }}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
