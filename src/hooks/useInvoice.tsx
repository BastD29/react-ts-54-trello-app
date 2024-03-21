import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext/InvoiceContext";

export const useInvoice = () => {
  const context = useContext(InvoiceContext);

  if (context === undefined) {
    throw new Error("useInvoice must be used within an InvoiceProvider");
  }

  return context;
};
