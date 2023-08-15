import React, { useState } from "react";

export const Input = ({ setValue }) => {
  const [input, setInput] = useState(0);

  const addToQueue = (num) => {
    if (num > 0) {
      setValue(num);
    }
    setInput(0);
  }

  return (
    <div id="input-bar">
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addToQueue(Number(input))}>Add to Queue</button>
    </div>
  )
};
