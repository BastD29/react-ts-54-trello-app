import { TaskType } from "../../models/Task";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const SET_CURRENT_TASK = "SET_CURRENT_TASK";
export const CLEAR_CURRENT_TASK = "CLEAR_CURRENT_TASK";

type AddTaskAction = {
  type: typeof ADD_TASK;
  payload: TaskType;
};

type RemoveTaskAction = {
  type: typeof REMOVE_TASK;
  payload: string; // Assuming payload is the id of the Task to remove
};

type UpdateTaskAction = {
  type: typeof UPDATE_TASK;
  payload: {
    id: string;
    data: Partial<TaskType>; // Allows for partial updates
  };
};

type SetCurrentTaskAction = {
  type: typeof SET_CURRENT_TASK;
  payload: TaskType;
};

type ClearCurrentTaskAction = {
  type: typeof CLEAR_CURRENT_TASK;
};

// Union type for all actions
export type TaskActions =
  | AddTaskAction
  | RemoveTaskAction
  | UpdateTaskAction
  | SetCurrentTaskAction
  | ClearCurrentTaskAction;
