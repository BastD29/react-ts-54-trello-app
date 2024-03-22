import { ChangeEvent, FC, FormEvent, useState } from "react";
import { BoardType } from "../../../models/Board";
import { useBoard } from "../../../hooks/useBoard";
import { ADD_BOARD } from "../../../reducer/board/actions";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import style from "./BoardForm.module.scss";
import InputGroup from "../../inputs/InputGroup/InputGroup";
import { ColumnType } from "../../../models/Column";

type FormDataType = {
  name: string;
  columns?: ColumnType[];
};

const initialValues: FormDataType = {
  name: "",
  columns: [],
};

const BoardForm: FC = ({}) => {
  const { dispatch } = useBoard();
  const { unsetModal } = useModal();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { name, columns } = formData;
    e.preventDefault();
    if (!name.trim()) {
      alert("Please fill in all fields.");
      return;
    }
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
          name="name"
          value={formData["name"]}
          onChange={handleChange}
        />
      </label>
      <InputGroup />
      <button type="submit">Create New Board</button>
    </form>
  );
};

export default BoardForm;
