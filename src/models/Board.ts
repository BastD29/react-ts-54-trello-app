type BoardType = {
  id: string;
  name: string;
  columns?: ColumnType[];
};

type BoardState = {
  boards: BoardType[];
};

type ColumnType = {
  id: number;
  name: string;
};

export type { BoardType, BoardState, ColumnType };
