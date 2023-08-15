import React, { memo, useRef } from "react";

export const Queue = ({ id, values }) => {
  // const list = values.map((val, index) => <p key={index}>{val}</p>);

  const list = values.reduce((acc, curr, i) => {
    if (curr > 0) {
      acc.push(<p key={i}>{curr}</p>)
    }
    return acc;
  }, [])

  // let count = useRef(0);

  return (
    <div className="queue">
      <p><b>{id}</b></p>
      {/* {"re-render count: " + count.current++} */}
      {list}
    </div>
  )
};