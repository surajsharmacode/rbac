// src/components/Modal.jsx
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            ✖
          </button>
          <div>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  