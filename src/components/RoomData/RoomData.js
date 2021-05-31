import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "./RoomData.css";

const RoomData = ({ userRoomData: { room, users } }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <h3 onClick={onOpenModal}>{room}</h3>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>
          <div>Users currently in {room} :</div>
          <div className="users ">
            {users
              ? users.map((user) => <p key={user.id}>{user.name}</p>)
              : null}
          </div>
        </h2>
      </Modal>
    </div>
  );
};

export default RoomData;
