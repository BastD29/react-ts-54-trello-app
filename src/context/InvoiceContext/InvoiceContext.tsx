import { Dispatch, createContext } from "react";
import { InvoiceState } from "../../models/Invoice";

interface InvoiceContextProps {
  state: InvoiceState;
  dispatch: Dispatch<any>;
}

export const InvoiceContext = createContext<InvoiceContextProps | undefined>(
  undefined
);
