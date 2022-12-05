import { SxProps, Theme } from "@mui/material";
import {
  ApartmentDetails, FormStatus,
  MaintenanceVisit, OtherMaintenanceVisit, PaymentAccount,
  Summary,
  TenantsOccupancyDetails,
  VisitGeneralDetails
} from "../Builders/Visit";
import { variant } from "../Types/MuiTypes";

interface ILabel {
  label: string;
  name: string;
}

interface ICardFields extends ILabel {
  gridSize: number;
  editGridSize: number;
  isEdit: boolean;
  type: "autocomplete" | "number" | "text";
  validation?: {
    function: (name: string) => boolean;
    errorComment: string;
  }
}

interface IContactFields extends ILabel {
  gridSize: number;
  isDynamic: boolean;
  defaultLabel?: string;
}

interface IEditContact extends ILabel {
  type: "text" | "number" | "mobile" | "email" | "textarea";
  gridSize: number;
  validation?: {
    function: (name: string) => boolean;
    errorComment: string;
  }
}

interface IAccountFields extends ILabel {
  gridSize: number;
}

interface IApartmentDetailsFields {
  label: string;
  name: keyof ApartmentDetails;
  type: "select" | "number";
  gridSize: number;
  validation?: {
    function: (value: number) => boolean;
    errorComment: string;
  }
}

interface IMaintenanceItem {
  label: string;
  name: keyof MaintenanceVisit;
  areaName: string;
  deficienciesList: string[];
  indexLocation: number;
}

interface IAreaListItem {
  label: string;
  name: keyof OtherMaintenanceVisit;
  areaName: string;
  indexLocation: number;
}

interface IRatingOptionItem {
  label: string;
  value: number;
  textActive: string;
}

interface ITenantInfoFields {
  label: string;
  name: keyof ITenant;
  isShowOnlyInEdit: boolean;
  validation?: {
    function: (value: string) => boolean;
    errorComment: any;
  }
}

interface IValidation {
  function: (value: any) => Boolean;
  errorComment: string;
}

interface IForm {
  title: string;
  name: keyof FormStatus;
}

interface IPhoto {
  base64: string;
  png: string;
}

interface ISelectListItem {
  label: string;
  value: string;
}

interface IStepperProperties {
  steps: string[];
  muiStyle: {
    sx: SxProps<Theme>;
    sxBtn: SxProps<Theme>;
  };
  btnGridSize: number;
  emptyGridSize: number;
}

interface IRating {
  target: {
    value?: number;
    name?: string;
  };
}

interface IListsOfSelect {
  EMGVIA: string;
  BITACHON: string;
  CHIMUM: string;
  SHIMUSH: string;
  KIDOMET: string;
  RECHOV: string;
}

interface IMainTenantTableDetails {
  V_YOMAN_BIKUR_TARICH_BIKUR_0: string;
  V_YOMAN_BIKUR_SHIKUN_0: string;
  V_YOMAN_BIKUR_SHEM_RECHOV_0: string;
  V_YOMAN_BIKUR_SHEM_ISHUV_0: string;
  V_YOMAN_BIKUR_SHEM_0: string;
  V_YOMAN_BIKUR_SHAAT_BIKUR_0: string;
  V_YOMAN_BIKUR_MIVNE_0: string;
  V_YOMAN_BIKUR_MIS_ZIHUY_0: string;
  V_YOMAN_BIKUR_MIS_BAIT_0: string;
  V_YOMAN_BIKUR_KOMA_0: string;
  V_YOMAN_BIKUR_KNISA_0: string;
  V_YOMAN_BIKUR_DIRA_0: string;
  V_YOMAN_BIKUR_BIKUR_ACHARON_0: string;
  GREEN: string;
  PINK: string;
}

interface IApartmentGeneralDetails {
  CICL1_SCR_KOD_SHIMUSH_BF_0: string;
  CICL1_SCR_MIS_NEFASHOT_0: string;
  CICL1_SCR_MIS_YELADIM_AD21_0: string;
  CICL1_SCR_SHETACH_0: string;
  CICL1_SCR_TAR_TCHILAT_MATZAV_0: Date;
  CICL1_SCR_TEUR_MATZAV_0: string;
  CICL_MIS_ZIHUY_0: string;
  CICL_SCR_SHEM_MISHPACHA_0: string;
  CICL_SCR_SHEM_PRATI_0: string;
  DIRAT_AMID_MIS_MADREGOT_0: string;
  KOD_ISHUV: string;
  KOMA: string;
  MIKUD: string;
  MIS_BAIT: string;
  MIS_CHADARIM_KOLEL: string;
  MIS_CHATZAIIM_MAKOR: string;
  MIS_RECHOV: string;
  SHEM_ISHUV: string;
  SHEM_RECHOV: string;
  TAR_BIKUR_ACHARON: Date;
}

interface IDefect {
  rate: number;
  defectDescription?: string;
}

interface IOtherDefect {
  rate: Boolean;
  defectDescription?: string;
}

interface ITenant {
  id: string;
  newId?: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender?: "זכר" | "נקבה" | "-";
  birthdate: string;
  maritalStatus: string;
}

interface INismach {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  birthdate: string | null;
  kindOfFamilyRelationship?: string | null;
  maritalStatus: string | null;
  disabilityPercentage?: number | null;
  disabilityStartDate?: string | null;
  disabilityEndDate?: string | null;
  militaryServiceStartDate?: string | null;
  militaryServiceEndDate?: string | null;
}

interface IVisitState {
  identifyingInformation: VisitGeneralDetails;
  paymentDetails: PaymentAccount;
  maintenanceVisit: MaintenanceVisit;
  occupancyVisit: TenantsOccupancyDetails;
  images: IPhoto[];
  formsFiles: FormStatus;
  summary: Summary;
  tableCode: Map<string, ITableCodeItem[]>;
}

interface IListsOfSelect {
  EMGVIA: string;
  BITACHON: string;
  CHIMUM: string;
  SHIMUSH: string;
  KIDOMET: string;
  RECHOV: string;
  SAFOT: string;
}

interface IVisitContext extends IVisitState {
  activeStep: number;
}

interface VisitProviderProps {
  children: JSX.Element;
}

interface ITableCodeItem {
  TABLENAME: string;
  FILTER1: string;
  FIELD1: string;
  FIELD2: string;
}

interface IApartmentVisitResponse {
  CHIMUMMAYIM:
  | "חימום על גז"
  | "הסקה מרכזית"
  | "דוד שמש מרכזי"
  | "דוד שמש דירתי"
  | "דוד חשמל"
  | "מכשיר אטמור"
  | "הסקה מרכזית ודוד חשמל"
  | "לא ניתן להתקין דוד שמש (סופית)"
  | "לא ניתן להתקין דוד שמש (זמנית)"
  | "הסקה מרכזית ודוד שמש";

  CHADARBITACHON:
  | "חדר בטחוני"
  | "תוספת"
  | 'ממ"ד'
  | 'ממ"ק'
  | "מקלט עילי לבניין"
  | "מקלט תת קרקעי לבניין"
  | "מקלט אזורי"
  | "מחסה בלבד - לא תקני";

  SHETACH: number;
  CHADARIM: number;
  CATZAEICHADARIM: number;
  MADREGOT: number;
  TAR_BIKUR: string;
  MIS_DIRA: string;
  TZIYUNRITZUF: number;
  HEAROTRITZUF: string;
  TZIYUNKNISA: number;
  HEAROTKNISA: string;
  TZIYUNITUM: number;
  HEAROTITUM: string;
  TZIYUNSORAGIM: number;
  HEAROTSORAGIM: string;
  TZIYUNHASHMAL: number;
  HEAROTHASHMAL: string;
  TZIYUNNEZILOT: number;
  HEAROTNEZILOT: string;
  TZIYUNPNIM: number;
  HEAROTPNIM: string;
  TZIYUNDLATOT: number;
  HEAROTDLATOT: string;
  TZIYUNCHALONOT: number;
  HEAROTCHALONOT: string;
  TZIYUNTRISIM: number;
  HEAROTTRISIM: string;
  TZIYUNMITBACH: number;
  HEAROTMITBACH: string;
  TZIYUNSHERUTIM: number;
  HEAROTSHERUTIM: string;
  TZIYUNMIKLACHAT: number;
  HEAROTMIKLACHAT: string;
  TZIYUNKLALI: number;
  HEAROTKLALI: string;
  TZIYUNPCHAT: "0" | "1" | "";
  HEAROTPCHAT: string;
  TZIYUNBNIYA: "0" | "1" | "";
  HEAROTBNIYA: string;
  TZIYUNCHIMUM: "0" | "1" | "";
  HEAROTCHIMUM: string;
  TZIYUNASBEST: "0" | "1" | "";
  HEAROTASBEST: string;
  TZIYUNGALAY: "0" | "1" | "";
  HEAROTGALAY: string;
  SHEMPRATI: string;
  SHEMMISHPACHA: string;
  RECHOV: string;
  BAIT: number;
  ISHUV: string;
  MIKUD: number;
  MISPARCESHBON: string;
  EMGVIYA:
  | "הוראת קבע"
  | "ניכוי בשכר"
  | "שובר"
  | "הודעת חיוב"
  | "שיקים דחויים"
  | "שיקים"
  | "ממסר"
  | "קיזוז עם ארנונה";
  MATZAVICHLUS: string;
  TARICHLUS: string;
  TARBIKURACHARON: string;
  MISNEFASHOT: number;
  YELADIMAD21: number;
  TELNAYAD: string;
  TELDIRA: string;
  TELAVODA: string;
  DOARELECTRONI: string;
  TITLENOSAF: string;
  TELNOSAF: string;
  TITLENOSAF2: string;
  TELNOSAF2: string;
  TELHEAROT: string;
  DRZIHUY: string;
  DRPRATI: string;
  DRMISHPACHA: string;
  DRSEX: 1 | 2;
  DRTARLEDA: string;
  DRMATZAV: 1 | 2 | 3 | 4 | 5;
  BZZIHUY: string;
  BZPRATI: string;
  BZMISHPACHA: string;
  BZSEX: 1 | 2;
  BZTARLEDA: string;
  BZMATZAV: 1 | 2 | 3 | 4 | 5;
  NISMACHIM: string;
  TZIHUY: string;
  HEAROT: string;
  SCHDNETO: string;
  SCHDBRUTO: string;
  SUGSCHD: string;
  SUGHANACH: string;
  TARSIYUM: string;
  CHOVTVIAA: string;
  KOMA: number;
  ITRATCHOV: string;
  CHOV: string;
  STATUSCHOZE: string;
  ISEXISTSBIKUR: "0" | "1";
  ISTAZHIRDAYAR: "0" | "1";
  ISGARBEGAPO: "0" | "1";
  ISBIKURKASHISH: "0" | "1";
  ISTAMA: "0" | "1";
  ISTAZHIRDAYARBZ: "0" | "1";
  ISTROMI: "0" | "1";
  ISSCHIRM: "0" | "1";
  ISHUVCODE: string;
  ISEXISTSBIKURACHZAKA: "0" | "1";
  SHIMUSHBEFOAL: string;
}

export type {
  IPhoto,
  IApartmentDetailsFields,
  ISelectListItem,
  IMaintenanceItem,
  IAreaListItem,
  IRatingOptionItem,
  IStepperProperties,
  IRating,
  IMainTenantTableDetails,
  IApartmentGeneralDetails,
  IDefect,
  IOtherDefect,
  IVisitState,
  ITenant,
  INismach,
  IForm,
  IListsOfSelect,
  IVisitContext,
  VisitProviderProps,
  ITableCodeItem,
  IApartmentVisitResponse,

  ILabel,
  ICardFields,
  IContactFields,
  IEditContact,
  IAccountFields,
  ITenantInfoFields
};
