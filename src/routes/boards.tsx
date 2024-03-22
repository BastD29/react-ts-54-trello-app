import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Boards() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}