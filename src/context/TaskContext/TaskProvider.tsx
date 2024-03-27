import { FC, ReactNode, useReducer } from "react";
import { TaskState } from "../../models/Task";
import taskReducer from "../../reducer/task/reducer";
import { TaskContext } from "./TaskContext";

type TaskProviderProps = {
  children: ReactNode;
};

const initialState: TaskState = {
  tasks: [],
  // currentTask: undefined,
};

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
