import React, { useState } from 'react';
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineTableCells } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";


const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Link href={"/blog"}><button className="modal-button"><TbEdit /></button></Link>
        <button className="modal-button"><HiOutlineTableCells /></button>
        <button className="modal-button"><BsBoxSeam /></button>
        <button className="modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
