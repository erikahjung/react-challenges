import React, { useState, useEffect } from 'react';

import { Input } from './Input.jsx';
import { Queue } from './Queue.jsx';

function App () {
  const [value, setValue] = useState(0);
  const [totals, setTotals] = useState([0, 0, 0, 0, 0])
  const [queues, setQueues] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  })

  useEffect(() => {
    let min = Infinity;
    let targetKey = null;
    for (let i = 0; i < totals.length; i++) {
      if (totals[i] < min) {
        min = totals[i];
        targetKey = i;
      }
    }

    setTotals((prevTotals) => {
      const newTotals = [...prevTotals];
      newTotals[targetKey] += value;
      return newTotals;
    })

    setQueues((prevQueues) => {
      const newQueues = {};
      for (const key in prevQueues) {
        newQueues[key] = [...prevQueues[key]];
      }
      newQueues[targetKey].push(value);
      return newQueues;
    })

    setValue(0);

    console.log(totals);
    console.log(queues);
  }, [value])

  return (
    <>
      <h1>React Challenge</h1>
      <a href="https://www.youtube.com/watch?v=B9fmr1TpKHE" target="_blank" rel="noopener noreferrer">Grocery Store Queue</a>
      <Input setValue={setValue}/>
      <Queue key={0} values={queues[0]} />
      <Queue key={1} values={queues[1]}/>
      <Queue key={2} values={queues[2]}/>
      <Queue key={3} values={queues[3]}/>
      <Queue key={4} values={queues[4]}/>
    </>
  )
}

export default App;