import { FC } from "react";
import style from "./TaskForm.module.scss";

const TaskForm: FC = () => {
  return (
    <form className={style["task-form"]}>
      <h1>Task Form</h1>
    </form>
  );
};

export default TaskForm;
