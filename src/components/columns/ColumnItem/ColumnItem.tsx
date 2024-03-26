import { FC } from "react";
import { ColumnType } from "../../../models/Column";
import style from "./ColumnItem.module.scss";

type ColumnItemProps = {
  column: ColumnType;
};

const ColumnItem: FC<ColumnItemProps> = ({ column }) => {
  return (
    <div className={style["column-item"]}>
      {/* <h1>Column Item</h1> */}
      {column.name}
    </div>
  );
};

export default ColumnItem;
