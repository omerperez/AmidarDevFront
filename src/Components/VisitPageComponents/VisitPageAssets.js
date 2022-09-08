import {
  Badge,
  CreditCard,
  AttachFile,
  FastRewind,
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
import { Chip, Divider } from "@mui/material";
import "./VisitPage.css";

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

// eslint-disable-next-line no-sparse-arrays
const advanceSearchInputsProperties = [
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="left">
        <Chip label="פרטים אישיים" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "שם משפחה",
    name: "lastName",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "שם פרטי",
    name: "firstName",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "תעודת זיהוי",
    name: "tenantId",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },

  // {
  //   lable: 'דירה',
  //   name: 'area'
  // },{
  //   lable: 'כניסה',
  //   name: 'area'
  // },{
  //   lable: 'מבנה',
  //   name: 'area'
  // },{
  //   lable: 'שיכון',
  //   name: 'area'
  // },
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="center">
        <Chip label="פרטי מיקום" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  ,
  {
    lable: "רחוב",
    name: "street",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "בית",
    name: "number",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "יישוב",
    name: "city",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מיקוד",
    name: "passcode",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "סטטוס חוזה",
    name: "tenantId",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="center">
        <Chip label="אכלוס" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "מצב אכלוס",
    name: "statusDescription",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "תאריך מצב אכלוס",
    name: "tenancyStartDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "שטח",
    name: "area",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מספר נפשות",
    name: "countOfTenants",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "ילדים עד גיל 21",
    name: "countOfKidsUnder21",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "ביקור אחרון",
    name: "coordinationDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="right">
        <Chip label="פרטי דירה" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "שימוש בפועל",
    name: "usedCode",
    sm: 2,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מספר חדרים [1-9]",
    name: "totalRoomsNumber",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "חצאי חדרים [1-3]",
    name: "halfRoomsNumber",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "קומה [0-99]",
    name: "floor",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מספר מדרגות לדירה [0-120]",
    name: "countOfStairs",
    sm: 2,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
];

const drawerWidth = 220;

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
  {
    title: "פעולות",
    icon: <FastRewind />,
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
  {
    title: "גר בגפו",
    icon: <Home />,
  },
  {
    title: "הצהרת דייר ראשי",
    icon: <RecordVoiceOver />,
  },
  {
    title: "הצהרת בן/בת זוג",
    icon: <Handshake />,
  },
  {
    title: "הרשאה לחיוב חשבון",
    icon: <Savings />,
  },
  {
    title: "הסדר חוב",
    icon: <ManageAccounts />,
  },
  {
    title: "שכירות מעבר",
    icon: <MoveUp />,
  },
  {
    title: "מבנה טרומי",
    icon: <Business />,
  },
  {
    title: "תמונות",
    icon: <PhotoCamera />,
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MultipleSelectMenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const accountStatusProperties = [
  {
    label: "מספר חשבון",
    value: "2055546845",
  },
  {
    label: "שכ״ד נטו",
    value: "133.485",
  },
  {
    label: "ברוטו",
    value: "780.23",
  },
  {
    label: "סוג הנחה ראשי",
    value: "מדרוג",
  },
  {
    label: "תאריך סיום",
    value: "30/11/2022",
  },
  {
    label: "אמצעי גביה",
    value: "שובר",
  },
  {
    label: "סה״כ חוב",
    value: "61.252",
  },
  {
    label: "יתרת חוב בהסדר",
    value: "0.00",
  },
  {
    label: "סוג שכ״ד",
    value: "מסובסד",
  },
  {
    label: "חוב בתביעה",
    value: "",
  },
];
export {
  textFieldGeneralPropertiesFormStyle,
  sidebarDrawerStyle,
  diaryVisitMenu,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  advanceSearchInputsProperties,
  actionsOptions,
  dateInputStyle,
  MultipleSelectMenuProps,
  dividerStyle,
  accountStatusProperties,
};
