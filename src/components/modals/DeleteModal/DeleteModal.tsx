import { useBoard } from "../../../hooks/useBoard";
import style from "./DeleteModal.module.scss";

export default function DeleteModal() {
  const { state } = useBoard();
  const { currentBoard } = state;

  return (
    <div className={style["delete-modal"]}>
      <h2>Delete this board?</h2>
      <p>
        Are you sure you want to delete the {currentBoard?.name} board? This
        action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className={style["delete-modal__btns"]}>
        <button>Delete</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
