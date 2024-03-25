import { ColumnType } from "./Column";

type BoardType = {
  id: string;
  name: string;
  columns?: ColumnType[];
};

type BoardState = {
  boards: BoardType[];
  // currentBoardId: string | undefined;
  currentBoard?: BoardType;
};

type BoardParams = {
  boardId: string;
};

export type { BoardType, BoardState, BoardParams };
