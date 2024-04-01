import { FC, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import { useTask } from "../../../hooks/useTask";
import { TOGGLE_SUBTASK, UPDATE_TASK } from "../../../reducer/task/actions";
import { Option } from "../../Dropdown/Dropdown";
import { useBoard } from "../../../hooks/useBoard";
import Dropdown from "../../Dropdown/Dropdown";
import { useModal } from "../../../hooks/useModal";
import TaskForm from "../../forms/TaskForm/TaskForm";
import style from "./TaskDetail.module.scss";
import DeleteModal from "../../modals/DeleteModal/DeleteModal";

type ViewTaskProps = {
  taskId: string;
};

const TaskDetail: FC<ViewTaskProps> = ({ taskId }) => {
  const {
    dispatch,
    state: { tasks },
  } = useTask();

  const {
    state: { currentBoard },
  } = useBoard();

  const { setModal } = useModal();

  const [showButtons, setShowButtons] = useState<boolean>(false);
  const toggleButtonsVisibility = () => setShowButtons(!showButtons);

  const task = tasks.find((t) => t.id === taskId);

  const options: Option[] =
    currentBoard?.columns?.map((column) => ({
      label: column.name,
      value: column.id,
    })) || [];

  const handleColumnSelect = (option: Option) => {
    dispatch({
      type: UPDATE_TASK,
      payload: {
        taskId: task?.id as string,
        columnId: option.value,
      },
    });
  };

  if (!task) {
    return <div>Task not found.</div>;
  }

  const toggleSubtask = (subtaskId: string) => {
    dispatch({
      type: TOGGLE_SUBTASK,
      payload: { taskId: task.id, subtaskId },
    });
  };

  return (
    <div className={style["task-detail"]}>
      <div className={style["task-detail__header"]}>
        <h1>{task.title}</h1>
        <button onClick={toggleButtonsVisibility}>...</button>
        {showButtons && (
          <div className={style["task-detail__btn-modal"]}>
            <button onClick={() => setModal(<DeleteModal />)}>
              Delete Task
            </button>
            <button onClick={() => setModal(<TaskForm />)}>Edit Task</button>
          </div>
        )}
      </div>
      <p>{task.description}</p>
      <div className={style["task-detail__subtasks"]}>
        {task.subtasks?.map((subtask) => (
          <Checkbox
            key={subtask.id}
            label={subtask.description}
            checked={subtask.isChecked}
            onChange={() => toggleSubtask(subtask.id)}
          />
        ))}
      </div>
      <label className={style["task-detail__current-status"]}>
        Current Status
        <Dropdown options={options} onSelect={handleColumnSelect} />
      </label>
    </div>
  );
};

export default TaskDetail;
