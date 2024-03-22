import { FC } from "react";
import { useModal } from "../../hooks/useModal";
import BoardForm from "../forms/BoardForm/BoardForm";
import BoardsList from "../BoardsList/BoardsList";
import style from "./Navbar.module.scss";

const Navbar: FC = () => {
  const { setModal } = useModal();

  return (
    <nav className={style["navbar"]}>
      <BoardsList />
      <button onClick={() => setModal(<BoardForm />)}>Add Board</button>
    </nav>
  );
};

export default Navbar;
