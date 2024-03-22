import { FC } from "react";

const EmptyBoard: FC = () => {
  return (
    <main className="not-found" style={{ padding: "1rem" }}>
      <p>This board is empty. Create a new column to get started.</p>
      <button>+ Add New Column</button>
    </main>
  );
};

export default EmptyBoard;
