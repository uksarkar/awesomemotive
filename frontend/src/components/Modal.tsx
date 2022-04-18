import { ReactNode } from "react";

const Modal = ({
  isActive = false,
  children,
  header,
  footer,
}: {
  isActive?: boolean;
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}) => {
  return (
    <div className={isActive ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">{header}</header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">{footer}</footer>
      </div>
    </div>
  );
};

export default Modal;
