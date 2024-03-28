import { FC } from "react";
import { TaskType } from "../../../models/Task";
// import Checkbox from "../../Checkbox/Checkbox";
// import { useTask } from "../../../hooks/useTask";
import style from "./TaskItem.module.scss";
import { useModal } from "../../../hooks/useModal";
import ViewTaskForm from "../../forms/ViewTaskForm/ViewTaskForm";

type TaskItemProps = {
  task: TaskType;
};

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  // const {
  //   state: { tasks },
  // } = useTask();

  const { setModal } = useModal();

  return (
    <div
      key={task.id}
      className={style["task-item"]}
      onClick={() => setModal(<ViewTaskForm task={task} />)}
    >
      <h3>{task.title}</h3>
      {/* <p>{task.description}</p> */}
      {/* <h4>Subtasks</h4> */}
      {/* {task.subtasks?.map((subtask) => (
        <Checkbox key={subtask.id} label="test" />
      ))} */}
      {/* // * TRY 1 */}
      {/* <p>{task.subtasks?.length}</p> */}
      <p>0 of 3 subtasks</p>
    </div>
  );
};

export default TaskItem;
