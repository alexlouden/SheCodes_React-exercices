import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/" className={"button"}>
        Home
      </Link>
      <Link to="/increment" className={"button"}>
        Increment
      </Link>
      <Link to="/rock-it" className={"button"}>
        Rock It
      </Link>
    </div>
  );
}

export default Nav;
