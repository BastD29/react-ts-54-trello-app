import { FC } from "react";
import InvoicesList from "../InvoicesList/InvoicesList";
import { useModal } from "../../hooks/useModal";
// import AddInvoiceModal from "../modals/AddInvoiceModal/AddInvoiceModal";
import style from "./Navbar.module.scss";
import InvoiceForm from "../forms/InvoiceForm2/InvoiceForm";

const Navbar: FC = () => {
  const { setModal } = useModal();

  return (
    <nav className={style["navbar"]}>
      <InvoicesList />
      {/* <button onClick={() => setModal(<AddInvoiceModal />)}>Add invoice</button> */}
      <button onClick={() => setModal(<InvoiceForm />)}>Add invoice</button>
    </nav>
  );
};

export default Navbar;
