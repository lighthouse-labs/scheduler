import React, { useEffect } from 'react';
import Header from 'components/Appointment/Header.js';
import Empty from 'components/Appointment/Empty.js';
import Show from 'components/Appointment/Show.js';
import Status from 'components/Appointment/Status.js';
import Confirm from 'components/Appointment/Confirm.js';
import Form from './Form';
import Error from 'components/Appointment/Error.js';
import useVisualMode from 'hooks/useVisualMode.js';
import 'components/Appointment/Styles.scss';
import 'components/InterviewerList.js';

//Defining the names for each of the possible modes when performing site actions
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
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  //Function for booking appointments in the schedule
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
  //Function for removing booked appointments in the schedule
  const remove = (event) => {
    transition(DELETING, true);
    props
      .deleteInterview(props.id, props.time)
      .then(() => {
        transition(EMPTY);
      })
      .catch((error) => transition(ERROR_DELETE, true));
  };
  //Handling the transitions between views
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
  }, [transition, props.interview, mode]);
  //JSX that renders each of the views for user actions when booking editing and deleting appointments
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
      {mode === ERROR_SAVE && (
        <Error
          message="The appointment could not be saved"
          onClose={() => back(CREATE)}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="The appointment could not be deleted"
          onClose={() => back(SHOW)}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === EMPTY && props.time !== '10pm' && (
        <Empty onAdd={() => transition(CREATE)} />
      )}
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
