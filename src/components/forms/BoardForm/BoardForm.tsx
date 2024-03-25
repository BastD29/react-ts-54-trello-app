import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ColumnType } from "../../../models/Column";
import InputField from "../../inputs/InputField/InputField";
import { BoardType } from "../../../models/Board";
import { useBoard } from "../../../hooks/useBoard";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import { ADD_BOARD } from "../../../reducer/board/actions";
import style from "./BoardForm.module.scss";

type FormDataType = {
  name: string;
  columns?: ColumnType[];
};

const initialValues: FormDataType = {
  name: "",
  columns: [],
};

const BoardForm: FC = () => {
  const { dispatch } = useBoard();
  const { unsetModal } = useModal();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleColumnChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const updatedColumns = formData.columns?.map((column) => {
      if (column.id === id) {
        return { ...column, name: e.target.value };
      }
      return column;
    });

    setFormData({ ...formData, columns: updatedColumns });
  };

  const handleAddColumn = () => {
    const newColumn: ColumnType = { id: Date.now().toString(), name: "" }; // Using Date.now() for simplicity
    setFormData({
      ...formData,
      columns: [...(formData.columns || []), newColumn],
    });
  };

  const handleDeleteColumn = (id: string) => {
    const updatedColumns =
      formData.columns?.filter((column) => column.id !== id) || [];
    setFormData({ ...formData, columns: updatedColumns });
  };

  const handleSubmit = (e: FormEvent) => {
    const { name, columns } = formData;

    e.preventDefault();

    const newId = Date.now().toString();
    console.log("submitted formData: ", formData);
    const newBoard: BoardType = {
      id: newId,
      name,
      columns,
    };

    dispatch({ type: ADD_BOARD, payload: newBoard });
    setFormData(initialValues);
    unsetModal();
    navigate(`/${name}`);
  };

  return (
    <form className={style["board-form"]} onSubmit={handleSubmit}>
      Add New Board
      <label>
        Board Name
        <input
          type="text"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="Form Name"
        />
      </label>
      <span>Board Columns</span>
      {formData.columns?.map((column) => (
        <InputField
          key={column.id}
          id={column.id}
          value={column.name}
          onInputChange={(id, e) => handleColumnChange(id, e)}
          onDeleteItem={handleDeleteColumn}
        />
      ))}
      <button type="button" onClick={handleAddColumn}>
        + Add New Column
      </button>
      <button type="submit">Create New Board</button>
    </form>
  );
};

export default BoardForm;
