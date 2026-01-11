import { X } from "lucide-react";

const Popup = ({ children, onClose, isOpen, hideCrossButton }) => {
    if (!isOpen) return null;

    return (
      <div className="popup-overlay">
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