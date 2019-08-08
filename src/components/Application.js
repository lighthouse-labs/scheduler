import React,{useState,useEffect} from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment/Index.js";


const days = [];


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
     
  },

  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Steven Segal",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
      
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Jean-Claude Van Damme",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
     
  {
    id: 6,
    time: "5pm",
    interview: {
      student: "Simon Garber",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
];
   
  

export default function Application(props) {
  const  [dayState, setDayState] = useState([])
  const [day,setDay] = useState("Monday");
  const [interviewerState, setInterviewerState] = React.useState(  null )
  const AppointmentList = appointments.map(appointment => {
    return <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} />
  })


  useEffect(()=> {
    axios.get(`http://localhost:3001/api/days`)
  .then(res => {
  const dayData = res.data;
  console.log(res.data)
  setDayState(dayData)
  
  })




  },[])
    console.log(day)

  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
          
        <DayList 
          days={dayState}
          day={day}
          setDay={day => setDay( day)}
        />
          
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        /> 
      </section>

      <section className="schedule">
        {AppointmentList}
      </section>
    </main>
  );
}