import { FC, ReactNode, useReducer } from "react";
import { BoardContext } from "./BoardContext";
import boardReducer from "../../reducer/board/reducer";
import { BoardState } from "../../models/Board";

type BoardProviderProps = {
  children: ReactNode;
};

const initialState: BoardState = {
  boards: [],
  currentBoard: undefined,
};

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
