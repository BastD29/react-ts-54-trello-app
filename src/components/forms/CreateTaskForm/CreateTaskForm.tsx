import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTask } from "../../../hooks/useTask";
import { ADD_TASK } from "../../../reducer/task/actions";
import { useModal } from "../../../hooks/useModal";
import { SubtaskType, TaskType } from "../../../models/Task";
import { ColumnType } from "../../../models/Column";
import Dropdown from "../../Dropdown/Dropdown";
import style from "./CreateTaskForm.module.scss";
import InputField from "../../inputs/InputField/InputField";

type FormDataType = Omit<TaskType, "id">;

export type Option = {
  label: string;
  value: any;
};

const initialValues: FormDataType = {
  title: "",
  columnId: "",
  description: "",
  subtasks: [],
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubtaskChange = (
    id: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedSubtasks = formData.subtasks?.map((subtask) => {
      if (subtask.id === id) {
        return { ...subtask, description: e.target.value };
      }
      return subtask;
    });

    setFormData({ ...formData, subtasks: updatedSubtasks });
  };

  const handleAddSubtask = () => {
    const newSubtask: SubtaskType = {
      id: Date.now().toString(),
      description: "",
      isChecked: false,
    };

    setFormData({
      ...formData,
      subtasks: [...(formData.subtasks || []), newSubtask],
    });
  };

  const handleDeleteSubtask = (id: string) => {
    const updatedSubtasks =
      formData.subtasks?.filter((subtask) => subtask.id !== id) || [];
    setFormData({ ...formData, subtasks: updatedSubtasks });
  };

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
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Take coffee break"
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          id=""
          cols={30}
          rows={10}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </label>
      <label>
        Subtasks
        {formData.subtasks?.map((subtask) => (
          <InputField
            key={subtask.id}
            id={subtask.id}
            value={subtask.description}
            onInputChange={(id, e) => handleSubtaskChange(id, e)}
            onDeleteItem={handleDeleteSubtask}
          />
        ))}
        <button type="button" onClick={handleAddSubtask}>
          + Add New Subtask
        </button>
      </label>
      <label>
        Status
        <Dropdown
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
