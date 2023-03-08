import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

export type BackdropProps = {
  closeModal: () => void;
};

type ModalOverlayProps = {
  children: React.ReactNode;
};

type ModalProps = BackdropProps & ModalOverlayProps;

const Backdrop = ({ closeModal }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={closeModal} />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <div className={classes.modal__overlay}>{children}</div>;
};

let portalElement: any;

if (typeof window === "object") {
  portalElement = document.getElementById("overlays") as HTMLElement;
}

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
