import Button from "../Button/Button";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <Button textContent="X" handleClick={onClose} />
        {children}
      </div>
    </div>
  );
}
