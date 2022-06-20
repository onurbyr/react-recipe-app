import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, title, body }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <div>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
