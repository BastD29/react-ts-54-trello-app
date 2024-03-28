import { FC } from "react";
import { TaskType } from "../../../models/Task";
import TaskItem from "../TaskItem/TaskItem";
import style from "./TasksList.module.scss";

type TasksListProps = {
  tasks: TaskType[];
};

const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <div className={style["tasks-list"]}>
      {/* <h1>Tasks List</h1> */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
