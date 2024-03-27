// type TaskType<T extends string = string> = {
//   title: string;
//   description: string;
//   subtasks?: SubtaskType[];
//   status: T;
// };

type TaskType = {
  id: string;
  title: string;
};

type TaskState = {
  tasks: TaskType[];
  // currentTask?: TaskType;
};

type SubtaskType = {
  description: string;
  isChecked: boolean;
};

export type { TaskType, SubtaskType, TaskState };
