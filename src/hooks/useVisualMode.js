import { useState } from 'react';

export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([]);

  return {
    mode: mode,
    transition: (newMode, replace) => {
      setMode(newMode);
      if (replace) {
        setHistory([...history.slice(0, history.length - 1), mode]);
      } else {
        // setMode(newMode);
        setHistory([...history, mode]);
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
