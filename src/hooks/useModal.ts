import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("Calling open modal from my custom hook");
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("Calling close modal from my custom hook");
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
