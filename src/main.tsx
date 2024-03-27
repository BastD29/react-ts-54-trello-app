import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { BoardProvider } from "./context/BoardContext/BoardProvider.tsx";
import App from "./components/App/App.tsx";
import "./style/index.scss";
import { TaskProvider } from "./context/TaskContext/TaskProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BoardProvider>
        <TaskProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </TaskProvider>
      </BoardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
