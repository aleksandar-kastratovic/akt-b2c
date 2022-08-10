import { Fragment } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ onClose, children, className }) => {
  return (
    <Fragment>
      <div onClick={onClose} className={styles["modal-shadow"]}></div>
      <div className={`${styles["modal-content"]} ${className}`}>
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;
