import { FC } from "react";
import { NavLink } from "react-router-dom";
import { BoardType } from "../../../models/Board";
import style from "./BoardItem.module.scss";

type BoardItemProps = {
  board: BoardType;
};

const BoardItem: FC<BoardItemProps> = ({ board }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${style["board-item"]} ${isActive ? style["board-item--active"] : ""}`
      }
      to={`/${board.name}`}
      // to={`/${board.id}`}
      key={board.id}
    >
      {board.name}
    </NavLink>
  );
};

export default BoardItem;
