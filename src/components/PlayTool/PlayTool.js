import React, { useState } from "react";

import scissors from "./img/scissors.jpg";
import paper from "./img/paper.jpg";
import rock from "./img/rock.jpg";

function PlayTool(props) {
  const [addClass, addClassValue] = useState(false);

  const toggleClass = () => {
    addClassValue(!addClass);
  };

  // const image = `components/PlayTool/img/${props.tool}.jpg`;
  return (
    <div className={`card ${addClass ? " active" : ""}`}>
      <h3>{props.tool}</h3>
      <img
        src={
          props.tool === "scissors"
            ? scissors
            : props.tool === "paper"
            ? paper
            : rock
        }
        alt={props.tool}
        onClick={toggleClass}
      />
    </div>
  );
}

export default PlayTool;
