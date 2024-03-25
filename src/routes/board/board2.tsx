import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";
import { BoardParams, BoardType } from "../../models/Board";

import style from "./board.module.scss";

export default function Board() {
  // const { state } = useBoard();
  const { state, setCurrentBoard } = useBoard();
  console.log("state:", state);

  let params = useParams<BoardParams>();
  console.log("boardId:", params.boardId);

  let board;

  function getBoard(name: string): BoardType | undefined {
    return state.boards.find((board) => board.name === name);
  }

  if (params.boardId) {
    board = getBoard(params.boardId);
    setCurrentBoard(board);
  } else {
    return <div>Board id is required.</div>;
  }

  if (!board) {
    console.log("board:", board);

    return (
      <div style={{ padding: "1rem" }}>No board found for the given id.</div>
    );
  }

  return (
    <main className={style["board"]}>
      {/* <h1>{board.name}</h1> */}
      <div>
        {board.columns?.map((column) => (
          <div>{column.name}</div>
        ))}
      </div>
    </main>
  );
}
