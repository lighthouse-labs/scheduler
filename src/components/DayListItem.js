import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const buttonClass = classnames("day-list__item", {
    "day-list__item--full": props.spots === 0,
    "day-list__item--selected": props.selected
  });

  return (
    <div
      className={buttonClass}
      onClick={() => {
        console.log('previous day is ', props.state.day)
        props.setDay();
      }}>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <h2>
          {props.spots === 0 ? "no " : props.spots} spot
          {props.spots !== 1 ? "s" : ""} remaining
        </h2>
      </div>
    </div>
  );
}
