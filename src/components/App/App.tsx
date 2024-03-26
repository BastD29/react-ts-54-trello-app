import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Boards from "../../routes/boards/boards";
import Starter from "../../pages/Starter/Starter";
import NotFound from "../../pages/NotFound/NotFound";
import Board from "../../routes/board/board";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Boards />}>
          <Route index element={<Starter />} />
          <Route path=":boardId" element={<Board />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
