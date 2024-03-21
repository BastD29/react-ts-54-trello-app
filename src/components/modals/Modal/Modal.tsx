import { FC, MouseEvent, ReactNode } from "react";

import style from "./Modal.module.scss";

type ModalProps = {
  modal: ReactNode;
  unsetModal: () => void;
};

const Modal: FC<ModalProps> = ({ modal, unsetModal }) => {
  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <div className={style["overlay"]} onClick={unsetModal} />
      <div className={style["modal"]} onClick={stopPropagation}>
        {/* <div className={style["modal__inner"]}> */}
        <button className={style["modal__close-btn"]} onClick={unsetModal}>
          x
        </button>
        {modal}
        {/* </div> */}
      </div>
    </>
  );
};

export default Modal;
