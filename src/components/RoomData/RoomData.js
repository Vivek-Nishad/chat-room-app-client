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
        <h3>
          <div>Users currently in {room} :</div>
        </h3>
        <h5>
          <div className="users ">
            {users
              ? users.map((user) => <p key={user.id}>{user.name}</p>)
              : null}
          </div>
        </h5>
      </Modal>
    </div>
  );
};

export default RoomData;
