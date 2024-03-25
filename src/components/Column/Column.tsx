import { FC } from "react";

import style from "./Column.module.scss";

const Column: FC = () => {
  return (
    <div className={style["column"]}>
      <h1>Column</h1>
    </div>
  );
};

export default Column;
