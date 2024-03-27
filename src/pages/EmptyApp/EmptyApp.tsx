import { FC } from "react";

const EmptyApp: FC = () => {
  return (
    <main className="not-found" style={{ padding: "1rem" }}>
      <p>This app is empty. Create a new board to get started.</p>
      {/* <button>+ Add New Board</button> */}
    </main>
  );
};

export default EmptyApp;
