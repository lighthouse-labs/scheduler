import React from "react";
import Button from "components/Button.js";
export default function Confirm(props) {
const confirm = () => {
  console.log("confirm button Clicked")
}
const cancel = () => {
  console.log("cancel button Cicked")
}

return (
<main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">{props.message}</h1>
  <section className="appointment__actions">
    <Button onClick={cancel} danger>cancel{props.onCancel}</Button>
    <Button onClick={confirm} danger>confirm{props.onConfirm}</Button>
  </section>
</main>
)

}