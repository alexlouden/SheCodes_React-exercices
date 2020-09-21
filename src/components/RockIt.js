import React, { useState } from "react";
import PlayTool from "./PlayTool/PlayTool";

function RockIt() {
  const [toolPicked, setToolPicked] = useState("");
  console.log({ toolPicked });
  return (
    <div className="container">
      <div id="list-tools">
        <PlayTool
          tool="scissors"
          onClick={() => setToolPicked("scissors")}
          toolPicked={toolPicked}
        />
        <PlayTool
          tool="paper"
          onClick={() => setToolPicked("paper")}
          toolPicked={toolPicked}
        />
        <PlayTool
          tool="rock"
          onClick={() => setToolPicked("rock")}
          toolPicked={toolPicked}
        />
      </div>

      <div id="your-pick">
        <h3>Your pick:</h3>
      </div>
      <div id="my-pick">
        <h3>My pick:</h3>
        {toolPicked && <PlayTool tool={toolPicked} />}
      </div>
    </div>
  );
}

export default RockIt;
