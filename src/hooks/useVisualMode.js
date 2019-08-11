import React, { useState } from "react";

//returns a mode that will determine what to render onto the screen
export default function useVisualMode(val) {
  const [mode, changeMode] = useState(val);
  const [history, changeHistory] = useState([]);
  return {
    mode,
    transition: (setValue, replace) => {
      changeHistory([mode, ...history]);
      changeMode(setValue);
      if (replace) {
        changeHistory([history[history.length - 1]]);
      }
    },
    back: () => {
      const [newMode, ...newHistory] = history;
      if (history.length === 0) return;

      changeHistory(newHistory);
      changeMode(newMode);
    }
  };
}

//export { useVisualMode };
