import { BoardState } from "../../models/Board";
import { ADD_BOARD, REMOVE_BOARD } from "./actions";

const boardReducer = (state: BoardState, action: any): BoardState => {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.payload),
      };
    default:
      return state;
  }
};

export default boardReducer;
