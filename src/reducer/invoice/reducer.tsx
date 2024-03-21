import { InvoiceState } from "../../models/Invoice";
import { ADD_INVOICE, REMOVE_INVOICE } from "./actions";

const invoiceReducer = (state: InvoiceState, action: any): InvoiceState => {
  switch (action.type) {
    case ADD_INVOICE:
      return { ...state, invoices: [...state.invoices, action.payload] };
    case REMOVE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default invoiceReducer;
