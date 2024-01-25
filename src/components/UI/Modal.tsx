import React, { ReactNode } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const Modal = ({
  isOpen,
  toggleModal,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
  toggleModal: () => void;
}) => {
  return (
    <>
      <button onClick={toggleModal} className="upload-btn">
        <MdOutlineFileUpload style={{ fontSize: "24px" }} />
        <p>Upload Music</p>
      </button>

      <div className={`upload-form-modal ${isOpen ? "show" : "hide"}`}>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
