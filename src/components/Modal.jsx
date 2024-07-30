import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
