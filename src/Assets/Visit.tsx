import {
  AttachFile,
  Badge,
  CreditCard,
  Engineering,
  PanoramaPhotosphereSelect,
  PeopleAlt,
  WhereToVote,
} from "@mui/icons-material";
import { IStepperProperties } from "../Data/Interfaces/Visit";
import "../Layouts/Style/CSS/Visit.css";
import { StepperBtn, StepperMui } from "../Layouts/Style/MUI/VisitStyle";
import { STEPS, TITLES } from "./Constants/VisitConstants";

const gridStepBtnSize: number = 1;
const gridStepEmptySpaceSize: number = 0.25;
const advanceSearchGridSpacing = { xs: 2, md: 3 };
const advanceSearchGridColumns = { xs: 12, sm: 8, md: 12 };

const diaryVisitMenu = [
  {
    title: TITLES.ID_DETAILS,
    icon: <Badge />,
  },
  {
    title: TITLES.BANK_ACCOUNT,
    icon: <CreditCard />,
  },
  {
    title: "מסמך לאיזור אישי",
    icon: <AttachFile />,
  },
];

const actionsOptions = [
  {
    title: "ביקור אחזקה",
    icon: <Engineering />,
  },
  {
    title: "ביקור אכלוס",
    icon: <PeopleAlt />,
  },
  {
    title: "נטישה",
    icon: <PanoramaPhotosphereSelect />,
  },
  {
    title: "פלישה",
    icon: <WhereToVote />,
  },
];

const steps: string[] = [
  STEPS[1],
  STEPS[2],
  STEPS[3],
  STEPS[4],
  STEPS[5],
  STEPS[6],
];

const StepperProperties: IStepperProperties = {
  steps: steps,
  muiStyle: {
    sx: StepperMui,
    sxBtn: StepperBtn,
  },
  btnGridSize: gridStepBtnSize,
  emptyGridSize: gridStepEmptySpaceSize,
};

export {
  diaryVisitMenu,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  actionsOptions,
  StepperProperties,
};
