import React, { useState, useEffect } from 'react';

import { Input } from './Input.jsx';
import { Queue } from './Queue.jsx';
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

    // let targetIndex = queues[targetKey].length;
    setQueues((prevQueues) => {
      return prevQueues.map((q, index) => index === targetKey ? [...q, val] : q)
    })
    
    // let intervalID = setInterval(() => decrementValue(targetKey, targetIndex), 1000);
    // setTimeout(() => {
    //   clearInterval(intervalID);
    // }, val * 1000);
  }

  //decrement EACH number in the queue by 1 every 1 second
  // const decrementValue = (queue, index) => {
  //   setQueues((prevQueues) => {
  //     const updatedQueues = [];
  //       for (let i = 0; i < prevQueues.length; i++) {
  //         updatedQueues[i] = [...prevQueues[i]];
  //         if (i === queue) {
  //           updatedQueues[i][index]--;
  //         }
  //       }
  //     return updatedQueues;
  //   })
  // };

  //decrement the FIRST number in the queue by 1 every 1 second
  useEffect(() => {
    const intervalID = setInterval(() => {
      setQueues((prevQueues) => {
        return prevQueues.map((q) => {
          if (!q.length) return [];

          return q[0] ? [q[0] - 1, ...q.slice(1)] : [...q.slice(1)]
        })
      })
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, [])

  return (
    <>
      <Header link={"https://www.youtube.com/watch?v=B9fmr1TpKHE"} title={"Grocery Store Queue"} />
      <Input addToQueue={addToQueue}/>
      <div id="queue-container">
        {queues.map((arr, i) =>
          <Queue key={i} id={i} values={arr} />
        )}
      </div>
    </>
  )
}

export default App;