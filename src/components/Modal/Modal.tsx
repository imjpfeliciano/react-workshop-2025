interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-white p-4 rounded-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
