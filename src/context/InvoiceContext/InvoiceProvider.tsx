import { FC, ReactNode, useReducer } from "react";
import { InvoiceContext } from "./InvoiceContext";
import invoiceReducer from "../../reducer/invoice/reducer";

type InvoiceProviderProps = {
  children: ReactNode;
};

export const InvoiceProvider: FC<InvoiceProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, { invoices: [] });

  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};
