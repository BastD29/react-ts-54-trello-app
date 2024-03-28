// import { FC, FormEvent, useEffect, useState } from "react";
// import { TaskType } from "../../../models/Task";
// import Checkbox from "../../Checkbox/Checkbox";
// import Dropdown from "../../Dropdown/Dropdown";
// import { useBoard } from "../../../hooks/useBoard";
// import { Option } from "../CreateTaskForm/CreateTaskForm";
// import { useTask } from "../../../hooks/useTask";
// import { SET_CURRENT_TASK, UPDATE_TASK } from "../../../reducer/task/actions";
// import { useModal } from "../../../hooks/useModal";
// import style from "./EditTaskForm.module.scss";

// type FormDataType = Omit<TaskType, "id" | "title" | "description">;

// type ViewTaskFormProps = {
//   task: TaskType;
// };

// const initialValues: FormDataType = {
//   subtasks: [],
//   columnId: "",
// };

// const EditTaskForm: FC<ViewTaskFormProps> = ({ task }) => {
//   const [formData, setFormData] = useState<FormDataType>(initialValues);
//   const {
//     state: { currentBoard },
//   } = useBoard();
//   const {
//     state: { tasks },
//     dispatch,
//   } = useTask();
//   const { unsetModal } = useModal();

//   // useEffect(() => {
//   //   const taskToEdit
//   // })

//   const options: Option[] =
//     currentBoard?.columns?.map((column) => ({
//       label: column.name,
//       value: column.id,
//     })) || [];

//   const handleColumnSelect = (option: Option) => {
//     setFormData({ ...formData, columnId: option.value });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log("submitted formData: ", formData);
//     const updatedTask = { id: task.id, ...formData };

//     dispatch({
//       type: UPDATE_TASK,
//       payload: { id: updatedTask.id, data: updatedTask },
//     });
//     // dispatch({ type: SET_CURRENT_TASK, payload: updatedTask });
//     unsetModal();
//   };

//   return (
//     <form className={style["view-task-form"]} onSubmit={handleSubmit}>
//       <h1>{task.title}</h1>
//       <p>{task.description}</p>
//       <h2>Subtasks (2 of 3)</h2>
//       {task.subtasks?.map((subtask) => (
//         <Checkbox
//           key={subtask.id}
//           label={subtask.description}
//           // checked={subtask.isChecked}
//         />
//       ))}
//       <label>
//         Current Status
//         <Dropdown
//           options={options}
//           onSelect={handleColumnSelect}
//           id="column-dropdown"
//         />
//       </label>
//     </form>
//   );
// };

// export default EditTaskForm;
