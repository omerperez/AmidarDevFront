import { SxProps, Theme } from "@mui/material";

const StepperBtn: SxProps<Theme> = {
  color: "rgb(75 134 197)",
  background: "white",
  height: 35,
  width: 35,
};

const StepperMui: SxProps<Theme> = {
  pointer: "cursor",
  "& .muirtl-1hv8oq8-MuiStepLabel-label.Mui-active": {
    color: "white",
    fontWeight: "bolder",

    fontFamily: `Noto Sans Hebrew`,
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
  "& .muirtl-1hv8oq8-MuiStepLabel-label": {
    fontFamily: `Noto Sans Hebrew`,
    fontSize: 14,
    color: "white",
    fontWeight: "bolder",
  },
  "& .muirtl-1hv8oq8-MuiStepLabel-label.Mui-completed": {
    fontWeight: "bolder",
    color: "white",

    fontFamily: `Noto Sans Hebrew`,
  },
};

const ApartmentDetailsInputMui: SxProps<Theme> = {
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "12px",
  },
};

export { StepperBtn, StepperMui, ApartmentDetailsInputMui };
