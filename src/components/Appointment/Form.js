import React, { useState } from 'react';
import Button from 'components/Button.js';
import InterviewerList from 'components/InterviewerList.js';

export default function Form(props) {
  const [NameState, setNameState] = useState(props.name || '');
  const [interviewerState, setInterviewerState] = useState(
    props.interviewer || null
  );
  const reset = () => {
    setNameState('');
    setInterviewerState(null);
  };

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
          <Button onClick={props.onCancel} danger={true}>
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
