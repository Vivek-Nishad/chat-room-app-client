import React from "react";
import RoomData from "../RoomData/RoomData";

import "./InfoBar.css";

const InfoBar = ({ room, userRoomData }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <RoomData userRoomData={userRoomData} />
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
