import React, { useEffect } from 'react';
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
const EDIT = 'EDIT';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';

export default function Appointment(props) {
  console.log('Props!=>', props);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = { student: name, interviewer };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((error) => transition(ERROR_SAVE, true));
  };

  const remove = (event) => {
    transition(DELETING, true);
    props
      .deleteInterview(props.id, props.time)
      .then(() => {
        transition(EMPTY);
      })
      .catch((error) => transition(ERROR_DELETE, true));
  };

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
  }, [transition, props.interview, mode]);

  return (
    <article>
      <Header time={props.time} />
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to Delete the appointment?"
          onCancel={() => back(SHOW)}
          onConfirm={remove}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={(e) => transition(EDIT)}
          onDelete={(e) => {
            transition(CONFIRM);
          }}
        />
      )}
      {mode === CREATE && (
        <Form
          name={''}
          interviewer={null}
          interviewers={props.interviewers}
          onCancel={(e) => back()}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={(e) => back()}
        />
      )}
    </article>
  );
}
