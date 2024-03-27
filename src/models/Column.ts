// type ColumnType = {
//   id: string;
//   name: string;
// };

import { TaskType } from "./Task";

type ColumnType = {
  id: string;
  name: string;
  tasks?: TaskType[];
};

type ColumnState = {
  columns: ColumnType[];
};

export type { ColumnType, ColumnState };
