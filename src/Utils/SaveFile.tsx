import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { MutableRefObject } from "react";

const takeImage = (contentRef: MutableRefObject<HTMLDivElement | null>) => {
  if (contentRef.current) {
    const input = contentRef.current;
    html2canvas(input).then((canvas: HTMLCanvasElement) => {
      if (canvas) {
        const img = canvas.getContext("2d");
        if (img) {
          const imgData = img.canvas.toDataURL();
          const pdf = new jsPDF("p", "px", "a4");
          pdf.setFontSize(1);
          pdf.addImage(imgData, "png", 5, 5, 0, 0);
          pdf.save("download.pdf");
        }
      }
    });
  }
};

function FileSaver(fileType: string, fileLocation: string, fileName: string) {
  const fileTypeSource = getFileTypeSource(fileType);
  const linkSource = fileTypeSource + fileLocation;
  const downloadLink = document.createElement("a");
  const fileExtension = getFileExtension(fileType);
  const name = `${fileName}.${fileExtension}`;
  downloadLink.href = linkSource;
  downloadLink.download = name;
  downloadLink.click();
}

function getFileTypeSource(fileType: string) {
  switch (fileType) {
    case "image":
      return "data:image/";
    case "pdf":
      return "data:application/pdf;base64,";
    default:
      return "data:image/";
  }
}

function getFileExtension(fileType: string) {
  switch (fileType) {
    case "image":
      return "png";
    case "pdf":
      return "pdf";
    default:
      return "png";
  }
}

export { FileSaver, takeImage };
