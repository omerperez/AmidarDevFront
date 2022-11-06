import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { formsOptions } from "./Assets";
import { htmlForms } from "../../../../Features/HtmlForms/ExportHtmlForms";
import PrinterWrapper from "../../../../Features/PDF/PrinterWrapper";

export default function Forms() {
  const [form, setForm] = useState(-1);

  const getForm = (index, initState) => {
    return (
      <div>
        <Button onClick={() => initState(-1)}>חזור</Button>
        <PrinterWrapper children={htmlForms[index]} />
      </div>
    );
  };

  if (form !== -1) {
    return getForm(form, setForm);
  }

  return (
    <Grid container spacing={0}>
      {formsOptions.map((form, key) => (
        <Grid item sm={1.5}>
          <div className="d-flex jc-center m-auto">
            <Button onClick={() => setForm(key)}>
              <div className="relative">
                <img
                  src="/images/doc.png"
                  alt="doc"
                  width={110}
                  className="doc-design"
                />
                <h2 className="img-text text-color">{form.title}</h2>
              </div>
            </Button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
