import { FC } from "react";
import { useModal } from "../../hooks/useModal";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import { useBoard } from "../../hooks/useBoard";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { setModal } = useModal();
  const { state } = useBoard();
  const { currentBoard } = state;

  return (
    <header className={style["header"]}>
      <h1>{currentBoard ? currentBoard.name : ""}</h1>
      <button onClick={() => setModal(<DeleteModal />)}>Delete Board</button>
    </header>
  );
};

export default Header;
