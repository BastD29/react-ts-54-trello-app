import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import style from "./boards.module.scss";

export default function Boards() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style["boards"]}>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Content isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <Outlet />
      </Content>
    </div>
  );
}
