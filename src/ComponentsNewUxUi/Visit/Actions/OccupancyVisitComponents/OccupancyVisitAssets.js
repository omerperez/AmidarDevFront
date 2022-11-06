const nationalOutlinePlan = [
  { label: "ריצוף שבור", value: "ריצוף שבור" },
  { label: " ריצוף חסר", value: " ריצוף חסר" },
  { label: "ריצוף שקוע", value: "ריצוף שקוע" },
  { label: "בעיה בחיפוי במטבח", value: "בעיה בחיפוי במטבח" },
  { label: "בעיה בחיפוי במקלחת", value: "בעיה בחיפוי במקלחת" },
];

const changesInFamilyComposition = [
  { label: "בעיה בצילינדר", value: "בעיה בצילינדר" },
  { label: "בעיה באינסרט", value: "בעיה באינסרט" },
  { label: "בעיה במנעול", value: "בעיה במנעול" },
  { label: "בעיה בסגר ביטחון", value: "בעיה בסגר ביטחון" },
  { label: "בעיה בעינית", value: "בעיה בעינית" },
  { label: "בעיה בציפוי", value: "בעיה בציפוי" },
];

const isLiveAlone = [
  { label: "רטיבות בתקרה", value: "רטיבות בתקרה" },
  { label: "רטיבות בקיר", value: "רטיבות בקיר" },
];

const signedOnLiveAloneForm = [
  { label: "קיים ותקין", value: "קיים ותקין" },
  { label: "תקין ולא קיים", value: "תקין ולא קיים" },
  { label: "לא קיים", value: "לא קיים" },
];

const agreesToSmallApartment = [
  { label: "בעיה בלוח חשמל", value: "בעיה בלוח חשמל" },
  { label: "בעיה בחשמל הפנים", value: "בעיה בחשמל הפנים" },
];

const seniorCitizenPass = [
  { label: "בעיה בצנרת דלוחין", value: "בעיה בצנרת דלוחין" },
  { label: "בעיה בצנרת מים", value: "בעיה בצנרת מים" },
  { label: "בעיה בצנרת דוד", value: "בעיה בצנרת דוד" },
  { label: "בעיה בלחץ מים", value: "בעיה בלחץ מים" },
];

const languegeOfVisit = [
  { label: "דלת לא נסגרת", value: "דלת לא נסגרת" },
  { label: "דלת שבורה", value: "דלת שבורה" },
  { label: "אין דלת", value: "אין דלת" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
];

const isTranslatorPresent = [
  { label: "חלון חסר", value: "חלון חסר" },
  { label: "חלון שבור", value: "חלון שבור" },
  { label: "חלון לא נסגר", value: "חלון לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "חלון עץ", value: "חלון עץ" },
  { label: "זגוגית שבורה", value: "זגוגית שבורה" },
];

const roleOfTheTenantSigns = [
  { label: "חלון חסר", value: "חלון חסר" },
  { label: "חלון שבור", value: "חלון שבור" },
  { label: "חלון לא נסגר", value: "חלון לא נסגר" },
  { label: "משקוף לא תקין", value: "משקוף לא תקין" },
  { label: "חלון עץ", value: "חלון עץ" },
  { label: "זגוגית שבורה", value: "זגוגית שבורה" },
];

const occupancyInputsList = [
  {
    title: "החלה בנייה במסגרת תמ״א 38",
    name: "nationalOutlinePlan38",
    selectList: nationalOutlinePlan,
    indexLocation: 0,
  },
  {
    title: "שינויים בהרכב המשפחתי",
    name: "changesInFamilyComposition",
    selectList: changesInFamilyComposition,
    indexLocation: 1,
  },
  {
    title: "האם גר/ה בגפו/ה",
    name: "isLiveAlone",
    selectList: isLiveAlone,
    indexLocation: 2,
  },
  {
    title: "חתם על תצהיר גר בגפו",
    name: "isSignedOnLiveAloneForm",
    selectList: signedOnLiveAloneForm,
    indexLocation: 3,
  },
  {
    title: "הסכמה לעבור לדירה קטנה",
    name: "agreesToSmallApartment",
    selectList: agreesToSmallApartment,
    indexLocation: 4,
  },
  {
    title: "מעבר אזרח ותיק",
    name: "seniorCitizenPass",
    selectList: seniorCitizenPass,
    indexLocation: 5,
  },
  {
    title: "שפת הביקור",
    name: "languegeOfVisit",
    selectList: languegeOfVisit,
    indexLocation: 6,
  },
  {
    title: "נכח מתרגם",
    name: "isTranslatorPresent",
    selectList: isTranslatorPresent,
    indexLocation: 7,
  },
  {
    title: "מהות הדייר הנוכח בדירה",
    name: "roleOfTheTenantSigns",
    selectList: roleOfTheTenantSigns,
    indexLocation: 8,
  },
];

export { occupancyInputsList };
