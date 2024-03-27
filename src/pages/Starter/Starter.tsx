import { FC } from "react";
import { useBoard } from "../../hooks/useBoard";
import Empty from "../EmptyApp/EmptyApp";
import SelectBoard from "../SelectBoard/SelectBoard";

const Starter: FC = () => {
  const { state } = useBoard();

  if (state.boards.length > 0) {
    return <SelectBoard />;
  } else {
    return <Empty />;
  }
};

export default Starter;
