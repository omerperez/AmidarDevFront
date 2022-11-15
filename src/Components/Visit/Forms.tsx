import { useState, Dispatch, SetStateAction } from "react";
import { Button, Grid } from "@mui/material";
import { formsOptions, htmlForms } from "../../Assets/Visit";
import PrinterWrapper from "../../Services/PrinterWrapper";
import GenericDialog from "../Global/GenericDialog";

export default function Forms() {
  const [form, setForm] = useState(-1);

  const getForm = (
    index: number,
    initState: Dispatch<SetStateAction<number>>
  ) => {
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
    <div className="padding-btn-img">
      <Grid container spacing={2} className="mt-20 ">
        {formsOptions.map((form, index) => (
          <Grid item sm={3} className="mt-20" key={`Forms-Item-${form.title}`}>
            <div className="d-flex jc-center">
              <GenericDialog
                children={
                  <Button onClick={() => setForm(index)} className="img-bg-btn">
                    <h2 className="img-text">{form.title}</h2>
                  </Button>
                }
                closeBtn={false}
                fullSize={true}
                content={<PrinterWrapper children={htmlForms[index]} />}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
