import React, {useState} from "react";
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

export default function Form(props) {
 const [NameState, setNameState] = useState(props.name|| "")
 const [interviewerState, setInterviewerState] = useState(props.interviewer || null)
 const reset = () => {
   setNameState("")
   setInterviewerState(null)
 }
 const save = () => {
   setNameState(NameState)
   setInterviewerState(interviewerState)
   console.log("namestate --->",NameState)
   console.log("interviewerState--->", interviewerState)
 }
  return (

    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} 
    autoComplete="off">
    
      <input onChange={(evt) => setNameState(evt.target.value)}
             
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        value={NameState}
        placeholder="Enter Student Name"
      />
    </form>
    <InterviewerList interviewers = {props.interviewers} interviewer = {interviewerState} setInterviewer = {setInterviewerState}/>
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button onClick={reset} danger>Cancel</Button>
      <Button onClick={save} confirm>Save</Button>
    </section>
  </section>
</main>
  )
}