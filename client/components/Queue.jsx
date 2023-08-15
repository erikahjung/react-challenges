import React, { memo } from "react";

export const Queue = ({ values }) => {
  const list = values.map((val) => {
    <p>{val}</p>
  })

  console.log(list);

  return (
    <div className="queue">
      {list}
    </div>
  )
};