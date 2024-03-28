import { FC } from "react";
import { useModal } from "../../hooks/useModal";
import BoardForm from "../../components/forms/BoardForm/BoardForm";
import { useBoard } from "../../hooks/useBoard";

const EmptyBoard: FC = () => {
  const { setModal } = useModal();
  const { state } = useBoard();
  const { currentBoard } = state;

  return (
    <main className="not-found" style={{ padding: "1rem" }}>
      <p>This board is empty. Create a new column to get started.</p>
      {currentBoard && (
        <button
          onClick={() => setModal(<BoardForm boardId={currentBoard.id} />)}
        >
          + Add New Column
        </button>
      )}
    </main>
  );
};

export default EmptyBoard;
