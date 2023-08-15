import React from "react";

export const Header = ({ link, title }) => {
  return (
    <div id="header">
      <h1>React Challenge</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </div>
  )
};