import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./routes/invoices.tsx";
import SelectInvoice from "./pages/SelectInvoice/SelectInvoice.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Invoice from "./routes/invoice.tsx";
import { ModalProvider } from "./context/ModalContext/ModalProvider.tsx";
import { InvoiceProvider } from "./context/InvoiceContext/InvoiceProvider.tsx";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InvoiceProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Invoices />}>
              <Route index element={<SelectInvoice />} />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </InvoiceProvider>
  </React.StrictMode>
);
