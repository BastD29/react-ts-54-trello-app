import { FC, ReactNode, useReducer } from "react";
import { BoardContext } from "./BoardContext";
import boardReducer from "../../reducer/board/reducer";

type BoardProviderProps = {
  children: ReactNode;
};

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, { boards: [] });

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
