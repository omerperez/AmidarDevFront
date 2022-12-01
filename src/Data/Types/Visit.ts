import {
  MaintenanceVisit,
  PaymentAccount,
  TenantsOccupancyDetails,
  VisitGeneralDetails,
} from "../Builders/Visit";
import { IVisitContext } from "../Interfaces/Visit";

type VisitAction =
  | {
      type: "initializationVisit";
      visitState: IVisitContext;
    }
  | {
      type: "setIdentifyingInformation";
      identifyingInformation: VisitGeneralDetails;
    }
  | {
      type: "setPaymentDetails";
      paymentDetails: PaymentAccount;
    }
  | { type: "setMaintenanceVisit"; maintenanceVisit: MaintenanceVisit }
  | { type: "setOccupancyVisit"; occupancyVisit: TenantsOccupancyDetails }
  | { type: "setFormsFiles"; formKey: any; value: boolean }
  | { type: "setImages"; images: any[] }
  | { type: "setActiveStep"; step: number };

type VisitContextType = {
  visitState: IVisitContext;
  initVisit: (visit: IVisitContext) => void;
  setIdentifyingInfo: (generalDetails: VisitGeneralDetails) => void;
  setPayment: (account: PaymentAccount) => void;
  setMaintenance: (maintenance: MaintenanceVisit) => void;
  setOccupancy: (occupancyDetails: TenantsOccupancyDetails) => void;
  setForms: (key: any, value: boolean) => void;
  setImages: (images: any[]) => void;
  setStep: (step: number) => void;
};

const heMonthArray = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

const kindOfFamilyRelationshipOptions = [
  "בן/בת זוג",
  "בן/בת",
  "הורה",
  "בן/בת משפחה אחר",
  "עובד/ת זר/ה",
  "נכד/ה",
  "ידוע/ה בציבור",
];

const maritalStatusOptions = [
  "נשוי/נשואה",
  "גורש/ה",
  "אלמן/אלמנה",
  "חד הורי",
  "רווק/ה",
];

export { heMonthArray, kindOfFamilyRelationshipOptions, maritalStatusOptions };
export type { VisitAction, VisitContextType };
