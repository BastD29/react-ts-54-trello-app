import { useContext } from "react";
import { TaskContext } from "../context/TaskContext/TaskContext";

export const useTask = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTask must be used within an TaskProvider");
  }

  return context;
};
