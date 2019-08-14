import React, { useState } from 'react';
import Button from 'components/Button.js';
import InterviewerList from 'components/InterviewerList.js';
// Appointments are booked using the form rendered from this component
// The form fields and list of interviewers are rendered with the options to save or cancel
export default function Form(props) {
  const [NameState, setNameState] = useState(props.name || '');
  const [interviewerState, setInterviewerState] = useState(
    props.interviewer || null
  );
  // The form is cleared and local state for name and interviewer is cleared onClick
  const reset = () => {
    setNameState('');
    setInterviewerState(null);
    props.onCancel();
  };
  // Normal form submission behaviour is prevented and namestate is tracked onChange before the form is submitted
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            onChange={(evt) => setNameState(evt.target.value)}
            className="appointment__create-input text--semi-bold"
            name={NameState}
            type="text"
            value={NameState}
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList
          className="interviewers"
          interviewers={props.interviewers}
          interviewer={props.interviewer}
          setInterviewer={setInterviewerState}
          onChange={setInterviewerState}
          value={interviewerState}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger={true} onClick={reset}>
            Cancel
          </Button>
          <Button
            onClick={(evt) => props.onSave(NameState, interviewerState)}
            confirm={true}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
