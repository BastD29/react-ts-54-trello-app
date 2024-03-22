import { ColumnType } from "./Column";

type BoardType = {
  id: string;
  name: string;
  columns?: ColumnType[];
};

type BoardState = {
  boards: BoardType[];
};

export type { BoardType, BoardState };
