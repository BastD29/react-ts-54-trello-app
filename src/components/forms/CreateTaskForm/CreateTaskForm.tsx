import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTask } from "../../../hooks/useTask";
import { ADD_TASK } from "../../../reducer/task/actions";
import { useModal } from "../../../hooks/useModal";
import { TaskType } from "../../../models/Task";
import { ColumnType } from "../../../models/Column";
import Dropdown from "../../Dropdown/Dropdown";
import style from "./CreateTaskForm.module.scss";

// type FormDataType = Omit<TaskType, "id" | "columnId">;
type FormDataType = Omit<TaskType, "id">;

export type Option = {
  label: string;
  value: any;
};

const initialValues: FormDataType = {
  title: "",
  columnId: "",
};

type CreateTaskFormProps = {
  columns: ColumnType[];
};

const CreateTaskForm: FC<CreateTaskFormProps> = ({ columns }) => {
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const { dispatch } = useTask();
  const { unsetModal } = useModal();

  const options: Option[] = columns.map((column) => ({
    label: column.name,
    value: column.id,
  }));

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };

  // const handleColumnChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setFormData({ ...formData, columnId: e.target.value });
  // };

  const handleColumnSelect = (option: Option) => {
    setFormData({ ...formData, columnId: option.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newId = Date.now().toString();
    console.log("submitted formData:", formData);
    const newTask: TaskType = {
      ...formData,
      id: newId,
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
      <label>
        Status
        {/* <select value={formData.columnId} onChange={handleColumnChange}>
          <option value="">Select a status</option>
          {columns.map((column) => (
            <option key={column.id} value={column.id}>
              {column.name}
            </option>
          ))}
        </select> */}
        <Dropdown
          // label="Column"
          options={options}
          onSelect={handleColumnSelect}
          id="column-dropdown"
        />
      </label>
      <button type="submit">Create New Task</button>
    </form>
  );
};

export default CreateTaskForm;
