import { FC } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import { useTask } from "../../../hooks/useTask";
import { TOGGLE_SUBTASK } from "../../../reducer/task/actions";
import style from "./TaskDetail.module.scss";

type ViewTaskProps = {
  taskId: string;
};

// Here I did not pass task as a prop directly because the checkbox
// state was updated in TaskItem but not in ViewTask
const TaskDetail: FC<ViewTaskProps> = ({ taskId }) => {
  const {
    dispatch,
    state: { tasks },
  } = useTask();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return <div>Task not found.</div>;
  }

  // console.log("task.subtasks:", task.subtasks);

  const toggleSubtask = (subtaskId: string) => {
    dispatch({
      type: TOGGLE_SUBTASK,
      payload: { taskId: task.id, subtaskId },
    });
  };

  return (
    <div className={style["task-detail"]}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <div className={style["view-task__subtasks"]}>
        {task.subtasks?.map((subtask) => (
          <Checkbox
            key={subtask.id}
            label={subtask.description}
            checked={subtask.isChecked}
            onChange={() => toggleSubtask(subtask.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskDetail;
