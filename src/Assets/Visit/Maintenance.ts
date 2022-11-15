import {
  IApartmentDetailItem,
  IAreaListItem,
  IMaintenanceItem,
  ISelectListItem,
  IRatingOptionItem,
} from "../../Interfaces/Visit";
import { SxProps, Theme } from "@mui/material";

const qualityRatingOptionsList: IRatingOptionItem[] = [
  {
    label: "תקין",
    value: 5,
    textActive: "text-label-white",
  },
  {
    label: "תקין, אך ישן",
    value: 4,
    textActive: "text-label-black",
  },
  {
    label: "דרוש טיפול נקודתי",
    value: 3,
    textActive: "text-label-black",
  },
  {
    label: "נדרש תיקון מקיף",
    value: 2,
    textActive: "text-label-white",
  },
  {
    label: "לא ראוי למגורים",
    value: 1,
    textActive: "text-label-white",
  },
];

const flooring: ISelectListItem[] = [
  { label: "ריצוף שבור", value: "ריצוף שבור" },
  { label: " ריצוף חסר", value: " ריצוף חסר" },
  { label: "ריצוף שקוע", value: "ריצוף שקוע" },
  { label: "בעיה בחיפוי במטבח", value: "בעיה בחיפוי במטבח" },
  { label: "בעיה בחיפוי במקלחת", value: "בעיה בחיפוי במקלחת" },
];

const enteryDoor: ISelectListItem[] = [
  { label: "בעיה בצילינדר", value: "בעיה בצילינדר" },
  { label: "בעיה באינסרט", value: "בעיה באינסרט" },
  { label: "בעיה במנעול", value: "בעיה במנעול" },
  { label: "בעיה בסגר ביטחון", value: "בעיה בסגר ביטחון" },
  { label: "בעיה בעינית", value: "בעיה בעינית" },
  { label: "בעיה בציפוי", value: "בעיה בציפוי" },
];

const caulking: ISelectListItem[] = [
  { label: "רטיבות בתקרה", value: "רטיבות בתקרה" },
  { label: "רטיבות בקיר", value: "רטיבות בקיר" },
];

const barsAndRailings: ISelectListItem[] = [
  { label: "קיים ותקין", value: "קיים ותקין" },
  { label: "תקין ולא קיים", value: "תקין ולא קיים" },
  { label: "לא קיים", value: "לא קיים" },
];

const electricalSystem: ISelectListItem[] = [
  { label: "בעיה בלוח חשמל", value: "בעיה בלוח חשמל" },
  { label: "בעיה בחשמל הפנים", value: "בעיה בחשמל הפנים" },
];

const pipingLeaks: ISelectListItem[] = [
  { label: "בעיה בצנרת דלוחין", value: "בעיה בצנרת דלוחין" },
  { label: "בעיה בצנרת מים", value: "בעיה בצנרת מים" },
  { label: "בעיה בצנרת דוד", value: "בעיה בצנרת דוד" },
  { label: "בעיה בלחץ מים", value: "בעיה בלחץ מים" },
];

const doors: ISelectListItem[] = [
  { label: "דלת לא נסגרת", value: "דלת לא נסגרת" },
  { label: "דלת שבורה", value: "דלת שבורה" },
  { label: "אין דלת", value: "אין דלת" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
];

const windows: ISelectListItem[] = [
  { label: "חלון חסר", value: "חלון חסר" },
  { label: "חלון שבור", value: "חלון שבור" },
  { label: "חלון לא נסגר", value: "חלון לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "חלון עץ", value: "חלון עץ" },
  { label: "זגוגית שבורה", value: "זגוגית שבורה" },
];

const blinds: ISelectListItem[] = [
  { label: "תריס חסר", value: "תריס חסר" },
  { label: "תריס שבור", value: "תריס שבור" },
  { label: "תריס לא נסגר", value: "תריס לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "תריס מעץ", value: "תריס מעץ" },
  { label: "שלבים חסרים", value: "שלבים חסרים" },
];

const kitchen: ISelectListItem[] = [
  { label: "ישן", value: "ישן" },
  { label: "שיש שבור", value: "שיש שבור" },
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "כיור סדוק / שבור", value: "כיור סדוק / שבור" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
];

const toilet: ISelectListItem[] = [
  { label: "אסלה שבורה", value: "אסלה שבורה" },
  { label: "ניאגרה תקולה", value: "ניאגרה תקולה" },
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "כיור סדוק / שבור", value: "כיור סדוק / שבור" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
  { label: "חסרה ידית אחיזה", value: "חסרה ידית אחיזה" },
];

const shower: ISelectListItem[] = [
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "אינטרפוץ לא תקין", value: "אינטרפוץ לא תקין" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
  { label: "חסרה ידית אחיזה", value: "חסרה ידית אחיזה" },
];

const generalApartmentCondition: ISelectListItem[] = [
  { label: "לא ראויה למגורים", value: "לא ראויה למגורים" },
  { label: "נדרש שיפוץ כולל", value: "נדרש שיפוץ כולל" },
  { label: "נדרש שיפוץ מקלחת", value: "נדרש שיפוץ מקלחת" },
  { label: "נדרש שיפוץ מטבח", value: "נדרש שיפוץ מטבח" },
];

const maintenanceQualityList: IMaintenanceItem[] = [
  {
    title: "ריצוף וחיפוי",
    name: "flooring",
    areaName: "flooringAreaComment",
    deficienciesList: flooring,
    indexLocation: 0,
  },
  {
    title: "דלת כניסה",
    name: "enteryDoor",
    areaName: "enteryDoorAreaComment",
    deficienciesList: enteryDoor,
    indexLocation: 1,
  },
  {
    title: "ליקוי איטום (רטיבות)",
    name: "caulking",
    areaName: "caulkingAreaComment",
    deficienciesList: caulking,
    indexLocation: 2,
  },
  {
    title: "מעקות וסורגים (תקינות ויציבות)",
    name: "barsAndRailings",
    areaName: "barsAndRailingsAreaComment",
    deficienciesList: barsAndRailings,
    indexLocation: 3,
  },
  {
    title: "מערכת חשמל כללי",
    name: "electricalSystem",
    areaName: "electricalSystemAreaComment",
    deficienciesList: electricalSystem,
    indexLocation: 4,
  },
  {
    title: "נזילות מצנרת (מטבח, מקלחת וכו')",
    name: "pipingLeaks",
    areaName: "pipingLeaksAreaComment",
    deficienciesList: pipingLeaks,
    indexLocation: 5,
  },
  {
    title: "דלתות פנים",
    name: "insidesDoors",
    areaName: "insidesDoorsAreaComment",
    deficienciesList: doors,
    indexLocation: 6,
  },
  {
    title: "דלתות שירותים ומקלחת",
    name: "bathroomDoors",
    areaName: "bathroomDoorsAreaComment",
    deficienciesList: doors,
    indexLocation: 7,
  },
  {
    title: "חלונות",
    name: "windows",
    areaName: "windowsAreaComment",
    deficienciesList: windows,
    indexLocation: 8,
  },
  {
    title: "תריסים",
    name: "blinds",
    areaName: "blindsAreaComment",
    deficienciesList: blinds,
    indexLocation: 9,
  },
  {
    title: "מטבח (מצב כללי)",
    name: "kitchen",
    areaName: "kitchenAreaComment",
    deficienciesList: kitchen,
    indexLocation: 10,
  },
  {
    title: "שירותים (מצב כללי)",
    name: "toilet",
    areaName: "toiletAreaComment",
    deficienciesList: toilet,
    indexLocation: 11,
  },
  {
    title: "מקלחת (מצב כללי)",
    name: "shower",
    areaName: "showerAreaComment",
    deficienciesList: shower,
    indexLocation: 12,
  },
  {
    title: "מצב דירה כללי",
    name: "generalApartmentCondition",
    areaName: "generalApartmentConditionAreaComment",
    deficienciesList: generalApartmentCondition,
    indexLocation: 13,
  },
];

const isExistsItemsList: IAreaListItem[] = [
  {
    title: "חריגות בנייה (יש לפרט בהערות)",
    name: "constructionAnomalies",
    areaName: "constructionAnomalies",
  },
  {
    title: "סוג חימום מים נוסף",
    name: "othersHeatsWater",
    areaName: "othersHeatsWaterAreaComment",
  },
  {
    title: "אסבסט",
    name: "asbestos",
    areaName: "asbestosAreaComment",
  },
  {
    title: "גלאי עשן",
    name: "smokeDetector",
    areaName: "smokeDetectorAreaComment",
  },
  {
    title: "ממסר פחת (בדיקה פיזית בלוח)",
    name: "depreciationRelay",
    areaName: "depreciationRelayAreaComment",
  },
];

const securityRoom: ISelectListItem[] = [
  {
    label: "חדר ביטחוני",
    value: "Security room",
  },
  {
    label: `ממ"ד`,
    value: "dimension",
  },
  {
    label: `ממ"ק`,
    value: "Multi-storey dimension",
  },
  {
    label: "מקלט עילי לבניין",
    value: "Upper dimension for the building",
  },
  {
    label: "מקלט תת קרקעי לבניין",
    value: "Underground dimension for the building",
  },
  {
    label: "מקלט אזורי",
    value: "Area dimension",
  },
  {
    label: "מחסה בלבד - לא תקני",
    value: "Shelter only",
  },
];

const waterHeating: ISelectListItem[] = [
  {
    label: "חימום על גז",
    value: "Gas",
  },
  {
    label: "הסקה מרכזית",
    value: "Central heating",
  },
  {
    label: "דוד שמש מרכזי",
    value: "Central solar heater",
  },
  {
    label: "דוד שמש דירתי",
    value: "Apartment solar heater",
  },
  {
    label: "דוד חשמל",
    value: "Electric heater",
  },
  {
    label: "מכשיר אטמור",
    value: "Atmor device",
  },
  {
    label: "הסקה מרכזית ודוד שמש",
    value: "Central heating and solar heater",
  },
  {
    label: "הסקה מרכזית ודוד חשמלי",
    value: "Central heating and electric heater",
  },
];

const apartmentDetailsInputStyle: SxProps<Theme> = {
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "12px",
  },
};

const apartmentDetailsLabels: IApartmentDetailItem[] = [
  {
    label: "חימום מים",
    type: "select",
    values: {
      sx: { maxHeight: 44 },
      name: "waterHeating",
      list: waterHeating,
    },
    gridSize: 3,
  },
  {
    label: "חדר ביטחון",
    type: "select",
    values: {
      sx: { maxHeight: 44 },
      name: "securityRoom",
      list: securityRoom,
    },
    gridSize: 3,
  },
  {
    label: `תמ"א`,
    type: "select",
    values: {
      sx: { maxHeight: 44 },
      name: "tama",
      list: securityRoom,
    },
    gridSize: 3,
  },
  {
    label: "שימוש בפועל",
    type: "select",
    values: {
      sx: { maxHeight: 44 },
      name: "actualUse",
      list: securityRoom,
    },
    gridSize: 3,
  },
  {
    label: "שטח",
    type: "input",
    values: {
      isShowLabel: false,
      name: "area",
      readOnly: true,
      sx: apartmentDetailsInputStyle,
      variant: "outlined",
      value: 1,
    },
    gridSize: 2.4,
  },
  {
    label: "חדרים [1-9]",
    type: "input",
    values: {
      isShowLabel: false,
      readOnly: true,
      name: "rooms",
      sx: apartmentDetailsInputStyle,
      variant: "outlined",
      value: 1,
    },
    gridSize: 2.4,
  },
  {
    label: "חצאי חדרים [1-3]",
    type: "input",
    values: {
      isShowLabel: false,
      readOnly: true,
      name: "halfRooms",
      sx: apartmentDetailsInputStyle,
      variant: "outlined",
      value: 1,
    },
    gridSize: 2.4,
  },
  {
    label: "קומה [1-99]",
    type: "input",
    values: {
      isShowLabel: false,
      readOnly: true,
      name: "floor",
      sx: apartmentDetailsInputStyle,
      variant: "outlined",
      value: 1,
    },
    gridSize: 2.4,
  },
  {
    label: "מדרגות לדירה [1-120]",
    type: "input",
    values: {
      isShowLabel: false,
      readOnly: true,
      name: "stairs",
      sx: apartmentDetailsInputStyle,
      variant: "outlined",
      value: 1,
    },
    gridSize: 2.4,
  },
];

export {
  qualityRatingOptionsList,
  maintenanceQualityList,
  isExistsItemsList,
  apartmentDetailsLabels,
};
