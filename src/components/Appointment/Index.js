import React from "react";
import "components/Appointment/Styles.scss";
import Header from"components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import "components/InterviewerList.js";
import Show from "components/Appointment/Show.js";

export default function Appointment(props) {


return (
  
 
  <article
  >
 
    <Header time={props.time} ></Header>
    {!props.interview ? <Empty /> :  <Show student={props.interview.student}/>}
   
    </article>
  

 
)

}