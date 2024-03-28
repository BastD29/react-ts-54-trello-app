import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";
import { useModal } from "../../hooks/useModal";
import { BoardParams, BoardType } from "../../models/Board";
import { SET_CURRENT_BOARD } from "../../reducer/board/actions";
import BoardForm from "../../components/forms/BoardForm/BoardForm";
import ColumnItem from "../../components/columns/ColumnItem/ColumnItem";
import EmptyBoard from "../../pages/EmptyBoard/EmptyBoard";
import style from "./board.module.scss";

export default function Board() {
  const {
    state: { boards, currentBoard },
    dispatch,
  } = useBoard();
  const { setModal } = useModal();
  const params = useParams<BoardParams>();

  // console.log("currentBoard:", currentBoard);

  // const getBoard = (name: string): BoardType | undefined => {
  //   return state.boards.find((board) => board.name === name);
  // };

  const getBoard = (id: string): BoardType | undefined => {
    return boards.find((board) => board.id === id);
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
        <button
          className={style["board__add-column-btn"]}
          onClick={() => setModal(<BoardForm boardId={currentBoard?.id} />)}
        >
          + New Column
        </button>
      </main>
    );
  }
}
