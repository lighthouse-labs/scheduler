import { useState } from 'react';

export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([]);

  return {
    mode: mode,
    transition: (newMode, replace) => {
      // setMode(newMode);
      if (replace) {
        setHistory([...history]);
      } else {
        // setMode(newMode);
        setHistory([mode, ...history]);
      }
      setMode(newMode);
    },
    back: () => {
      const [prevMode, ...allPrevModes] = history;
      if (history.length === 0) {
        return;
      }
      setMode(prevMode);
      setHistory(allPrevModes);
    }
  };
}
