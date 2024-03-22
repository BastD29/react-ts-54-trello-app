import { useParams } from "react-router-dom";
import { useBoard } from "../hooks/useBoard";
import { BoardType } from "../models/Board";

type BoardParams = {
  boardId: string;
};

export default function Board() {
  const { state } = useBoard();
  console.log("state:", state);

  let params = useParams<BoardParams>();
  console.log("boardId:", params.boardId);

  let board;

  // function getBoard(id: string): BoardType | undefined {
  //   return state.boards.find((board) => board.id === id);
  // }

  function getBoard(name: string): BoardType | undefined {
    return state.boards.find((board) => board.name === name);
  }

  if (params.boardId) {
    board = getBoard(params.boardId);
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
    <main style={{ padding: "1rem" }}>
      <h1>{board.name}</h1>
    </main>
  );
}
