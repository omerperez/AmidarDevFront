import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";
import { StepperProperties } from "../../Assets/Visit";
import { Stepper, Step, StepLabel, Fab, Grid } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

interface StepperProps {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

export default function VisitStepper({
  activeStep,
  setActiveStep,
}: StepperProps) {
  return (
    <ThemeRightToLeft>
      <div className="stteper-box">
        <Grid container>
          <Grid
            item
            sm={StepperProperties.btnGridSize}
            className="text-center m-auto"
          >
            <Fab
              sx={StepperProperties.muiStyle.sxBtn}
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              <KeyboardDoubleArrowRight />
            </Fab>
          </Grid>
          <Grid item sm={StepperProperties.emptyGridSize}></Grid>
          <Grid item sm={9.5} className="m-auto">
            <Stepper activeStep={activeStep} sx={StepperProperties.muiStyle.sx}>
              {StepperProperties.steps.map((label: string, index: number) => (
                <Step key={label} onClick={() => setActiveStep(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item sm={StepperProperties.emptyGridSize}></Grid>
          <Grid
            item
            sm={StepperProperties.btnGridSize}
            className="d-flex jc-center m-auto"
          >
            <Fab
              sx={StepperProperties.muiStyle.sxBtn}
              disabled={activeStep === 5}
              onClick={() => setActiveStep(activeStep + 1)}
            >
              <KeyboardDoubleArrowLeft />
            </Fab>
          </Grid>
        </Grid>
      </div>
    </ThemeRightToLeft>
  );
}
