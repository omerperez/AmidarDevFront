import {
  IApartmentDetailsFields,
  IAreaListItem,
  IListsOfSelect,
  IMaintenanceItem,
  IRatingOptionItem,
  ITableCodeItem
} from "../../Data/Interfaces/Visit";
import {
  areaValidation,
  floorsValidation,
  halfRoomsValidation,
  roomsValidation,
  stairsValidation
} from "../../Services/Validation/VisitValidation";
import {
  DEFECTIONS_TITLES,
  ERRORS,
  QUALITY_TITLES
} from "../Constants/VisitConstants";

const qualityRatingOptionsList: IRatingOptionItem[] = [
  {
    label: QUALITY_TITLES[5],
    value: 5,
    textActive: "text-label-white",
  },
  {
    label: QUALITY_TITLES[4],
    value: 4,
    textActive: "text-label-black",
  },
  {
    label: QUALITY_TITLES[3],
    value: 3,
    textActive: "text-label-black",
  },
  {
    label: QUALITY_TITLES[2],
    value: 2,
    textActive: "text-label-white",
  },
  {
    label: QUALITY_TITLES[1],
    value: 1,
    textActive: "text-label-white",
  },
];

const flooring: string[] = [
  "ריצוף שבור",
  "ריצוף חסר",
  "ריצוף שקוע",
  "בעיה בחיפוי במטבח",
  "בעיה בחיפוי במקלחת",
];

const enteryDoor: string[] = [
  "בעיה בצילינדר",
  "בעיה באינסרט",
  "בעיה במנעול",
  "בעיה בסגר ביטחון",
  "בעיה בעינית",
  "בעיה בציפוי",
];

const caulking: string[] = ["רטיבות בתקרה", "רטיבות בקיר"];

const barsAndRailings: string[] = ["קיים ותקין", "תקין ולא קיים", "לא קיים"];

const electricalSystem: string[] = ["בעיה בלוח חשמל", "בעיה בחשמל הפנים"];

const pipingLeaks: string[] = [
  "בעיה בצנרת דלוחין",
  "בעיה בצנרת מים",
  "בעיה בצנרת דוד",
  "בעיה בלחץ מים",
];

const doors: string[] = [
  "דלת לא נסגרת",
  "דלת שבורה",
  "אין דלת",
  "משקוף לא תקין",
];

const windows: string[] = [
  "חלון חסר",
  "חלון שבור",
  "חלון לא נסגר",
  "משקוף לא תקין",
  "חלון עץ",
  "זגוגית שבורה",
];

const blinds: string[] = [
  "תריס חסר",
  "תריס שבור",
  "תריס לא נסגר",
  "משקוף לא תקין",
  "תריס מעץ",
  "שלבים חסרים",
];

const kitchen: string[] = [
  "ישן",
  "שיש שבור",
  "ברז לא תקין",
  "כיור סדוק / שבור",
  "קיימת רטיבות",
  "קיימת סתימה",
];

const toilet: string[] = [
  "אסלה שבורה",
  "ניאגרה תקולה",
  "ברז לא תקין",
  "כיור סדוק / שבור",
  "קיימת רטיבות",
  "קיימת סתימה",
  "חסרה ידית אחיזה",
];

const shower: string[] = [
  "ברז לא תקין",
  "אינטרפוץ לא תקין",
  "קיימת רטיבות",
  "קיימת סתימה",
  "חסרה ידית אחיזה",
];

const generalApartmentCondition: string[] = [
  "לא ראויה למגורים",
  "נדרש שיפוץ כולל",
  "נדרש שיפוץ מקלחת",
  "נדרש שיפוץ מטבח",
];

const maintenanceQualityList: IMaintenanceItem[] = [
  {
    label: "ריצוף וחיפוי",
    name: "flooring",
    areaName: "flooringAreaComment",
    deficienciesList: flooring,
    indexLocation: 0,
  },
  {
    label: "ריצוף וחיפוי",
    name: "flooring",
    areaName: "flooringAreaComment",
    deficienciesList: flooring,
    indexLocation: 0,
  },
  {
    label: "דלת כניסה",
    name: "enteryDoor",
    areaName: "enteryDoorAreaComment",
    deficienciesList: enteryDoor,
    indexLocation: 1,
  },
  {
    label: DEFECTIONS_TITLES.CAULKING_AREA,
    name: "caulking",
    areaName: "caulkingAreaComment",
    deficienciesList: caulking,
    indexLocation: 2,
  },
  {
    label: DEFECTIONS_TITLES.BAR_AND_RAILINGS,
    name: "barsAndRailings",
    areaName: "barsAndRailingsAreaComment",
    deficienciesList: barsAndRailings,
    indexLocation: 3,
  },
  {
    label: DEFECTIONS_TITLES.ELECTRICAL_SYSTEM,
    name: "electricalSystem",
    areaName: "electricalSystemAreaComment",
    deficienciesList: electricalSystem,
    indexLocation: 4,
  },
  {
    label: DEFECTIONS_TITLES.PIPING_LEAKS,
    name: "pipingLeaks",
    areaName: "pipingLeaksAreaComment",
    deficienciesList: pipingLeaks,
    indexLocation: 5,
  },
  {
    label: DEFECTIONS_TITLES.INSIDES_DOORS,
    name: "insidesDoors",
    areaName: "insidesDoorsAreaComment",
    deficienciesList: doors,
    indexLocation: 6,
  },
  {
    label: DEFECTIONS_TITLES.BATHROOM_DOORS,
    name: "bathroomDoors",
    areaName: "bathroomDoorsAreaComment",
    deficienciesList: doors,
    indexLocation: 7,
  },
  {
    label: DEFECTIONS_TITLES.WINDOWS,
    name: "windows",
    areaName: "windowsAreaComment",
    deficienciesList: windows,
    indexLocation: 8,
  },
  {
    label: DEFECTIONS_TITLES.BLINDS,
    name: "blinds",
    areaName: "blindsAreaComment",
    deficienciesList: blinds,
    indexLocation: 9,
  },
  {
    label: DEFECTIONS_TITLES.KITCHEN,
    name: "kitchen",
    areaName: "kitchenAreaComment",
    deficienciesList: kitchen,
    indexLocation: 10,
  },
  {
    label: DEFECTIONS_TITLES.TOILET,
    name: "toilet",
    areaName: "toiletAreaComment",
    deficienciesList: toilet,
    indexLocation: 11,
  },
  {
    label: DEFECTIONS_TITLES.SHOWER,
    name: "shower",
    areaName: "showerAreaComment",
    deficienciesList: shower,
    indexLocation: 12,
  },
  {
    label: DEFECTIONS_TITLES.GENERAL_APARTMENT_CONDITION,
    name: "generalApartmentCondition",
    areaName: "generalApartmentConditionAreaComment",
    deficienciesList: generalApartmentCondition,
    indexLocation: 13,
  },
];

const isExistsItemsList: IAreaListItem[] = [
  {
    label: DEFECTIONS_TITLES.CONSTRUCTION_ANOMALIES,
    name: "constructionAnomalies",
    areaName: "constructionAnomalies",
    indexLocation: 0,
  },
  {
    label: DEFECTIONS_TITLES.OTHERS_HEATS_WATER_TYPE,
    name: "othersHeatsWaterType",
    areaName: "othersHeatsWaterAreaComment",
    indexLocation: 1,
  },
  {
    label: DEFECTIONS_TITLES.ASBESTOS,
    name: "asbestos",
    areaName: "asbestosAreaComment",
    indexLocation: 2,
  },
  {
    label: DEFECTIONS_TITLES.SMOKE_DETECTOR,
    name: "smokeDetector",
    areaName: "smokeDetectorAreaComment",
    indexLocation: 3,
  },
  {
    label: DEFECTIONS_TITLES.DEPRECIATION_RELAY,
    name: "depreciationRelay",
    areaName: "depreciationRelayAreaComment",
    indexLocation: 4,
  },
];

const isTama: ITableCodeItem[] = [
  {
    TABLENAME: "isTama",
    FILTER1: "",
    FIELD1: "1",
    FIELD2: "החלה בנייה"
  },
  {
    TABLENAME: "isTama",
    FILTER1: "",
    FIELD1: "0",
    FIELD2: "עדיין לא החלה בנייה"
  },
];

const selectGrid = 3;
const inputGrid = 2.4;

const apartmentDetailsFields: IApartmentDetailsFields[] = [
  {
    label: "חימום מים",
    name: "waterHeating",
    type: "select",
    gridSize: selectGrid,
  },
  {
    label: "חדר ביטחון",
    name: "securityRoom",
    type: "select",
    gridSize: selectGrid,
  },
  {
    label: `תמ"א`,
    name: "isTama",
    type: "select",
    gridSize: selectGrid,
  },
  {
    label: "שימוש בפועל",
    name: "actualUse",
    type: "select",
    gridSize: selectGrid,
  },
  {
    label: "שטח",
    name: "area",
    type: "number",
    gridSize: inputGrid,
    validation: {
      function: areaValidation,
      errorComment: ERRORS.AREA,
    },
  },
  {
    label: "חדרים [1-9]",
    name: "rooms",
    type: "number",
    gridSize: inputGrid,
    validation: {
      function: roomsValidation,
      errorComment: ERRORS.ROOM,
    },
  },
  {
    label: "חצאי חדרים [1-3]",
    name: "halfRooms",
    type: "number",
    gridSize: inputGrid,
    validation: {
      function: halfRoomsValidation,
      errorComment: ERRORS.ROOM,
    },
  },
  {
    label: "קומה [1-99]",
    name: "floor",
    type: "number",
    gridSize: inputGrid,
    validation: {
      function: floorsValidation,
      errorComment: ERRORS.FLOOR,
    },
  },
  {
    label: "מדרגות לדירה [1-120]",
    name: "stairs",
    type: "number",
    gridSize: inputGrid,
    validation: {
      function: stairsValidation,
      errorComment: ERRORS.STAIRS,
    },
  },
];

const selectsLists: IListsOfSelect = {
  EMGVIA: "collectionMeans",
  BITACHON: "securityRoom",
  CHIMUM: "waterHeating",
  SHIMUSH: "actualUse",
  KIDOMET: "mobile",
  RECHOV: "streets",
  SAFOT: "language",
};

const INismachKeys = [
  "id",
  "firstName",
  "lastName",
  "birthdate",
  "kindOfFamilyRelationship",
  "maritalStatus",
  "disabilityPercentage",
  "disabilityStartDate",
  "disabilityEndDate",
  "militaryServiceStartDate",
  "militaryServiceEndDate",
];

export {
  qualityRatingOptionsList,
  maintenanceQualityList,
  isExistsItemsList,
  apartmentDetailsFields,
  selectsLists,
  INismachKeys,
  isTama
};
