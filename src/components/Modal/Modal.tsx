import { useEffect } from "react";
import Button from "../Button/Button";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    function onKeyDownPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDownPress);

    return () => {
      document.removeEventListener("keydown", onKeyDownPress);
    };
  }, [onClose]);

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div onClick={onBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <Button textContent="X" handleClick={onClose} />
        {children}
      </div>
    </div>
  );
}
