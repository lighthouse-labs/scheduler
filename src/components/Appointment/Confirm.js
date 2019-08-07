import React from "react";
import Button from "../../components/Button";
function Confirm() {
  return (
    <main class="appointment__card appointment__card--confirm">
      <h1 class="text--semi-bold">Delete the appointment?</h1>
      <section class="appointment__actions">
        <Button danger>Cancel</Button>
        <Button danger>Confirm</Button>
      </section>
    </main>
  );
}

export default Confirm;
