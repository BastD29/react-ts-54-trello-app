import { Dispatch, createContext } from "react";
import { BoardState } from "../../models/Board";
import { BoardActions } from "../../reducer/board/actions";

interface BoardContextProps {
  state: BoardState;
  // dispatch: Dispatch<any>;
  dispatch: Dispatch<BoardActions>;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined
);
