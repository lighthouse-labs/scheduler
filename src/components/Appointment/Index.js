import React, { useState, useEffect } from 'react';
import Header from 'components/Appointment/Header.js';
import Empty from 'components/Appointment/Empty.js';
import Show from 'components/Appointment/Show.js';
import Status from 'components/Appointment/Status.js';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode.js';
import 'components/Appointment/Styles.scss';
import 'components/InterviewerList.js';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';

export default function Appointment(props) {
  const save = (name, interviewer) => {
    const interview = { student: name, interviewer };
    props.bookInterview(props.id, interview);
    transition(SHOW);
  };

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article>
      <Header time={props.time} />
      {mode === SAVING && <Status />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      )}

      {mode === CREATE && (
        <Form
          name={props.interview ? props.interview.student : null}
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          onCancel={() => {
            transition(EMPTY);
          }}
          onSave={save}
        />
      )}
    </article>
  );
}
