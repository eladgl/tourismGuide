import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // Modal is a stateless functional component that displays a modal dialog.

  // Props:
  // - isOpen (boolean): Controls whether the modal is visible or not.
  //   If `false`, the modal is not rendered (returns `null`).
  // - onClose (function): A callback function that is triggered when the "Close" button is clicked.
  //   This function should typically close the modal.
  // - children (ReactNode): The content to be displayed inside the modal.
  //   It could be text, elements, or other React components.

  // Returns:
  // - If `isOpen` is true, the component renders a fixed-position, centered modal with a semi-transparent background.
  //   The modal contains the `children` content and a "Close" button.
  //   When the "Close" button is clicked, it triggers the `onClose` function.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
