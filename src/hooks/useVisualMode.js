import { useState } from 'react';
// Hook for creating the visual flow through the user inputs
export default function useVisualMode(value) {
  const [mode, setMode] = useState(value);
  const [history, setHistory] = useState([]);

  return {
    mode: mode,
    transition: (newMode, replace) => {
      if (replace) {
        setHistory([...history]);
      } else {
        setHistory([mode, ...history]);
      }
      setMode(newMode);
    },
    back: () => {
      if (history.length === 0) {
        return;
      }
      const [newMode, ...allPrevModes] = history;
      setHistory(allPrevModes);
      setMode(newMode);
    }
  };
}
