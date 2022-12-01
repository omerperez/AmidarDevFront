import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Fab, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { useContext, useState } from "react";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";
import { StepperProperties } from "../../Assets/Visit";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import WarningAlertPopup from "../Global/WarningAlertPopup";

interface StepperProps {
  onSubmit?: () => Boolean;
}

export default function VisitStepper({ onSubmit }: StepperProps) {
  const { visitState, setStep } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newStepIndex, setNewStepIndex] = useState<number>(0);
  const moveToStepIndex = (index: number) => {
    if (onSubmit) {
      const submitStatus = onSubmit();
      setIsOpen(!submitStatus as boolean);
      setNewStepIndex(index);
      submitStatus === true && setStep(index);
    } else {
      setStep(index);
    }
  };

  return (
    <>
      <WarningAlertPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        newStep={newStepIndex}
      />
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
                disabled={visitState.activeStep === 0}
                onClick={() => moveToStepIndex(visitState.activeStep - 1)}
              >
                <KeyboardDoubleArrowRight />
              </Fab>
            </Grid>
            <Grid item sm={StepperProperties.emptyGridSize}></Grid>
            <Grid item sm={9.5} className="m-auto">
              <Stepper
                activeStep={visitState.activeStep}
                sx={StepperProperties.muiStyle.sx}
              >
                {StepperProperties.steps.map((label: string, index: number) => (
                  <Step key={label} onClick={() => moveToStepIndex(index)}>
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
                disabled={visitState.activeStep === 5}
                onClick={() => moveToStepIndex(visitState.activeStep + 1)}
              >
                <KeyboardDoubleArrowLeft />
              </Fab>
            </Grid>
          </Grid>
        </div>
      </ThemeRightToLeft>
    </>
  );
}
