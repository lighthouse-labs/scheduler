import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/header";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "components/Appointment/Form.js";
import Status from "components/Appointment/Status.js";
import Confirm from "components/Appointment/Confirm.js"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const CONFIRM = "CONFIRM";
const DELETE = "DELETE"

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Appointment(props) {
  console.log("PROPS HERE",props)

  function save(name, interviewer, time) {

    if (name === "" || !interviewer) {
      console.log('Bad input')
      return;
    }

    const interview = {
      id: props.id,
      time: time,
      interview: {
        student: name,
        interviewer: interviewer
      }
    }

    props.bookInterview(props.id, interview).then(()=>{
      //console.log("BOOK INTERVIEW SHOW",interview);
      modeTracker.transition(SHOW);
    })
    modeTracker.transition(SAVE);
    
    console.log("save triggered")
  }
  function onDelete(){
    props.deleteInterview(props.id, props.time).then(()=>{
      modeTracker.transition(EMPTY);
    })
    modeTracker.transition(DELETE);
  }

  // BYPASS API BUGS FROM LIGHTHOUSE LABS
  console.log('my darling viet', props.interview)
  // console.log(props.interview.student)
  // console.log(props.interview.interviewer)
  let interviewer = null;
  if (props.interview) {
    if (props.interview.student && !props.interview.interviewer) {
      interviewer = {avatar: "https://i.imgur.com/3tVgsra.jpg",
      id: 7,
      name: "Alec Quon"}
    } else {
      interviewer = props.interview.interviewer
    }
  }
  //=================================================

  const modeTracker = useVisualMode(props.interview ? SHOW : EMPTY);


  console.log("Checking Interviews ==========================",props.interview)
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
          interviewer={interviewer}
          onTrash = {()=>{modeTracker.transition(CONFIRM)}}
          onEdit = {()=>{modeTracker.transition(CREATE)}}
        />
      )}
      {modeTracker.mode === CREATE && (
        <Form
          interviewers={props.interviewers }
          interviewerID={props.interview? props.interview.interviewer.id: null}
          onCancel= {()=>{
            modeTracker.back();
          }}
          
          name={ props.interview? props.interview.student: "Sample" }
          onSave={(name, interviewer) => {

            save(name, interviewer, props.time);
            
          }}
          
        />
      )} 
      {modeTracker.mode === SAVE && <Status message = {"SAVING"} />}
      {modeTracker.mode === DELETE && <Status message = {"DELETING"} />}
      {modeTracker.mode === CONFIRM && <Confirm onCancel={()=>{modeTracker.transition(SHOW)}} onConfirm ={()=>{onDelete()}}/>}
          
    </div>
  );
}
