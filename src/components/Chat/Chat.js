import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import Join from "../Join/Join";

// const ENDPOINT = "localhost:5000";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userRoomData, setUserRoomData] = useState("");
  const ENDPOINT = "https://chat-room-app-vk.herokuapp.com/";

  const [sameNameErr, setSameNameErr] = useState(false);
  const [sameNameErrMsg, setSameNameErrMsg] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (err) => {
      if (err) {
        // alert(err);
        setSameNameErr(true);
        setSameNameErrMsg(err);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  useEffect(() => {
    socket.on("roomData", (usrdata) => {
      setUserRoomData(usrdata);
    });
  }, [userRoomData]);

  // console.log(userRoomData);
  // console.log(userRoomData.room);
  // console.log(userRoomData.users);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log(message, messages);

  return sameNameErr ? (
    <>
      <Join sameNameErrMsg={sameNameErrMsg} />
    </>
  ) : (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} userRoomData={userRoomData} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
