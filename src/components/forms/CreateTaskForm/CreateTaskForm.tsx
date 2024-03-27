import { ChangeEvent, FC, FormEvent, useState } from "react";
import style from "./CreateTaskForm.module.scss";
import { useTask } from "../../../hooks/useTask";
import { ADD_TASK } from "../../../reducer/task/actions";
import { useModal } from "../../../hooks/useModal";
// import { TaskType } from "../../../models/Task";

// type FormDataType = TaskType;
type FormDataType = {
  title: string;
};

type TaskType = {
  id: string;
  title: string;
};

// const initialValues: FormDataType = {
//   title: "",
//   description: "",
//   subtasks: [],
//   // status: columns.length > 0 ? columns[0].name : "",
//   status: "",
// };

const initialValues = {
  title: "",
};

const CreateTaskForm: FC = () => {
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const { dispatch } = useTask();
  const { unsetModal } = useModal();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    const { title } = formData;
    e.preventDefault();
    const newId = Date.now().toString();
    console.log("submitted formData:", formData);
    const newTask: TaskType = {
      id: newId,
      title,
    };

    dispatch({ type: ADD_TASK, payload: newTask });
    setFormData(initialValues);
    unsetModal();
  };

  return (
    <form className={style["create-task-form"]} onSubmit={handleSubmit}>
      Add New Task
      <label>
        Title
        <input
          type="text"
          value={formData.title}
          onChange={handleTitleChange}
          placeholder="e.g. Take coffee break"
        />
      </label>
      <button type="submit">Create New Task</button>
    </form>
  );
};

export default CreateTaskForm;
