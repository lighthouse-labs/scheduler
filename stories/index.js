import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";
import Appointment from "components/Appointment/Index.js";
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Confirm from "components/Appointment/Confirm.js";
import Status from "components/Appointment/Status.js";
import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form.js";


storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => (
  <Button onClick={action("button-clicked")}>Base</Button>
  ))
  .add("Confirm", () => (
  /* Declaring the name of the button after the action will apply the styles */
    <Button confirm onClick={action("button-clicked")}>Confirm</Button>
  ))
  .add("Danger", () => (
  <Button danger onClick={action("button-clicked")}>Cancel</Button>
  ))
  .add("Clickable", () => (
    <Button clickable onClick={action("button-clicked")}>Clickable</Button>
    
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => (
  <DayListItem name="Monday" setDay={action("setDay")} spots={5} selected />
  ))
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} />
  ));

  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];
  
  storiesOf("DayList", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
    })
    .add("Monday", () => (
      <DayList key={days.id} days={days} day={"Monday"} setDay={action("setDay")} />
    ))
    .add("Tuesday", () => (
      <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
    ));

    const interviewer = {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    };
    
    storiesOf("InterviewerListItem", module)
      .addParameters({
        backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
      })
      .add("Unselected", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
        />
      ))
      .add("Selected", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}

        />
      ))
      .add("Clickable", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          setInterviewer={action("setInterviewer")}
        />
      ));

    const interviewers = [
      { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
      { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
      { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
      { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
      { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
    ];
    
    storiesOf("InterviewerList", module)
      .addParameters({
        backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
      })
      .add("Initial", () => (
        <InterviewerList
          interviewers={interviewers}
          setInterviewer={action("setInterviewer")}
        />
      ))
      .add("Preselected", () => (
        <InterviewerList
          interviewers={interviewers}
          interviewer={3}
          setInterviewer={action("setInterviewer")}
        />
      ));  

  storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment_with_Time", () => <Appointment time="12pm" />)
  .add("Appointment_Empty", () => (
   <Fragment>
     <Appointment id={1} time="12pm" />
     <Appointment id="last" time="1pm" />
   </Fragment> 
  ))
  .add("Appointment Booked", () => (
  <Fragment>
  <Appointment
    id={1}
    time="12pm"
   interview={{ student: "Lydia Miller-Jones", interviewer }}
  />
  <Appointment id="last" time="1pm" />
</Fragment>
))
  
  
  .add("Header", () => <Header time="12pm"/>)
  .add("Empty", () => <Empty />)
  .add("Show", ()=> <Show student="Lydia Miller-Jones"  />)
  .add("Confirm", () => 
  <Confirm 
  message="Delete the appointment?" />)
  .add("Status", () => 
  <Status
  message="Deleting" />)
  .add("Error", () => 
  <Error
  message="Could not delete appointment" />)
  
  
  storiesOf("Form", module)
  .addParameters({

  })
  .add("Create", () =>
  <Form 
  interviewers = {interviewers} />)
  .add("Edit", () =>
  <Form 
  name = {"archie cohen"}
  interviewers = {interviewers} />)

  



  
  
  

 

  