import { FC, ReactNode } from "react";

import style from "./Content.module.scss";

type ContentProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  children?: ReactNode;
  className?: string;
};

const Content: FC<ContentProps> = ({
  isSidebarOpen,
  toggleSidebar,
  children,
}) => {
  const classname = `${style["content"]} ${isSidebarOpen ? style["push"] : ""}`;

  return (
    <div className={classname}>
      {/* <h1>Content</h1> */}
      {children}
      <button className={style["content__show-btn"]} onClick={toggleSidebar}>
        Show Sidebar
      </button>
    </div>
  );
};

export default Content;
