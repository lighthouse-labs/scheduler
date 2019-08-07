import React from "react";


export default function Empty(props) {
 const onAdd = () => {
   console.log("Add appointment button clicked")
 }
  return (
    <main className="appointment__add">
  <img onClick={onAdd}
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
  />
</main>
  )

  
}

