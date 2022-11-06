import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ThemeStyleRTL from "../../Assets/Style/ThemeStyleRTL";
import { Fab, Grid } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
const steps = ["פרטי הלקוח", "חשבון", "אחזקה", "אכלוס", "טפסים", "סיכום ביקור"];

const StepperMuiStyle = {
  pointer: "cursor",
  "& .muirtl-qivjh0-MuiStepLabel-label.Mui-active": {
    color: "white",
    fontWeight: "bolder",
  },
  "& .muirtl-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
    color: "#14DDB2",
    background: "white",
  },
  "& .muirtl-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
    fontSize: 28,
    fontWeight: "bolder",
    color: "#bdbdbd",
    borderRadius: "50%",
    border: "white solid 1px",
  },
  "& .muirtl-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
    color: "#A4529B",
  },
  "& .muirtl-qivjh0-MuiStepLabel-label": {
    fontFamily: "Tahoma",
    fontSize: 14,
    color: "white",
    fontWeight: "bolder",
  },
  "& .muirtl-qivjh0-MuiStepLabel-label.Mui-completed": {
    fontWeight: "bolder",
    color: "white",
  },
};

export default function VisitStepper({ activeStep, setActiveStep }) {
  return (
    <ThemeStyleRTL>
      <div className="stteper-box">
        <Grid container>
          <Grid item sm={1} className="text-center m-auto">
            <Fab
              sx={{
                color: "rgb(75 134 197)",
                background: "white",
                height: 35,
                width: 35,
              }}
              onClick={() =>
                setActiveStep(activeStep === 0 ? 0 : activeStep - 1)
              }
            >
              <KeyboardDoubleArrowRight />
            </Fab>
          </Grid>
          <Grid item sm={0.25}></Grid>
          <Grid item sm={9.5} className="m-auto">
            <Stepper activeStep={activeStep} sx={StepperMuiStyle}>
              {steps.map((label, index) => (
                <Step key={label} onClick={() => setActiveStep(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item sm={0.25}></Grid>
          <Grid item sm={1} className="d-flex jc-center m-auto">
            <Fab
              sx={{
                color: "rgb(75 134 197)",
                background: "white",
                height: 35,
                width: 35,
              }}
              onClick={() =>
                setActiveStep(activeStep === 5 ? 5 : activeStep + 1)
              }
            >
              <KeyboardDoubleArrowLeft />
            </Fab>
          </Grid>
        </Grid>
      </div>
    </ThemeStyleRTL>
  );
}
