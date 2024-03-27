import { FC, useEffect, useRef, useState } from "react";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useBoard } from "../../hooks/useBoard";
// import EditBoardForm from "../forms/EditBoardForm/EditBoardForm";
import style from "./Header.module.scss";
import BoardForm from "../forms/BoardForm/BoardForm";
import CreateTaskForm from "../forms/CreateTaskForm/CreateTaskForm";

const Header: FC = () => {
  const { setModal } = useModal();
  const { state } = useBoard();
  const { currentBoard } = state;
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  // console.log("state:", state);

  const toggleButtonsVisibility = () => setShowButtons(!showButtons);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonsRef.current &&
        !buttonsRef.current.contains(event.target as Node)
      ) {
        setShowButtons(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={style["header"]}>
      <h1>{currentBoard ? currentBoard.name : ""}</h1>
      <div className={style["header__btn-group"]}>
        <button
          onClick={() =>
            setModal(<CreateTaskForm columns={currentBoard?.columns || []} />)
          }
          disabled={!currentBoard}
        >
          + Add New Task
        </button>
        <button onClick={toggleButtonsVisibility} disabled={!currentBoard}>
          ...
        </button>
        {showButtons && (
          <div ref={buttonsRef} className={style["header__btn-modal"]}>
            <button onClick={() => setModal(<DeleteModal />)}>
              Delete Board
            </button>
            {currentBoard && (
              <button
                onClick={() =>
                  setModal(<BoardForm boardId={currentBoard.id} />)
                }
              >
                Edit Board
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
