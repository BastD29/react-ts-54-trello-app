import { FC } from "react";
import { NavLink } from "react-router-dom";
import { InvoiceType } from "../../models/Invoice";
import style from "./InvoiceItem.module.scss";

type InvoiceItemProps = {
  invoice: InvoiceType;
};

const InvoiceItem: FC<InvoiceItemProps> = ({ invoice }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${style["invoice-item"]} ${
          isActive ? style["invoice-item--active"] : ""
        }`
      }
      to={`/${invoice.number}`}
      key={invoice.number}
    >
      {invoice.name}
    </NavLink>
  );
};

export default InvoiceItem;
