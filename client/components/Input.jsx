import React, { useState } from "react";

export const Input = ({ addToQueue }) => {
  const [input, setInput] = useState(0);

  const onSubmit = (num) => {
    addToQueue(num);
    setInput(0);
  }

  return (
    <div id="input-bar">
      <input type="number" value={input} onChange={(e) => setInput(e.target.valueAsNumber)} required ></input>
      <button onClick={() => onSubmit(input)}>Add to Queue</button>
    </div>
  )
};
