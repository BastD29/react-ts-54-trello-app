import { BoardState } from "../../models/Board";
import {
  ADD_BOARD,
  CLEAR_CURRENT_BOARD,
  REMOVE_BOARD,
  SET_CURRENT_BOARD,
} from "./actions";

const boardReducer = (state: BoardState, action: any): BoardState => {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };
    case REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.payload),
      };
    case SET_CURRENT_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case CLEAR_CURRENT_BOARD:
      return {
        ...state,
        currentBoard: undefined,
      };
    default:
      return state;
  }
};

export default boardReducer;
