import React, { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import "./toast.css";

interface ToastNotificationProps {
  type: "success" | "error" | "warning";
  message: string;
  showToast: boolean;
  toggleToast: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  type,
  message,
  showToast,
  toggleToast,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggleToast();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showToast]);

  const closeToast = () => {
    toggleToast();
  };

  return (
    <div
      className={`toast-notification ${type} ${
        showToast ? "visible" : "hidden"
      }`}
    >
      <button className="close-button" onClick={closeToast}>
        <TfiClose />
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ToastNotification;
