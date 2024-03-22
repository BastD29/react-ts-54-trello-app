type InvoiceType = {
  id: number;
  name: string;
  // number: number;
  number: string;
  amount: string;
  due: string;
};

type InvoiceState = {
  invoices: InvoiceType[];
};
// export
export type { InvoiceType, InvoiceState };
