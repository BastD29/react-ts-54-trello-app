import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useBoard } from "../../../hooks/useBoard";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import {
  ADD_BOARD,
  UPDATE_BOARD,
  SET_CURRENT_BOARD,
} from "../../../reducer/board/actions";
import { ColumnType } from "../../../models/Column";
import InputField from "../../inputs/InputField/InputField";
import style from "./BoardForm.module.scss";

type BoardFormProps = {
  boardId?: string; // Undefined for create mode
};

type FormDataType = {
  name: string;
  columns?: ColumnType[];
};

const initialValues: FormDataType = {
  name: "",
  columns: [],
};

const BoardForm: FC<BoardFormProps> = ({ boardId }) => {
  const isEditMode = Boolean(boardId);
  const {
    state: { boards },
    dispatch,
  } = useBoard();
  const { unsetModal } = useModal();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  useEffect(() => {
    if (isEditMode) {
      const boardToEdit = boards.find((board) => board.id === boardId);
      if (boardToEdit) {
        setFormData({ name: boardToEdit.name, columns: boardToEdit.columns });
      }
    }
  }, [boardId, boards, isEditMode]);

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
    const newColumn: ColumnType = { id: Date.now().toString(), name: "" };
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
    e.preventDefault();
    console.log("submitted formData: ", formData);

    if (isEditMode && boardId) {
      // Update logic
      dispatch({
        type: UPDATE_BOARD,
        payload: { id: boardId, data: { ...formData } },
      });
      dispatch({
        type: SET_CURRENT_BOARD,
        payload: { id: boardId, ...formData },
      });
      navigate(`/${boardId}`);
    } else if (!isEditMode) {
      const newId = Date.now().toString();
      dispatch({ type: ADD_BOARD, payload: { id: newId, ...formData } });
      setFormData(initialValues);
      navigate(`/${newId}`);
    }
    unsetModal();
  };

  return (
    <form className={style["board-form"]} onSubmit={handleSubmit}>
      {isEditMode ? "Edit Board" : "Add New Board"}
      <label>
        Board Name
        <input
          type="text"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="e.g. Web Design"
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
      <button type="submit">
        {isEditMode ? "Save Changes" : "Create New Board"}
      </button>
    </form>
  );
};

export default BoardForm;
