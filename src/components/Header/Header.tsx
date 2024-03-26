import { FC, useEffect, useRef, useState } from "react";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useBoard } from "../../hooks/useBoard";
import EditBoardForm from "../forms/EditBoardForm/EditBoardForm";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { setModal } = useModal();
  const { state } = useBoard();
  const { currentBoard } = state;
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

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
      <button onClick={toggleButtonsVisibility} disabled={!currentBoard}>
        ...
      </button>
      {showButtons && (
        <div ref={buttonsRef} className={style["header__buttons"]}>
          <button onClick={() => setModal(<DeleteModal />)}>
            Delete Board
          </button>
          {currentBoard && (
            <button
              onClick={() =>
                setModal(<EditBoardForm boardId={currentBoard.id} />)
              }
            >
              Edit Board
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
