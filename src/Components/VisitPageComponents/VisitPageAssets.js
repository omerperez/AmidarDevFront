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
import "./VisitPage.css";

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
    fontFamily: "Tahoma",
    padding: "12px 0px 12px 12px",
  },
};

const dateInputStyle = {
  "& .muirtl-1a1fmpi-MuiInputBase-root-MuiInput-root": {
    fontFamily: "Tahoma",
  },
  "& .muirtl-10botns-MuiInputBase-input-MuiFilledInput-input": {
    fontFamily: "Tahoma",
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

const accountStatusProperties = [
  {
    label: "מספר חשבון",
    value: "2055546845",
    flag: false,
  },
  {
    label: "שם הלקוח",
    value: "חיים כהן",
    flag: false,
  },
  {
    label: "שכ״ד נטו",
    value: "133.485",
    flag: true,
    gridExtra: 6,
  },
  {
    label: "ברוטו",
    value: "780.23",
    flag: false,
  },
  {
    label: "סוג שכ״ד",
    value: "מסובסד",
    flag: false,
  },
  {
    label: "סוג הנחה ראשי",
    value: "מדרוג",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "תאריך סיום",
    value: "30/11/2022",
    flag: false,
  },
  {
    label: "אמצעי גביה",
    value: "שובר",
    flag: false,
  },
  {
    label: "סה״כ חוב",
    value: "61.252",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "יתרת חוב בהסדר",
    value: "0.00",
    flag: false,
  },
  {
    label: "חוב בתביעה",
    value: "0.00-",
    flag: false,
  },
];

export {
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
};
