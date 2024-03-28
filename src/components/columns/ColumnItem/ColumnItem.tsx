import { FC } from "react";
import { ColumnType } from "../../../models/Column";
import { useTask } from "../../../hooks/useTask";
import TasksList from "../../tasks/TasksList/TasksList";
import EmptyColumn from "../../../pages/EmptyColumn/EmptyColumn";
import style from "./ColumnItem.module.scss";

type ColumnItemProps = {
  column: ColumnType;
};

const ColumnItem: FC<ColumnItemProps> = ({ column }) => {
  // const { state } = useTask();
  // const { tasks } = state;

  const {
    state: { tasks },
  } = useTask();

  // console.log("tasks:", tasks);

  const filteredTasks = tasks.filter((task) => task.columnId === column.id);

  if (filteredTasks.length > 0) {
    return (
      <div className={style["column-item"]}>
        <h2>{column.name}</h2>
        <TasksList tasks={filteredTasks} />
      </div>
    );
  } else {
    return (
      <div className={style["column-item"]}>
        <h2>{column.name}</h2>
        <EmptyColumn />
      </div>
    );
  }
};

export default ColumnItem;
