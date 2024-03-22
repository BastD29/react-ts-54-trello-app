import { Dispatch, createContext } from "react";
import { ColumnState } from "../../models/Column";

interface ColumnContextProps {
  state: ColumnState;
  dispatch: Dispatch<any>;
}

export const ColumnContext = createContext<ColumnContextProps | undefined>(
  undefined
);
