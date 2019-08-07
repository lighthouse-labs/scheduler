import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
    const dayListItems = props.days.map(day => {
        return <DayListItem key={props.id} selected={day.name === props.day} name={day.name} spots={day.spots} setDay={props.setDay} />
    })
    
    return (
    <div>
        <ul>
           
          {dayListItems}  
        </ul>
    </div>    
    )
}