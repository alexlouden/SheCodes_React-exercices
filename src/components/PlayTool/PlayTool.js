import React from "react";

function PlayTool({ tool, toolPicked, onClick }) {
  const image = require(`./img/${tool}.jpg`);
  return (
    <div className={`card ${tool === toolPicked ? " active" : ""}`}>
      <h3>{tool}</h3>
      <img src={image} alt={tool} onClick={onClick} />
    </div>
  );
}

export default PlayTool;
