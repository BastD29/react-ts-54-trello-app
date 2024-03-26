import { BoardType } from "../../models/Board";

export const ADD_BOARD = "ADD_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const SET_CURRENT_BOARD = "SET_CURRENT_BOARD";
export const CLEAR_CURRENT_BOARD = "CLEAR_CURRENT_BOARD";

type AddBoardAction = {
  type: typeof ADD_BOARD;
  payload: BoardType;
};

type RemoveBoardAction = {
  type: typeof REMOVE_BOARD;
  payload: string; // Assuming payload is the id of the board to remove
};

type UpdateBoardAction = {
  type: typeof UPDATE_BOARD;
  payload: {
    id: string;
    data: Partial<BoardType>; // Allows for partial updates
  };
};

type SetCurrentBoardAction = {
  type: typeof SET_CURRENT_BOARD;
  payload: BoardType;
};

type ClearCurrentBoardAction = {
  type: typeof CLEAR_CURRENT_BOARD;
};

// Union type for all actions
export type BoardActions =
  | AddBoardAction
  | RemoveBoardAction
  | UpdateBoardAction
  | SetCurrentBoardAction
  | ClearCurrentBoardAction;
