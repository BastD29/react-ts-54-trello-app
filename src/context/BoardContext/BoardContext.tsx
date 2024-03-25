import { Dispatch, createContext } from "react";
import { BoardState, BoardType } from "../../models/Board";

interface BoardContextProps {
  state: BoardState;
  dispatch: Dispatch<any>;
  currentBoard: BoardType | undefined;
  setCurrentBoard: (board: BoardType | undefined) => void;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined
);
