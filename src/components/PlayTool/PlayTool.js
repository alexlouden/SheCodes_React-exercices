import React from "react";

import scissors from "./img/scissors.jpg";
import paper from "./img/paper.jpg";
import rock from "./img/rock.jpg";

function PlayTool({ tool, toolPicked, onClick }) {
  // const image = `components/PlayTool/img/${props.tool}.jpg`;
  return (
    <div className={`card ${tool === toolPicked ? " active" : ""}`}>
      <h3>{tool}</h3>
      <img
        src={tool === "scissors" ? scissors : tool === "paper" ? paper : rock}
        alt={tool}
        onClick={onClick}
      />
    </div>
  );
}

export default PlayTool;
