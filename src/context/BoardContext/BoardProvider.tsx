import { FC, ReactNode, useReducer, useState } from "react";
import { BoardContext } from "./BoardContext";
import boardReducer from "../../reducer/board/reducer";
import { BoardType } from "../../models/Board";

type BoardProviderProps = {
  children: ReactNode;
};

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, { boards: [] });
  const [currentBoard, setCurrentBoard] = useState<BoardType | null>(null);

  return (
    <BoardContext.Provider
      value={{ state, dispatch, currentBoard, setCurrentBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
};
