import { useEffect } from "react";

// This code handles a modal window. When the user presses "Escape," the modal should close. What's wrong with this code? What are the circumstances?

export const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (<>{/* modal window JSX */}</>);
};

// Answer: You should add cleanup function to the return statement of useEffect to prevent memory leak.