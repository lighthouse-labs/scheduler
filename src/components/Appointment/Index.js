import React, { useState } from 'react';
import 'components/Appointment/Styles.scss';
import Header from 'components/Appointment/Header.js';
import Empty from 'components/Appointment/Empty.js';
import 'components/InterviewerList.js';
import Show from 'components/Appointment/Show.js';
import useVisualMode from 'hooks/useVisualMode.js';
import Form from './Form';

export default function Appointment(props) {
  let initialState = '';
  if (props.interview) {
    initialState = 'SHOW';
  } else {
    initialState = 'EMPTY';
  }
  const { mode, transition, back } = useVisualMode(initialState);

  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  return (
    <article>
      <Header time={props.time} />
      {mode === EMPTY && (
        <Empty
          onAdd={() => {
            transition(CREATE);
          }}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          name={props.interview ? props.interview.student : null}
          interviewer={[]}
          interviewers={[]}
          onCancel={() => {
            transition(EMPTY);
          }}
        />
      )}
    </article>
  );
}
