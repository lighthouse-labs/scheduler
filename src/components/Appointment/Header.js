import React from "react";
import classnames from "classnames";
import "./Styles.scss";
export default function Header(props) {
  const headerClass = classnames("header", {
   
    "appointment__time": props.time
  });

  
  return (
    <header className="appointment__time">
  <h4 className="text--semi-bold">{props.time}</h4>
  <hr className="appointment__separator" />
</header>
  )
}