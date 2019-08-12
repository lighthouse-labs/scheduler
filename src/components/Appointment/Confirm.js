import React from 'react';
import Button from 'components/Button.js';
import useVisualMode from 'hooks/useVisualMode';
export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>
          cancel
        </Button>
        <Button onClick={props.onConfirm} danger>
          confirm
        </Button>
      </section>
    </main>
  );
}
