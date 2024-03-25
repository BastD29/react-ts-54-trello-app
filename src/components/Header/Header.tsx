import { FC } from "react";

import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style["header"]}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
