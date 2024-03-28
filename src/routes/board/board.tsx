import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";
import { BoardParams, BoardType } from "../../models/Board";
import { SET_CURRENT_BOARD } from "../../reducer/board/actions";
import ColumnItem from "../../components/columns/ColumnItem/ColumnItem";
import style from "./board.module.scss";
import EmptyBoard from "../../pages/EmptyBoard/EmptyBoard";

export default function Board() {
  const { state, dispatch } = useBoard();
  const params = useParams<BoardParams>();

  // const getBoard = (name: string): BoardType | undefined => {
  //   return state.boards.find((board) => board.name === name);
  // };

  const getBoard = (id: string): BoardType | undefined => {
    return state.boards.find((board) => board.id === id);
  };

  useEffect(() => {
    if (params.boardId) {
      const board = getBoard(params.boardId);
      if (board) {
        // set current board so we can access currentBoard.name in the header
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
    return (
      <div style={{ padding: "1rem" }}>No board found for the given id.</div>
    );
  }

  // return (
  //   <main className={style["board"]}>
  //     <div className={style["board__columns-list"]}>
  //       {board.columns?.map((column) => (
  //         <ColumnItem key={column.id} column={column} />
  //       ))}
  //     </div>
  //   </main>
  // );

  if (board.columns?.length === 0) {
    return <EmptyBoard />;
  } else {
    return (
      <main className={style["board"]}>
        <div className={style["board__columns-list"]}>
          {board.columns?.map((column) => (
            <ColumnItem key={column.id} column={column} />
          ))}
        </div>
      </main>
    );
  }
}
