import { FC } from "react";
import { useBoard } from "../../../hooks/useBoard";
import BoardItem from "../BoardItem/BoardItem";
import style from "./BoardsList.module.scss";

const BoardsList: FC = () => {
  const { state } = useBoard();

  return (
    <div className={style["boards-list"]}>
      {state.boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
};

export default BoardsList;
