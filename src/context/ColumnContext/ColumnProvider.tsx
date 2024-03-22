import { FC, ReactNode, useReducer } from "react";
import { ColumnContext } from "./ColumnContext";
import columnReducer from "../../reducer/column/reducer";

type ColumnProviderProps = {
  children: ReactNode;
};

export const ColumnProvider: FC<ColumnProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(columnReducer, { columns: [] });

  return (
    <ColumnContext.Provider value={{ state, dispatch }}>
      {children}
    </ColumnContext.Provider>
  );
};
