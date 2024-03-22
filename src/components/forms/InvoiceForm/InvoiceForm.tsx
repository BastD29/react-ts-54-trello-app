import { ChangeEvent, FC, FormEvent, useState } from "react";
import { FormDataType } from "../../../models/Form";
import { InvoiceType } from "../../../models/Invoice";
import { useInvoice } from "../../../hooks/useInvoice";
import { ADD_INVOICE } from "../../../reducer/invoice/actions";
import { useModal } from "../../../hooks/useModal";
import style from "./InvoiceForm.module.scss";

const initialValues: FormDataType = {
  name: "",
  number: "",
  amount: "",
  due: "",
};

const InvoiceForm: FC = ({}) => {
  const { dispatch } = useInvoice();
  const { unsetModal } = useModal();
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { name, number, amount, due } = formData;

    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isAnyFieldEmpty) {
      // Alert the user or handle the error as needed
      alert("Please fill in all fields.");
      return; // Prevent the form submission
    }

    console.log("submitted formData: ", formData);

    const newInvoice: InvoiceType = {
      id: Date.now(),
      name,
      amount,
      due,
      // number: +number,
      number,
    };

    dispatch({ type: ADD_INVOICE, payload: newInvoice });
    setFormData(initialValues);
    unsetModal();
  };

  return (
    <form className={style["invoice-form"]} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData["name"]}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="text"
          name="number"
          value={formData["number"]}
          onChange={handleChange}
        />
      </label>

      <label>
        Amount
        <input
          type="text"
          name="amount"
          value={formData["amount"]}
          onChange={handleChange}
        />
      </label>

      <label>
        Due
        <input
          type="text"
          name="due"
          value={formData["due"]}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Invoice</button>
    </form>
  );
};

export default InvoiceForm;
