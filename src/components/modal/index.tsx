import React from "react";
import "./modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }: any) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div>
            <button className="closeBtn"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
