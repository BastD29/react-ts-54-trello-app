import { FC /* useState */ } from "react";

// import Sidebar from "../Sidebar/Sidebar";
// import Content from "../Content/Content";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
// import Boards from "../../routes/boards";
import Starter from "../../pages/Starter/Starter";
import Board from "../../routes/board/board";
import NotFound from "../../pages/NotFound/NotFound";
import Boards from "../../routes/boards/boards2";

// import style from "./App.module.scss";

const App: FC = () => {
  //   const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  //   const toggleSidebar = () => {
  //     setSidebarOpen(!isSidebarOpen);
  //   };

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
      {/* <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} /> */}
      {/* <Content isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </div>
  );
};

export default App;
