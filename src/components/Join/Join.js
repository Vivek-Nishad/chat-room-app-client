import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

function Join({ sameNameErrMsg }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              type="text"
              className="joinInput"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {sameNameErrMsg ? <p className="errMsg">{sameNameErrMsg}</p> : null}
          </div>
          <div>
            <input
              type="text"
              className="joinInput"
              placeholder="Room"
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>

          <div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className="joinBtn" type="submit">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
