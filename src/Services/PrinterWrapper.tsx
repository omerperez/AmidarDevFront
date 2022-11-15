import { useRef } from "react";
import { Button, Grid } from "@mui/material";
import { takeImage } from "../Utils/SaveFile";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import "../Layouts/Forms/Forms.css";

interface PrinterWrapperProps {
  children: JSX.Element;
}
export default function PrinterWrapper({ children }: PrinterWrapperProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="page" id="divToPrint" dir="rtl" ref={contentRef}>
        {/* size="A4" */}
        {children}
      </div>
      <div className="save-btn">
        <Button
          variant="contained"
          className="dowload-file-btn"
          onClick={() => takeImage(contentRef)}
        >
          <Grid container spacing={2}>
            <Grid item sm={7} className="m-auto">
              <span className="text-dowload-file-btn">שמור</span>
            </Grid>
            <Grid item sm={5} className="m-auto">
              <SaveAltIcon className="icon-dowload-file-btn" />
            </Grid>
          </Grid>
        </Button>
      </div>
    </>
  );
}
