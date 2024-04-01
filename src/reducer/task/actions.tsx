import { TaskType } from "../../models/Task";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const TOGGLE_SUBTASK = "TOGGLE_SUBTASK";

type AddTaskAction = {
  type: typeof ADD_TASK;
  payload: TaskType;
};

type RemoveTaskAction = {
  type: typeof REMOVE_TASK;
  payload: string;
};

// type UpdateTaskAction = {
//   type: typeof UPDATE_TASK;
//   payload: {
//     id: string;
//     data: Partial<TaskType>;
//   };
// };

type UpdateTaskAction = {
  type: typeof UPDATE_TASK;
  payload: {
    taskId: string;
    columnId: string;
  };
};

type ToggleSubtaskAction = {
  type: typeof TOGGLE_SUBTASK;
  payload: { taskId: string; subtaskId: string };
};

export type TaskActions =
  | AddTaskAction
  | RemoveTaskAction
  | UpdateTaskAction
  | ToggleSubtaskAction;
