import { FC } from "react";
import { TaskType } from "../../../models/Task";
import style from "./TaskItem.module.scss";

type TaskItemProps = {
  task: TaskType;
};

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <div key={task.id} className={style["task-item"]}>
      <h3>{task.title}</h3>
    </div>
  );
};

export default TaskItem;
