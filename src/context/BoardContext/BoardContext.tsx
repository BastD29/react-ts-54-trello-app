import { Dispatch, createContext } from "react";
import { BoardState } from "../../models/Board";

interface BoardContextProps {
  state: BoardState;
  dispatch: Dispatch<any>;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined
);
