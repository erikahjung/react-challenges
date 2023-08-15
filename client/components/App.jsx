import React, { useState, useEffect } from 'react';

import { Input } from './Input.jsx';
import { Queue } from './Queue.jsx';
import { setIn } from 'immutable';
import { Header } from './Header.jsx';

function App () {
  const [queues, setQueues] = useState([[], [], [], [], []]);

  const addToQueue = (val) => {
    if (val < 1) return;

    let min = Infinity;
    let targetKey = null;
    for (let i = 0; i < queues.length; i++) {
      let total = queues[i].reduce((acc, curr) => acc + curr, 0);
      if (total < min) {
        min = total;
        targetKey = i;
      }
    }

    let targetIndex = null;
    setQueues((prevQueues) => {
      const newQueues = [];
      for (let i = 0; i < prevQueues.length; i++) {
        newQueues[i] = [...prevQueues[i]];
        if (i === targetKey) {
          newQueues[i].push(val);
          targetIndex = newQueues[i].length - 1;
        }
      }
      return newQueues;
    })
    
    let intervalID = setInterval(() => decrementValue(targetKey, targetIndex), 1000);
    setTimeout(() => {
      clearInterval(intervalID);
    }, val * 1000);
  }

  const decrementValue = (queue, index) => {
    setQueues((prevQueues) => {
      const updatedQueues = [];
        for (let i = 0; i < prevQueues.length; i++) {
          updatedQueues[i] = [...prevQueues[i]];
          if (i === queue) {
            updatedQueues[i][index]--;
          }
        }
      return updatedQueues;
    })
  };

  return (
    <>
      <Header link={"https://www.youtube.com/watch?v=B9fmr1TpKHE"} title={"Grocery Store Queue"} />
      <Input addToQueue={addToQueue}/>
      <div id="queue-container">
        <Queue key={0} id={0} values={queues[0]} />
        <Queue key={1} id={1} values={queues[1]} />
        <Queue key={2} id={2} values={queues[2]} />
        <Queue key={3} id={3} values={queues[3]} />
        <Queue key={4} id={4} values={queues[4]} />
      </div>
    </>
  )
}

export default App;