import React, { useState, useEffect } from 'react';
import Header from 'components/Appointment/Header.js';
import Empty from 'components/Appointment/Empty.js';
import Show from 'components/Appointment/Show.js';
import Status from 'components/Appointment/Status.js';
import Confirm from 'components/Appointment/Confirm.js';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode.js';
import 'components/Appointment/Styles.scss';
import 'components/InterviewerList.js';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const CONFIRM = 'CONFIRM';
const DELETING = 'DELETING';

export default function Appointment(props) {
  const save = (name, interviewer) => {
    const interview = { student: name, interviewer };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((e) => {
        console.log('Error => ', e);
      });
  };

  const remove = (name, interviewer) => {
    const interview = { student: name, interviewer };
    transition(DELETING);
    props
      .deleteInterview(props.id, interview)
      .then(() => {
        transition(EMPTY);
      })
      .catch((e) => {
        console.log('Error =>', e);
      });
  };

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article>
      <Header time={props.time} />
      {mode === CONFIRM && (
        <Confirm onCancel={() => back(SHOW)} onConfirm={remove} />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={() => {
            transition(CONFIRM);
          }}
        />
      )}
      {/* {mode === SHOW && <Confirm />} */}
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
