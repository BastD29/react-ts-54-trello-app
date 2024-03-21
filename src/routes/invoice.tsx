import { useParams } from "react-router-dom";
import { getInvoice } from "../data/invoices";

type InvoiceParams = {
  invoiceId: string;
};

export default function Invoice() {
  let params = useParams<InvoiceParams>();
  let invoice;

  // Check if invoiceId is defined and is a valid string
  if (params.invoiceId) {
    invoice = getInvoice(parseInt(params.invoiceId, 10));
  } else {
    // Handle the case where invoiceId is undefined
    // This could redirect the user, show an error message, or any other error handling
    return <div>Invoice ID is required.</div>;
  }

  // Continue with the assumption that invoice is defined
  if (!invoice) {
    // Handle case where no invoice is found for the given ID
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
