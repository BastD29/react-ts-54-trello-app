import { FC } from "react";
import BoardsList from "../boards/BoardsList/BoardsList";
import { useModal } from "../../hooks/useModal";
import BoardForm from "../forms/BoardForm/BoardForm";
import style from "./Sidebar.module.scss";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle }) => {
  const { setModal } = useModal();

  const classname = `${style["sidebar"]} ${
    isOpen ? style["sidebar--open"] : ""
  }`;

  return (
    <div className={classname}>
      <button className={style["sidebar__close-btn"]} onClick={toggle}>
        X
      </button>
      <BoardsList />
      <button onClick={() => setModal(<BoardForm />)}>Create New Board</button>
    </div>
  );
};

export default Sidebar;
