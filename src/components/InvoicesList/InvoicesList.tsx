import { FC } from "react";
import InvoiceItem from "../InvoiceItem/InvoiceItem";
import { useInvoice } from "../../hooks/useInvoice";
import style from "./InvoicesList.module.scss";

const InvoicesList: FC = () => {
  const { state } = useInvoice();

  return (
    <div className={style["invoices-list"]}>
      {state.invoices.map((invoice) => (
        <InvoiceItem key={invoice.number} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;
