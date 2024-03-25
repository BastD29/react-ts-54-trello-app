import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { BoardProvider } from "./context/BoardContext/BoardProvider.tsx";
import App from "./components/App/App.tsx";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BoardProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BoardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
