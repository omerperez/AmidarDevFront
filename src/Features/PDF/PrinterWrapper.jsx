import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "../HtmlForms/HtmlForms.css";
import { Button } from "@mui/material";

export default function PrinterWrapper({ children }) {
  const linkToPrint = () => {
    return (
      <Button fullWidth className="print-pdf-btn">
        ייצא ל-PDF
      </Button>
    );
  };
  const componentRef = useRef();
  return (
    <>
      <ReactToPrint
        trigger={linkToPrint}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>{children}</div>
    </>
  );
}
