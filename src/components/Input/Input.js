import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />

    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <i className="fab fa-telegram-plane"></i>
    </button>
  </form>
);

export default Input;
