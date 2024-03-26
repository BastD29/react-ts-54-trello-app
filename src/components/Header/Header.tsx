import { FC } from "react";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useBoard } from "../../hooks/useBoard";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { setModal } = useModal();
  const { state } = useBoard();
  const { currentBoard } = state;

  console.log("state:", state);

  return (
    <header className={style["header"]}>
      <h1>{currentBoard ? currentBoard.name : ""}</h1>
      <button onClick={() => setModal(<DeleteModal />)}>Delete Board</button>
    </header>
  );
};

export default Header;
