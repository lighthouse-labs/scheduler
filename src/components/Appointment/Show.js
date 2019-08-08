import React from "react";

function Show(props) {
  return (
    <main class="appointment__card appointment__card--show">
      <section class="appointment__card-left">
        <h2 class="text--regular">Lydia Miller-Jones</h2>
        <section class="interviewer">
          <h4 class="text--light">Interviewer</h4>
          <h3 class="text--regular">Sylvia Palmer</h3>
        </section>
      </section>
      <section class="appointment__card-right">
        <section class="appointment__actions">
          <img
            onClick={props.onEdit}
            class="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
          />
          <img
            onClick={props.onDelete}
            class="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
          />
        </section>
      </section>
    </main>
  );
}

export default Show;
