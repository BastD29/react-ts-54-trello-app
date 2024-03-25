import { FC } from "react";
import style from "./Header.module.scss";
import { useBoard } from "../../hooks/useBoard";

const Header: FC = () => {
  const { currentBoard } = useBoard();

  return (
    <header className={style["header"]}>
      {/* <h1>Header</h1> */}
      <h1>{currentBoard ? currentBoard.name : "Header"}</h1>
    </header>
  );
};

export default Header;
