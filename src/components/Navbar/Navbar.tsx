import { FC } from "react";
import { useModal } from "../../hooks/useModal";
import InvoiceForm from "../forms/InvoiceForm/InvoiceForm";
import InvoicesList from "../InvoicesList/InvoicesList";
import style from "./Navbar.module.scss";

const Navbar: FC = () => {
  const { setModal } = useModal();

  return (
    <nav className={style["navbar"]}>
      <InvoicesList />
      <button onClick={() => setModal(<InvoiceForm />)}>Add invoice</button>
    </nav>
  );
};

export default Navbar;
