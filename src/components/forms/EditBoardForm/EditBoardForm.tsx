// import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
// import InputField from "../../inputs/InputField/InputField";
// import { ColumnType } from "../../../models/Column";
// import { useBoard } from "../../../hooks/useBoard";
// import { BoardType } from "../../../models/Board";
// import {
//   SET_CURRENT_BOARD,
//   UPDATE_BOARD,
// } from "../../../reducer/board/actions";
// import { useModal } from "../../../hooks/useModal";
// import { useNavigate } from "react-router-dom";
// import style from "./EditBoardForm.module.scss";

// type EditBoardFormProps = {
//   boardId: string;
// };

// type FormDataType = {
//   name: string;
//   columns?: ColumnType[];
// };

// const initialValues: FormDataType = {
//   name: "",
//   columns: [],
// };

// const EditBoardForm: FC<EditBoardFormProps> = ({ boardId }) => {
//   // console.log("boardId:", boardId);
//   const { unsetModal } = useModal();
//   const { state, dispatch } = useBoard();
//   const { boards } = state;
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormDataType>(initialValues);

//   useEffect(() => {
//     const boardToEdit = boards.find((board) => board.id === boardId);
//     if (boardToEdit) {
//       setFormData({ name: boardToEdit.name, columns: boardToEdit.columns });
//     }
//   }, [boardId, boards]);

//   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, name: e.target.value });
//   };

//   const handleColumnChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
//     const updatedColumns = formData.columns?.map((column) => {
//       if (column.id === id) {
//         return { ...column, name: e.target.value };
//       }
//       return column;
//     });

//     setFormData({ ...formData, columns: updatedColumns });
//   };

//   const handleAddColumn = () => {
//     const newColumn: ColumnType = { id: Date.now().toString(), name: "" };
//     setFormData({
//       ...formData,
//       columns: [...(formData.columns || []), newColumn],
//     });
//   };

//   const handleDeleteColumn = (id: string) => {
//     const updatedColumns =
//       formData.columns?.filter((column) => column.id !== id) || [];
//     setFormData({ ...formData, columns: updatedColumns });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     // const { name } = formData;
//     e.preventDefault();
//     console.log("submitted formData: ", formData);
//     const updatedBoard: BoardType = { id: boardId, ...formData };
//     // dispatch({ type: UPDATE_BOARD, payload: updatedBoard }); // ! was wrong
//     dispatch({
//       type: UPDATE_BOARD,
//       payload: { id: updatedBoard.id, data: updatedBoard },
//     });
//     dispatch({ type: SET_CURRENT_BOARD, payload: updatedBoard });
//     unsetModal();
//     // navigate(`/${name}`);
//     navigate(`/${boardId}`);
//   };

//   return (
//     <form className={style["edit-board-form"]} onSubmit={handleSubmit}>
//       Edit Board
//       <label>
//         Board Name
//         <input
//           type="text"
//           value={formData.name}
//           onChange={handleNameChange}
//           placeholder="Form Name"
//         />
//       </label>
//       <span>Board Columns</span>
//       {formData.columns?.map((column) => (
//         <InputField
//           key={column.id}
//           id={column.id}
//           value={column.name}
//           onInputChange={(id, e) => handleColumnChange(id, e)}
//           onDeleteItem={handleDeleteColumn}
//         />
//       ))}
//       <button type="button" onClick={handleAddColumn}>
//         + Add New Column
//       </button>
//       <button type="submit">Save Changes</button>
//     </form>
//   );
// };

// export default EditBoardForm;
