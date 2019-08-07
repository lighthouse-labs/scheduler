import React from "react";
import classnames from 'classnames';
import "components/DayListItem.scss";

export default function DayListItem(props) {
    const daylistClass = classnames("day-list__item", {
    "day-list__item--selected" : props.selected,
    "day-list__item--full": props.spots===0
    
    })
    
    return (
      
     <li onClick={() => {if(props.setDay){props.setDay(props.name)}}} className = {daylistClass}  > 
        
                <h2>{props.name}</h2>
      
      {props.spots === 0 ? 'no' : props.spots } spot{props.spots !== 1 && 's'} remaining 
     </li> 
    )
    


}
    
