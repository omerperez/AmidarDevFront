import { Summary } from "../../Data/Builders/Visit";

interface ISummaryFields {
  label: string;
  name: keyof Summary;
  gridSize: number;
  type: "select" | "input" | "textArea";
  list?: string;
}

const basicList = [
  {
    label: "כן",
    value: "1",
  },
  {
    label: "לא",
    value: "0",
  },
];

const tenantEssence = [
  {
    label: "דייר חוזי",
    value: "1",
  },
  {
    label: "בן משפחה",
    value: "2",
  },
  {
    label: "פולש",
    value: "3",
  },
  {
    label: "אפוטרופוס",
    value: "4",
  },
  {
    label: "נסמך בוגר",
    value: "5",
  },
];

const summaryFields: ISummaryFields[] = [
  {
    label: "שינויים בהרכב המשפחה",
    name: "familyTenantsChanges",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "האם גר/ה בגפו/ה",
    name: "isLiveAlone",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "חתם על תצהיר גר בגפו",
    name: "isSignLiveAlone",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "הסכמה לעבור לדירה קטנה",
    name: "isAgreeSmallApartment",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "מעבר אזרח ותיק",
    name: "isTransitionalOldTenant",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "שם הדייר החותם",
    name: "signsTenantName",
    type: "input",
    gridSize: 2.4,
  },
  {
    label: "מהות הדייר הנוכח בדירה",
    name: "signsTenantEssence",
    type: "select",
    gridSize: 2.4,
    list: "tenantEssence",
  },
  {
    label: "שפת הביקור",
    name: "visitLanguage",
    type: "select",
    gridSize: 2.4,
    list: "language",
  },
  {
    label: "נכח מתרגם",
    name: "isTranslatorPresent",
    type: "select",
    gridSize: 2.4,
  },
  {
    label: "תעודת זהות מתרגם",
    name: "translatorId",
    type: "input",
    gridSize: 2.4,
  },
  {
    label: "הערות לביקור",
    name: "comments",
    type: "textArea",
    gridSize: 12,
  },
];

const ApartmentDetailsColumns = [
  "רחוב",
  "מס' בית",
  "ישוב",
  "מיקוד",
  "קומה",
  "שטח",
  "מדרגות לדירה",
  "מספר חדרים",
  "חצאי חדרים",
  "דירה",
  "כניסה",
  "מבנה",
  "שיכון",
  "סניף",
  "חטיבה",
];

const ApartmentDetailsDemoValues = [
  "השומרון",
  "9",
  "חולון",
  "5826513",
  "1",
  "66.80",
  "4",
  "2",
  " ",
  "003",
  "נ",
  "0053",
  "2040",
  "60",
  "7",
];

const OccupancyDetailsColumns = [
  "מצב אכלוס",
  "סטטוס חוזה",
  "תאריך אכלוס",
  "שימוש בפועל",
  "הגבלת שכירות",
  "מספר נפשות",
  "מספר ילדים",
  "טלפון בבית",
  "טלפון נייד",
  "דואר אלקטרוני",
  "שפת ביקור",
  "גר/ה בגפו/ה",
];

const OccupancyDetailsDemoValues = [
  "שכירות",
  "פעיל",
  "04/11/2020",
  "מגורים",
  " ",
  "2",
  " ",
  "-",
  "052-2520484",
  " ",
  "עברית",
  " ",
];

const TenantsDetailsColumns = [`ת"ז`, "שם", "תאריך לידה", "מצב משפחתי", "מין"];

const TenantsDetailsDemoValues = [
  `209543214`,
  "עומר פרץ",
  "20/01/1998",
  "רווק",
  "ז",
];

const PaymentDetailsColumns = [
  "מס' חשבון",
  "אמצעי תשלום",
  `שכ"ד ברוטו`,
  `שכ"ד נטו`,
  "הנחת מדרוג",
  "מועד סיום הנחה",
  `סה"כ גובה חוב`,
  "חוב בהסדר",
  "חוב בתביעה",
  "עומק פיגור",
];

const PaymentDetailsDemoValues = [
  "462957",
  "הוראת קבע",
  `2,538.96`,
  `244.56`,
  "מדרוג",
  "31/08/2022",
  "0",
  "0.00",
  " ",
  "0",
];

const maintenanceLabel = {
  firstPart: [
    "ריצוף וחיפוי",
    "דלת כניסה",
    "ליקוי איטום-רטיבות",
    "מעקות וסורגים",
    "מערכת חשמל כללי",
    "נזילות מצנרת",
    "דלתות פנים",
  ],
  secondPart: [
    "דלתות שירותים ומקלחת",
    "חלונות",
    "תריסים",
    "מטבח - מצב כללי",
    "שירותים - מצב כללי",
    "מקלחת - מצב כללי",
    "מצב דירה כללי",
  ],
  otherFirstPart: ["חריגות בנייה", "ממסר פחת"],
  otherSecondPart: ["אסבסט", "גלאי עשן"],
};

const otherMaintenanceIssueList = [
  {
    title: "חריגות בנייה",
    name: "constructionAnomalies",
    areaName: "constructionAnomalies",
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
    title: "ממסר פחת",
    name: "depreciationRelay",
    areaName: "depreciationRelayAreaComment",
  },
];

export {
  ApartmentDetailsColumns,
  ApartmentDetailsDemoValues,
  OccupancyDetailsColumns,
  OccupancyDetailsDemoValues,
  TenantsDetailsColumns,
  TenantsDetailsDemoValues,
  PaymentDetailsColumns,
  PaymentDetailsDemoValues,
  otherMaintenanceIssueList,
  maintenanceLabel,
  summaryFields,
  basicList,
  tenantEssence
};
