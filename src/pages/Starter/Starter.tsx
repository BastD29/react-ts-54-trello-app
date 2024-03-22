import { FC } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import SelectInvoice from "../SelectInvoice/SelectInvoice";
import Empty from "../Empty/Empty";

const Starter: FC = () => {
  const { state } = useInvoice();

  if (state.invoices.length > 0) {
    return <SelectInvoice />;
  } else {
    return <Empty />;
  }
};

export default Starter;
