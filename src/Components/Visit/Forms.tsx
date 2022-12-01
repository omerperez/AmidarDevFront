import { Button, Grid } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { formsOptions, htmlForms } from "../../Assets/Visit";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import PrinterWrapper from "../../Services/PrinterWrapper";
import GenericDialog from "../Global/GenericDialog";

export default function Forms() {
  const [form, setForm] = useState(-1);
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

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
                  <>
                    <Button
                      onClick={() => setForm(index)}
                      className={
                        visitState.formsFiles[form.formName]
                          ? "img-bg-btn-invalid"
                          : "img-bg-btn-proper"
                      }
                    >
                      <h2 className="img-text">{form.title}</h2>
                    </Button>
                    {visitState.formsFiles[form.formName] && (
                      <p className="req-form-text">שדה חובה</p>
                    )}
                  </>
                }
                closeBtn={true}
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
