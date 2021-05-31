import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  let isSentByAdmin = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user === "admin" || user === "Admin") {
    isSentByAdmin = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd ">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox sentMsgBg">
        <p className="messageText sentMsgCol">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : isSentByAdmin ? (
    <div className="messageContainer justifyCenter">
      <div className="messageBox adminMsgBg">
        <p className="messageText adminMsgCol adminMsgText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox receivedMsgBg">
        <p className="messageText receivedMsgCol">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pr-10">{user}</p>
    </div>
  );
};

export default Message;
