import { FC } from "react";
import { TaskType } from "../../../models/Task";
import { useModal } from "../../../hooks/useModal";
import TaskDetail from "../TaskDetail/TaskDetail";
import style from "./TaskItem.module.scss";

type TaskItemProps = {
  task: TaskType;
};

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  // console.log("task:", task);

  const { setModal } = useModal();

  const totalSubtasks = task.subtasks?.length;
  const completedSubtasks = task.subtasks?.filter(
    (subtask) => subtask.isChecked
  ).length;

  return (
    <div
      key={task.id}
      className={style["task-item"]}
      // onClick={() => setModal(<ViewTask task={task} />)}
      onClick={() => setModal(<TaskDetail taskId={task.id} />)}
    >
      <h3>{task.title}</h3>
      <p>{`${completedSubtasks} of ${totalSubtasks} subtasks`}</p>
    </div>
  );
};

export default TaskItem;
