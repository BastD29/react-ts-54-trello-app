import { FC, useState } from "react";
import style from "./InvoiceForm.module.scss";
// import { InvoiceType } from "../../../models/Invoice";

type InvoiceFormProps = {
  // addInvoice: () => void;
  // text: string;
  // setText: Dispatch<SetStateAction<string>>;
};

const InvoiceForm: FC<InvoiceFormProps> = (
  {
    /* text, setText, addInvoice */
  }
) => {
  const [name, setName] = useState("");

  const addInvoice = () => {
    // const newInvoice: InvoiceType = {id: Date.now(), name, number};
  };

  return (
    <div className={style["invoice-form"]}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addInvoice}>Add Invoice</button>
    </div>
  );
};

export default InvoiceForm;
