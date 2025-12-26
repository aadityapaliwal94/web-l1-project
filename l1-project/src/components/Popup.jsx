import { X } from "lucide-react";

const Popup = ({ children, onClose, isOpen, hideCrossButton }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-1000">
        <div className="popup-content">
          {children}
          {!hideCrossButton && <button className="popup-close-button" onClick={onClose}>
            <X />
          </button>
          }
        </div>
      </div>
    );
};

export default Popup