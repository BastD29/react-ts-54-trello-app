import { Outlet } from "react-router-dom";
import { getInvoices } from "../data/invoices";
import Navbar from "../components/Navbar/Navbar";

export default function Invoices() {
  let invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <Navbar invoices={invoices} />
      <Outlet />
    </div>
  );
}
