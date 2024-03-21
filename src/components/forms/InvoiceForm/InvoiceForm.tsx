import { Dispatch, FC, SetStateAction } from "react";
import style from "./InvoiceForm.module.scss";

type InvoiceFormProps = {
  addInvoice: () => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const InvoiceForm: FC<InvoiceFormProps> = ({ text, setText, addInvoice }) => {
  return (
    <div className={style["invoice-form"]}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addInvoice}>Add Invoice</button>
    </div>
  );
};

export default InvoiceForm;
