import { FC } from "react";
import { useBoard } from "../../hooks/useBoard";
import EmptyApp from "../EmptyApp/EmptyApp";
import SelectBoard from "../SelectBoard/SelectBoard";

const Starter: FC = () => {
  const { state } = useBoard();

  if (state.boards.length > 0) {
    return <SelectBoard />;
  } else {
    return <EmptyApp />;
  }
};

export default Starter;
