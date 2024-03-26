import { FC } from "react";
import { useBoard } from "../../../hooks/useBoard";
import {
  CLEAR_CURRENT_BOARD,
  REMOVE_BOARD,
} from "../../../reducer/board/actions";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import style from "./DeleteModal.module.scss";

const DeleteModal: FC = () => {
  const { state, dispatch } = useBoard();
  const { currentBoard } = state;
  const { unsetModal } = useModal();
  const navigate = useNavigate();

  const handleDeleteBoard = (id: string) => {
    dispatch({ type: REMOVE_BOARD, payload: id });
    dispatch({ type: CLEAR_CURRENT_BOARD }); // clear current board to clear header's title
    unsetModal();
    navigate(`/`);
  };

  return (
    <div className={style["delete-modal"]}>
      <h2>Delete this board?</h2>
      <p>
        Are you sure you want to delete the {currentBoard?.name} board? This
        action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className={style["delete-modal__btns"]}>
        <button
          onClick={() => currentBoard?.id && handleDeleteBoard(currentBoard.id)}
          disabled={!currentBoard?.id}
        >
          Delete
        </button>
        <button onClick={unsetModal}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModal;
