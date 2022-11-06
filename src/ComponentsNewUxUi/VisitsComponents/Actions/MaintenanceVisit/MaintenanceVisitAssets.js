const flooring = [
  { label: "ריצוף שבור", value: "ריצוף שבור" },
  { label: " ריצוף חסר", value: " ריצוף חסר" },
  { label: "ריצוף שקוע", value: "ריצוף שקוע" },
  { label: "בעיה בחיפוי במטבח", value: "בעיה בחיפוי במטבח" },
  { label: "בעיה בחיפוי במקלחת", value: "בעיה בחיפוי במקלחת" },
];

const enteryDoor = [
  { label: "בעיה בצילינדר", value: "בעיה בצילינדר" },
  { label: "בעיה באינסרט", value: "בעיה באינסרט" },
  { label: "בעיה במנעול", value: "בעיה במנעול" },
  { label: "בעיה בסגר ביטחון", value: "בעיה בסגר ביטחון" },
  { label: "בעיה בעינית", value: "בעיה בעינית" },
  { label: "בעיה בציפוי", value: "בעיה בציפוי" },
];

const caulking = [
  { label: "רטיבות בתקרה", value: "רטיבות בתקרה" },
  { label: "רטיבות בקיר", value: "רטיבות בקיר" },
];

const barsAndRailings = [
  { label: "קיים ותקין", value: "קיים ותקין" },
  { label: "תקין ולא קיים", value: "תקין ולא קיים" },
  { label: "לא קיים", value: "לא קיים" },
];

const electricalSystem = [
  { label: "בעיה בלוח חשמל", value: "בעיה בלוח חשמל" },
  { label: "בעיה בחשמל הפנים", value: "בעיה בחשמל הפנים" },
];

const pipingLeaks = [
  { label: "בעיה בצנרת דלוחין", value: "בעיה בצנרת דלוחין" },
  { label: "בעיה בצנרת מים", value: "בעיה בצנרת מים" },
  { label: "בעיה בצנרת דוד", value: "בעיה בצנרת דוד" },
  { label: "בעיה בלחץ מים", value: "בעיה בלחץ מים" },
];

const doors = [
  { label: "דלת לא נסגרת", value: "דלת לא נסגרת" },
  { label: "דלת שבורה", value: "דלת שבורה" },
  { label: "אין דלת", value: "אין דלת" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
];

const windows = [
  { label: "חלון חסר", value: "חלון חסר" },
  { label: "חלון שבור", value: "חלון שבור" },
  { label: "חלון לא נסגר", value: "חלון לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "חלון עץ", value: "חלון עץ" },
  { label: "זגוגית שבורה", value: "זגוגית שבורה" },
];

const blinds = [
  { label: "תריס חסר", value: "תריס חסר" },
  { label: "תריס שבור", value: "תריס שבור" },
  { label: "תריס לא נסגר", value: "תריס לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "תריס מעץ", value: "תריס מעץ" },
  { label: "שלבים חסרים", value: "שלבים חסרים" },
];

const kitchen = [
  { label: "ישן", value: "ישן" },
  { label: "שיש שבור", value: "שיש שבור" },
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "כיור סדוק / שבור", value: "כיור סדוק / שבור" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
];

const toilet = [
  { label: "אסלה שבורה", value: "אסלה שבורה" },
  { label: "ניאגרה תקולה", value: "ניאגרה תקולה" },
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "כיור סדוק / שבור", value: "כיור סדוק / שבור" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
  { label: "חסרה ידית אחיזה", value: "חסרה ידית אחיזה" },
];

const shower = [
  { label: "ברז לא תקין", value: "ברז לא תקין" },
  { label: "אינטרפוץ לא תקין", value: "אינטרפוץ לא תקין" },
  { label: "קיימת רטיבות", value: "קיימת רטיבות" },
  { label: "קיימת סתימה", value: "קיימת סתימה" },
  { label: "חסרה ידית אחיזה", value: "חסרה ידית אחיזה" },
];

const generalApartmentCondition = [
  { label: "לא ראויה למגורים", value: "לא ראויה למגורים" },
  { label: "נדרש שיפוץ כולל", value: "נדרש שיפוץ כולל" },
  { label: "נדרש שיפוץ מקלחת", value: "נדרש שיפוץ מקלחת" },
  { label: "נדרש שיפוץ מטבח", value: "נדרש שיפוץ מטבח" },
];

const itemsStatusOptions = [
  { label: "יש", value: "yes" },
  { label: "אין", value: "no" },
];

const qualityRating = [
  { label: "תקין", value: "5" },
  { label: "תקין, אך ישן", value: "4" },
  { label: "תקין, נדרש טיפול נקודתי", value: "3" },
  { label: "לא תקין, נדרש תיקון מקיף", value: "2" },
  { label: "לא ראוי למגורים", value: "1" },
];

const securityRoom = [
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

const waterHeating = [
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

const maintenanceQualityList = [
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

const otherIssuesList = [
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

export {
  otherIssuesList,
  waterHeating,
  qualityRating,
  securityRoom,
  maintenanceQualityList,
  itemsStatusOptions,
};
