import { ColumnState } from "../../models/Column";
import { ADD_COLUMN, REMOVE_COLUMN } from "./actions";

const columnReducer = (state: ColumnState, action: any): ColumnState => {
  switch (action.type) {
    case ADD_COLUMN:
      return { ...state, columns: [...state.columns, action.payload] };
    case REMOVE_COLUMN:
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.payload),
      };
    default:
      return state;
  }
};

export default columnReducer;
