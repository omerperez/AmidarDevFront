import React, { useRef } from "react";
import "../HtmlForms/HtmlForms.css";
import { Button, Grid } from "@mui/material";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// import ReactToPrint from "react-to-print";
import DownloadIcon from "@mui/icons-material/Download";

export default function PrinterWrapper({ children }) {
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
      <Button
        variant="contained"
        className="dowload-file-btn"
        onClick={takeImage}
      >
        <div className="d-flex jc-center">
          <span className="text-dowload-file-btn">הורד מסמך</span>
          <DownloadIcon className="icon-dowload-file-btn" />
        </div>
      </Button>
      <page id="divToPrint" size="A4" dir="rtl" ref={componentRef}>
        {children}
      </page>
    </>
  );
}
