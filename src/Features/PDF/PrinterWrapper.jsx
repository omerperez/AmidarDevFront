import React, { useRef } from "react";
import "../HtmlForms/HtmlForms.css";
import { Button } from "@mui/material";
import { saveFile } from "../../Services/Files/downloadFiles";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// import ReactToPrint from "react-to-print";

export default function PrinterWrapper({ children }) {
  // const linkToPrint = () => {
  //   return (
  //     <Button fullWidth className="print-pdf-btn">
  //       ייצא ל-PDF
  //     </Button>
  //   );
  // };
  const componentRef = useRef();

  const takeImage = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const img = canvas.getContext("2d");
      const imgData = img.canvas.toDataURL();

      const pdf = new jsPDF();
      pdf.addImage(imgData, "png", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <Button variant="contained" onClick={takeImage}>
        הורד מסמך
      </Button>
      <page id="divToPrint" size="A4" ref={componentRef}>
        {children}
      </page>
    </>
  );
}
