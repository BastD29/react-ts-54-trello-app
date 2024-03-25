import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter /* Route, Routes */ } from "react-router-dom";
// pages
// import NotFound from "./pages/NotFound/NotFound.tsx";
// import Starter from "./pages/Starter/Starter.tsx";
// providers
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { BoardProvider } from "./context/BoardContext/BoardProvider.tsx";
// routes
// import Boards from "./routes/boards/boards.tsx";
// import Board from "./routes/board.tsx";
// styles
import "./style/index.scss";
import App from "./components/App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BoardProvider>
        <ModalProvider>
          {/* <Routes>
            <Route path="/" element={<Boards />}>
              <Route index element={<Starter />} />
              <Route path=":boardId" element={<Board />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <App />
        </ModalProvider>
      </BoardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
