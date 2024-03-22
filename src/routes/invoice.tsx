import { useParams } from "react-router-dom";
import { InvoiceType } from "../models/Invoice";
import { useInvoice } from "../hooks/useInvoice";

type InvoiceParams = {
  invoiceId: string;
};

export default function Invoice() {
  const { state } = useInvoice();
  console.log("state:", state);

  let params = useParams<InvoiceParams>();
  console.log("invoiceId:", params.invoiceId);

  let invoice;

  function getInvoice(number: string): InvoiceType | undefined {
    return state.invoices.find((invoice) => invoice.number === number);
  }

  if (params.invoiceId) {
    invoice = getInvoice(params.invoiceId);
  } else {
    return <div>Invoice ID is required.</div>;
  }

  if (!invoice) {
    return <div>No invoice found for the given ID.</div>;
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
