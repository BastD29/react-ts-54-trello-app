import { FC } from "react";
import { getInvoices } from "../../data/invoices";
import style from "./InvoicesList.module.scss";
import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoicesList: FC = () => {
  let invoices = getInvoices();

  return (
    <div className={style["invoices-list"]}>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.number} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;
