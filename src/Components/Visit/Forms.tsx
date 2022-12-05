import { Button, Grid } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { formsFields, formsArray } from "../../Assets/Visit/Forms";
import { contexts } from "../../Contexts/ContextsExports";
import { FormStatus } from "../../Data/Builders/Visit";
import { VisitContextType } from "../../Data/Types/Visit";
import PrinterWrapper from "../../Services/PrinterWrapper";
import GenericDialog from "../Global/GenericDialog";

export default function Forms() {
  const [form, setForm] = useState(-1);
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

  const getForm = (
    index: number,
    initState: Dispatch<SetStateAction<number>>,
  ) => {
    return (
      <div>
        <Button onClick={() => initState(-1)}>חזור</Button>
        <PrinterWrapper children={formsArray[index]} />
      </div>
    );
  };

  if (form !== -1) {
    return getForm(form, setForm);
  }

  const getClassName = (form: keyof FormStatus) => {
    if (visitState.formsFiles[form]) {
      return "img-bg-btn-invalid";
    }
    return "img-bg-btn-proper";
  };

  return (
    <div className="padding-btn-img">
      <Grid container spacing={2} className="mt-20 ">
        {formsFields.map((form, index) => (
          <Grid item sm={3} className="mt-20" key={`Forms-Item-${form.title}`}>
            <div className="d-flex jc-center">
              <GenericDialog
                children={
                  <>
                    <Button
                      onClick={() => setForm(index)}
                      className={getClassName(form.name)}
                    >
                      <h2 className="img-text">{form.title}</h2>
                    </Button>
                    {visitState.formsFiles[form.name] && (
                      <p className="req-form-text">שדה חובה</p>
                    )}
                  </>
                }
                closeBtn={true}
                fullSize={true}
                content={<PrinterWrapper children={formsArray[index]} />}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
