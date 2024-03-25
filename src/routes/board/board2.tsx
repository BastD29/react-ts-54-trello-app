import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard"; // Adjust the import path as needed
import { BoardParams, BoardType } from "../../models/Board";
import { SET_CURRENT_BOARD } from "../../reducer/board/actions";
import style from "./board.module.scss";

export default function Board() {
  const { state, dispatch } = useBoard();
  const params = useParams<BoardParams>();

  // Function to find a board by its name or ID
  const getBoard = (name: string): BoardType | undefined => {
    return state.boards.find((board) => board.name === name);
  };

  useEffect(() => {
    if (params.boardId) {
      const board = getBoard(params.boardId);
      if (board) {
        dispatch({ type: SET_CURRENT_BOARD, payload: board });
      }
    }
  }, [params.boardId, dispatch]);

  // Early return if boardId is not provided
  if (!params.boardId) {
    return <div>Board id is required.</div>;
  }

  // Find the board using the boardId from the URL
  const board = getBoard(params.boardId);
  if (!board) {
    console.log("No board found for the given id.");
    return (
      <div style={{ padding: "1rem" }}>No board found for the given id.</div>
    );
  }

  return (
    <main className={style["board"]}>
      <div>
        {board.columns?.map((column) => (
          <div key={column.id}>{column.name}</div>
        ))}
      </div>
    </main>
  );
}
