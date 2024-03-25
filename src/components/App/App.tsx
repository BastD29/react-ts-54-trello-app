import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
// import Board from "../../routes/board/board";
import Boards from "../../routes/boards/boards2";
import Starter from "../../pages/Starter/Starter";
import NotFound from "../../pages/NotFound/NotFound";
import Board from "../../routes/board/board2";

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
