type InvoiceType = {
  id: number;
  name: string;
  number: number;
  amount: string;
  due: string;
};

type InvoiceState = {
  invoices: InvoiceType[];
};

export type { InvoiceType, InvoiceState };
