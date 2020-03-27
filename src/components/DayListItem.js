import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const formatSpots = (
    props.spots === 0? "no spots remaining" :
    props.spots === 1? `${props.spots} spot remaining` : `${props.spots} spots remaining`
  )

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="day-item-name">{ props.name }</h2> 
      <h3 className="day-item-spots">{ formatSpots }</h3>
    </li>
  );
}
