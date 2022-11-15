import { SxProps, Theme } from "@mui/material";
import { MainTenantDetails, OccupancyDetails, ContactInformation, ApartmentDetails } from "../Types/Visit";
import { variant } from "../Types/MuiTypes";

interface IPhoto {
  base64: string;
  png: string;
}

interface IAreaListItem {
  title: string;
  name: string;
  areaName: string;
}

interface ISelectListItem {
  label: string;
  value: string | number;
}

interface IMaintenanceItem {
  title?: string;
  label?: string;
  name: string;
  areaName: string;
  deficienciesList: ISelectListItem[];
  indexLocation: number;
}

interface IApartmentDetailItem {
  label: string;
  type: "select" | "input";
  values: {
    sx: SxProps<Theme>;
    name: keyof ApartmentDetails;
    list?: ISelectListItem[];
    isShowLabel?: boolean;
    readOnly?: boolean;
    variant?: variant;
    value?: number | string;
  };
  gridSize: number;
}

interface IRatingOptionItem {
  label: string;
  value: number;
  textActive: string;
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

interface ITenantInformation {
  id: string;
  fullName: string;
  gender: "זכר" | "נקבה";
  birthdate: Date | string;
  familyStatus: string;
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

interface IApartmentidentifyingInformationInputs {
  label: string;
  name: keyof OccupancyDetails | keyof MainTenantDetails;
  sm: number;
  md: number;
  variant: variant;
  isEdit?: Boolean;
  readOnly: Boolean;
  // isFullName?: Boolean;
}

interface IDefect {
  rate: number;
  defectDescription?: string;
}

interface IOtherDefect {
  rate: Boolean;
  defectDescription?: string;
}

interface IContactInformation {
  label: string;
  name: keyof ContactInformation,
  value?: string;
}

export type {
  IPhoto,
  IApartmentDetailItem,
  ISelectListItem,
  IMaintenanceItem,
  IAreaListItem,
  IRatingOptionItem,
  IStepperProperties,
  IRating,
  ITenantInformation,
  IMainTenantTableDetails,
  IApartmentGeneralDetails,
  IApartmentidentifyingInformationInputs, IDefect, IOtherDefect, IContactInformation
};
