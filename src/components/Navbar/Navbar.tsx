import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Invoice } from "../../models/Invoice";

type NavbarProps = {
  invoices: Invoice[];
};

const Navbar: FC<NavbarProps> = ({ invoices }) => {
  return (
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {invoices.map((invoice) => (
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
