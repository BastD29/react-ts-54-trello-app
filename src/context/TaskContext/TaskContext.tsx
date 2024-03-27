import { Dispatch, createContext } from "react";
import { TaskState } from "../../models/Task";
import { TaskActions } from "../../reducer/task/actions";

interface TaskContextProps {
  state: TaskState;
  // dispatch: Dispatch<any>;
  dispatch: Dispatch<TaskActions>;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined
);
