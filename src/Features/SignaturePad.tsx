import { Button, Divider, Grid } from "@mui/material";
import { useRef } from "react";
import SignaturePad from "react-signature-pad-wrapper";
import "../Layouts/Forms/Forms.css";
import { getDateFormat } from "./FormatsFunctions";

export default function Signature() {
  const signatureRef = useRef<any>(null);
  return (
    <>
      <Grid item xs={6} sm={6} md={6} className="mt-40">
        <div className="text-center">
          <span>{getDateFormat(new Date())}</span>
          <br />
          <Divider className="divider-style" />
          <span>תאריך</span>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={6} className="mt-40 mb-40 ">
        <div className="signature-container">
          <SignaturePad
            width={150}
            height={150}
            redrawOnResize
            ref={signatureRef}
            options={{ maxWidth: 1, minWidth: 1, penColor: "black" }}
          />
        </div>
        <div style={{ maxWidth: 150 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              signatureRef.current.clear();
            }}
          >
            נקה חתימה
          </Button>
        </div>
      </Grid>
    </>
  );
}
