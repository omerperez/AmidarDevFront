import {
  Badge,
  CreditCard,
  AttachFile,
  Engineering,
  PeopleAlt,
  WhereToVote,
  PanoramaPhotosphereSelect,
  Home,
  RecordVoiceOver,
  Handshake,
  Savings,
  ManageAccounts,
  MoveUp,
  Business,
  PhotoCamera,
} from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";
import LiveAlone from "../Components/Visit/Forms/LiveAlone";
import MainTenant from "../Components/Visit/Forms/MainTenant";
import {
  IApartmentidentifyingInformationInputs,
  IStepperProperties,
  IContactInformation,
} from "../Interfaces/Visit";
import "../Layouts/Style/Visit.css";
import { PaymentAccount } from "../Types/Visit";

// import AccountDebit from "./AccountDebit";
// import DebtSettlement from "./DebtSettlement";
// import LiveAlone from "./LiveAlone";
// import MainTenants from "./MainTenants";
// import PrefabricatedStructure from "./PrefabricatedStructure";
// import TransitionalRent from "./TransitionalRent";

const htmlForms = [
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  // <AccountDebit />,
  // <DebtSettlement />,
  // <TransitionalRent />,
  // <PrefabricatedStructure />,
];

const drawerWidth = 220;

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const advanceSearchGridSpacing = { xs: 2, md: 3 };

const advanceSearchGridColumns = { xs: 12, sm: 8, md: 12 };

const dividerStyle = {
  "&.MuiDivider-root": {
    "&::before": {
      borderTop: "thin solid #7baddf",
    },
    "&::after": {
      borderTop: "thin solid #7baddf",
    },
  },
  "& .MuiDivider-wrapper": {
    fontSize: 16,
  },
};

const sidebarDrawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "rgb(147, 195, 247)",
    borderLeft: "solid rgb(75 134 197) 2px",
  },
  [`& .css-10hburv-MuiTypography-root`]: { fontFamily: "Tahoma", fontSize: 14 },
};

const diaryVisitMenu = [
  {
    title: "פרטי זיהוי",
    icon: <Badge />,
  },
  {
    title: "מצב חשבון",
    icon: <CreditCard />,
  },
  {
    title: "מסמך לאיזור אישי",
    icon: <AttachFile />,
  },
  // {
  //   title: "פעולות",
  //   icon: <FastRewind />,
  // },
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

const formsOptions = [
  {
    title: "גר בגפו",
    icon: <Home />,
    statusName: "isLiveAlone",
  },
  {
    title: "הצהרת דייר ראשי",
    icon: <RecordVoiceOver />,
    statusName: "isContractStatus",
  },
  {
    title: "הצהרת בן/בת זוג",
    icon: <Handshake />,
    statusName: "isLiveAlone",
  },
  {
    title: "הרשאה לחיוב חשבון",
    icon: <Savings />,
    statusName: "isLiveAlone",
  },
  {
    title: "הסדר חוב",
    icon: <ManageAccounts />,
    statusName: "isLiveAlone",
  },
  {
    title: "שכירות מעבר",
    icon: <MoveUp />,
    statusName: "isTenantAffidavitA",
  },
  {
    title: "מבנה טרומי",
    icon: <Business />,
    statusName: "isBuilding38",
  },
  {
    title: "תמונות",
    icon: <PhotoCamera />,
    statusName: "images",
  },
];

const textFieldGeneralPropertiesFormStyle = {
  [`& .muirtl-10botns-MuiInputBase-input-MuiFilledInput-input`]: {
    fontFamily: `Noto Sans Hebrew`,
    padding: "12px 0px 12px 12px",
  },
};

const dateInputStyle = {
  "& .muirtl-1a1fmpi-MuiInputBase-root-MuiInput-root": {
    fontFamily: `Noto Sans Hebrew`,
  },
  "& .muirtl-10botns-MuiInputBase-input-MuiFilledInput-input": {
    fontFamily: `Noto Sans Hebrew`,
    padding: "16px 8px 16px 12px",
  },
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    textAlign: "start",
  },
};

const MultipleSelectMenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const apartmentDetails = [
  {
    label: "שימוש בפועל",
    value: "2055546845",
  },
  {
    label: "מספר חדרים [1-9]",
    value: "2055546845",
  },
  {
    label: "חצאי חדרים [1-3]",
    value: "2055546845",
  },
  {
    label: "קומה [1-3]",
    value: "2055546845",
  },
  {
    label: "מספר מדרגות לדירה [1-3]",
    value: "2055546845",
  },
];

interface IPaymentAccount {
  label: string;
  name: keyof PaymentAccount;
  flag: boolean;
  gridExtra?: number;
}
const accountStatusProperties: IPaymentAccount[] = [
  {
    label: "מספר חשבון",
    name: "accountNumber",
    // value: "2055546845",
    flag: false,
  },
  {
    label: "שם הלקוח",
    name: "accountFullName",
    // value: "חיים כהן",
    flag: false,
  },
  {
    label: "שכ״ד נטו",
    name: "netRent",
    // value: "133.485",
    flag: true,
    gridExtra: 6,
  },
  {
    label: "ברוטו",
    name: "grossRent",
    // value: "780.23",
    flag: false,
  },
  {
    label: "סוג שכ״ד",
    name: "rentType",
    // value: "מסובסד",
    flag: false,
  },
  {
    label: "סוג הנחה ראשי",
    name: "discountType",
    // value: "מדרוג",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "תאריך סיום",
    name: "finishDate",
    // value: "30/11/2022",
    flag: false,
  },
  {
    label: "אמצעי גביה",
    name: "collectionMeans",
    // value: "שובר",
    flag: false,
  },
  {
    label: "סה״כ חוב",
    name: "debt",
    // value: "61.252",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "יתרת חוב בהסדר",
    name: "debt",
    // value: "0.00",
    flag: false,
  },
  {
    label: "חוב בתביעה",
    name: "lawsuitDebt",
    // value: "0.00-",
    flag: false,
  },
];

const identifyingInformationInputs: IApartmentidentifyingInformationInputs[] = [
  {
    label: "שם מלא",
    name: "firstName",
    sm: 4,
    md: 3,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "תעודת זיהוי",
    name: "tenantId",
    sm: 4,
    md: 7.5,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "רחוב",
    name: "street",
    sm: 4,
    md: 3,
    variant: "filled",
    isEdit: true,
    readOnly: true,
  },
  {
    label: "בית",
    name: "apartmentNumber",
    sm: 2,
    md: 3,
    variant: "filled",
    isEdit: true,
    readOnly: true,
  },
  {
    label: "יישוב",
    name: "city",
    sm: 2,
    md: 3,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "מיקוד",
    name: "passcode",
    sm: 2,
    md: 3,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
];

const occupancyInformationLabels: IApartmentidentifyingInformationInputs[] = [
  {
    label: "מצב אכלוס",
    name: "occupancyStatus",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "תאריך אכלוס",
    name: "occupancyDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ביקור אחרון",
    name: "lastVisitDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  // {
  //   label: "שטח",
  //   name: "area",
  //   sm: 2,
  //   md: 2,
  //   variant: "filled",
  //   readOnly: true,
  // },
  {
    label: "מספר נפשות",
    name: "totalTenantsCount",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ילדים עד גיל 21",
    name: "kidsUnder21",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
];

const contactInfoLabels: IContactInformation[] = [
  {
    label: "נייד מוביל",
    name: "mainPhoneNumber",
    value: "0522520484",
  },
  {
    label: "טלפון דירה",
    name: "apartmentPhoneNumber",
    value: "0522520484",
  },
  {
    label: "טלפון עבודה",
    name: "workPhoneNumber",
    value: "0522520484",
  },
  {
    label: `דוא"ל`,
    name: "email",
    value: "omerperez222@gmail.com",
  },
  {
    label: "דוד השכן",
    name: "firstContactName",
    value: "0522520484",
  },
  {
    label: "דוד השכן",
    name: "firstContactPhoneNumber",
    value: "0522520484",
  },
  {
    label: "משה ועד בית",
    name: "secondContactName",
    value: "0522520484",
  },
  {
    label: "דוד השכן",
    name: "secondContactPhoneNumber",
    value: "0522520484",
  },
  {
    label: "פרטי התקשרות נוספים",
    name: "otherContactDetailsComment",
    value:
      "המספר למעלה עבור משה השכן, שימו לב בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה",
  },
];

const StepperBtnStyle: SxProps<Theme> = {
  color: "rgb(75 134 197)",
  background: "white",
  height: 35,
  width: 35,
};

const gridStepBtnSize: number = 1;
const gridStepEmptySpaceSize: number = 0.25;

const steps: string[] = [
  "פרטי הלקוח",
  "חשבון",
  "אחזקה",
  "אכלוס",
  "טפסים",
  "סיכום ביקור",
];

const StepperMuiStyle: SxProps<Theme> = {
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

const StepperProperties: IStepperProperties = {
  steps: steps,
  muiStyle: {
    sx: StepperMuiStyle,
    sxBtn: StepperBtnStyle,
  },
  btnGridSize: gridStepBtnSize,
  emptyGridSize: gridStepEmptySpaceSize,
};

export {
  htmlForms,
  textFieldGeneralPropertiesFormStyle,
  sidebarDrawerStyle,
  diaryVisitMenu,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  actionsOptions,
  dateInputStyle,
  MultipleSelectMenuProps,
  dividerStyle,
  accountStatusProperties,
  formsOptions,
  apartmentDetails,
  identifyingInformationInputs,
  occupancyInformationLabels,
  contactInfoLabels,
  // steps,
  // StepperMuiStyle,
  StepperProperties,
};
