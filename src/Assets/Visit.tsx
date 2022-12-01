import {
  AttachFile,
  Badge,
  CreditCard,
  Engineering,
  PanoramaPhotosphereSelect,
  PeopleAlt,
  WhereToVote,
} from "@mui/icons-material";
import LiveAlone from "../Components/Visit/Forms/LiveAlone";
import MainTenant from "../Components/Visit/Forms/MainTenant";
import {
  IApartmentidentifyingInformationInputs,
  IContactInformation,
  IForm,
  IPaymentAccount,
  IStepperProperties,
} from "../Data/Interfaces/Visit";
import { isIdPropper } from "../Features/FormatsFunctions";
import "../Layouts/Style/CSS/Visit.css";
import { StepperBtn, StepperMui } from "../Layouts/Style/MUI/VisitStyle";
import { validationService } from "../Services/Validation/GlobalValidations";
import {
  homePhoneNumberValidation,
  mobileOrHomePhoneValidation,
  mobileValidation,
} from "../Services/Validation/VisitValidation";
import { ERRORS, STEPS, TITLES } from "./Constants/VisitConstants";

const gridStepBtnSize: number = 1;
const gridStepEmptySpaceSize: number = 0.25;
const advanceSearchGridSpacing = { xs: 2, md: 3 };
const advanceSearchGridColumns = { xs: 12, sm: 8, md: 12 };

const htmlForms = [
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
];

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

const formsOptions: IForm[] = [
  {
    title: "גר בגפו",
    formName: "liveAlone",
  },
  {
    title: "הצהרת דייר ראשי",
    formName: "mainTenants",
  },
  {
    title: "הצהרת בן/בת זוג",
    formName: "partner",
  },
  {
    title: "הרשאה לחיוב חשבון",
    formName: "bankDebitAccount",
  },
  {
    title: "הסדר חוב",
    formName: "debtSettlement",
  },
  {
    title: "שכירות מעבר",
    formName: "transitionalRent",
  },
  {
    title: "מבנה טרומי",
    formName: "prefabricatedStructure",
  },
];

const accountStatusProperties: IPaymentAccount[] = [
  {
    label: "מספר חשבון",
    name: "accountNumber",
    flag: false,
  },
  {
    label: "שם הלקוח",
    name: "accountFullName",
    flag: false,
  },
  {
    label: "שכ״ד נטו",
    name: "netRent",
    flag: true,
    gridExtra: 6,
  },
  {
    label: "ברוטו",
    name: "grossRent",
    flag: false,
  },
  {
    label: "סוג שכ״ד",
    name: "rentType",
    flag: false,
  },
  {
    label: "סוג הנחה ראשי",
    name: "discountType",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "תאריך סיום",
    name: "finishDate",
    flag: false,
  },
  {
    label: "אמצעי גביה",
    name: "collectionMeans",
    flag: false,
  },
  {
    label: "סה״כ חוב",
    name: "debt",
    flag: true,
    gridExtra: 3,
  },
  {
    label: "יתרת חוב בהסדר",
    name: "balaceDebt",
    flag: false,
  },
  {
    label: "חוב בתביעה",
    name: "lawsuitDebt",
    flag: false,
  },
];

const identifyingInformationInputs: IApartmentidentifyingInformationInputs[] = [
  {
    label: "שם מלא",
    name: "fullName",
    md: 3,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "תעודת זיהוי",
    name: "tenantId",
    md: 7.5,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "רחוב",
    name: "street",
    md: 3,
    variant: "filled",
    isEdit: true,
    readOnly: true,
    validation: {
      function: validationService.isHebrewLettersOnly.function,
      errorComment: ERRORS.HEBREW,
    },
  },
  {
    label: "בית",
    name: "number",
    md: 3,
    variant: "filled",
    isEdit: true,
    readOnly: true,
    type: "number",
  },
  {
    label: "יישוב",
    name: "city",
    md: 3,
    variant: "filled",
    isEdit: false,
    readOnly: true,
  },
  {
    label: "מיקוד",
    name: "passcode",
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
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "תאריך אכלוס",
    name: "occupancyDate",
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ביקור אחרון",
    name: "lastVisitDate",
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "מספר נפשות",
    name: "totalTenantsCount",
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ילדים עד גיל 21",
    name: "kidsUnder21",
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "סטטוס חוזה",
    name: "contractStatus",
    md: 2,
    variant: "filled",
    readOnly: true,
  },
];

const editContactInfoLabels: IContactInformation[] = [
  {
    label: "נייד מוביל",
    name: "mainPhoneNumber",
    type: "mobile",
    validation: {
      function: mobileValidation,
      errorComment: validationService.isMobileNumberProper.errorComment,
    },
  },
  {
    label: "טלפון דירה",
    name: "apartmentPhoneNumber",
    type: "mobile",
    validation: {
      function: homePhoneNumberValidation,
      errorComment: validationService.isHomePhoneNumberProper.errorComment,
    },
  },
  {
    label: "טלפון עבודה",
    name: "workPhoneNumber",
    gridSize: 2,
    type: "mobile",
    validation: {
      function: homePhoneNumberValidation,
      errorComment: validationService.isHomePhoneNumberProper.errorComment,
    },
  },
  {
    label: `דוא"ל`,
    name: "email",
    type: "email",
    validation: {
      function: validationService.isEmailAddressProper.function,
      errorComment: validationService.isEmailAddressProper.errorComment,
    },
  },
  {
    label: "שם איש קשר 1",
    name: "firstContactName",
    validation: {
      function: validationService.isHebrewLettersOnly.function,
      errorComment: ERRORS.HEBREW,
    },
  },
  {
    label: "מספר איש קשר 1",
    name: "firstContactPhoneNumber",
    type: "mobile",
    validation: {
      function: mobileOrHomePhoneValidation,
      errorComment: validationService.isHomePhoneNumberProper.errorComment,
    },
  },
  {
    label: "שם איש קשר 2",
    name: "secondContactName",
    validation: {
      function: validationService.isHebrewLettersOnly.function,
      errorComment: ERRORS.HEBREW,
    },
  },
  {
    label: "מספר איש קשר 2",
    name: "secondContactPhoneNumber",
    type: "mobile",
    validation: {
      function: mobileOrHomePhoneValidation,
      errorComment: validationService.isHomePhoneNumberProper.errorComment,
    },
  },
  {
    label: TITLES.OTHER_CONTACT_DETAILS,
    name: "otherContactDetailsComment",
    gridSize: 9,
  },
];

const contactInfoLabels: IContactInformation[] = [
  {
    label: "נייד מוביל",
    name: "mainPhoneNumber",
  },
  {
    label: "טלפון דירה",
    name: "apartmentPhoneNumber",
  },
  {
    label: "טלפון עבודה",
    name: "workPhoneNumber",
    gridSize: 2,
  },
  {
    label: `דוא"ל`,
    name: "email",
  },
  {
    isDynamicLabel: true,
    label: "firstContactName",
    name: "firstContactPhoneNumber",
    defLabel: "איש קשר נוסף",
  },
  {
    isDynamicLabel: true,
    label: "secondContactName",
    name: "secondContactPhoneNumber",
    defLabel: "איש קשר נוסף 2",
  },
  {
    label: TITLES.OTHER_CONTACT_DETAILS,
    name: "otherContactDetailsComment",
    gridSize: 9,
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
  htmlForms,
  diaryVisitMenu,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  actionsOptions,
  accountStatusProperties,
  formsOptions,
  identifyingInformationInputs,
  occupancyInformationLabels,
  contactInfoLabels,
  StepperProperties,
  editContactInfoLabels,
};
