import { getDateFormat } from "../Features/FormatsFunctions";
import { IApartmentGeneralDetails } from "../Interfaces/Visit";

interface IDefect {
  rate: number;
  defectDescription?: string;
}

interface IDefectDescription {
  current: any[];
}

const isDefectDefaultValue = (
  defectsDescription: IDefectDescription,
  index: number
) => {
  return defectsDescription.current[index].current?.value ?? null;
};

class MaintenanceFormValues {
  waterHeating: string;
  securityRoom: string;
  flooring: IDefect;
  enteryDoor: IDefect;
  caulking: IDefect;
  barsAndRailings: IDefect;
  electricalSystem: IDefect;
  pipingLeaks: IDefect;
  insidesDoors: IDefect;
  bathroomDoors: IDefect;
  windows: IDefect;
  blinds: IDefect;
  kitchen: IDefect;
  toilet: IDefect;
  shower: IDefect;
  generalApartmentCondition: IDefect;

  constructor(values: any, defectsDescription: IDefectDescription) {
    this.waterHeating = values.waterHeating;
    this.securityRoom = values.securityRoom;
    this.flooring = {
      rate: values.flooring,
      defectDescription: isDefectDefaultValue(defectsDescription, 0),
    };
    this.enteryDoor = {
      rate: values.enteryDoor,
      defectDescription: isDefectDefaultValue(defectsDescription, 1),
    };
    this.caulking = {
      rate: values.caulking,
      defectDescription: isDefectDefaultValue(defectsDescription, 2),
    };
    this.barsAndRailings = {
      rate: values.barsAndRailings,
      defectDescription: isDefectDefaultValue(defectsDescription, 3),
    };
    this.electricalSystem = {
      rate: values.electricalSystem,
      defectDescription: isDefectDefaultValue(defectsDescription, 4),
    };
    this.pipingLeaks = {
      rate: values.pipingLeaks,
      defectDescription: isDefectDefaultValue(defectsDescription, 5),
    };
    this.insidesDoors = {
      rate: values.insidesDoors,
      defectDescription: isDefectDefaultValue(defectsDescription, 6),
    };
    this.bathroomDoors = {
      rate: values.bathroomDoors,
      defectDescription: isDefectDefaultValue(defectsDescription, 7),
    };
    this.windows = {
      rate: values.windows,
      defectDescription: isDefectDefaultValue(defectsDescription, 8),
    };
    this.blinds = {
      rate: values.blinds,
      defectDescription: isDefectDefaultValue(defectsDescription, 9),
    };
    this.kitchen = {
      rate: values.kitchen,
      defectDescription: isDefectDefaultValue(defectsDescription, 10),
    };
    this.toilet = {
      rate: values.toilet,
      defectDescription: isDefectDefaultValue(defectsDescription, 11),
    };
    this.shower = {
      rate: values.shower,
      defectDescription: isDefectDefaultValue(defectsDescription, 12),
    };
    this.generalApartmentCondition = {
      rate: values.generalApartmentCondition,
      defectDescription: isDefectDefaultValue(defectsDescription, 13),
    };
  }
}

class ApartmentGeneralDetails {
  tenantId: string;
  firstName: string;
  lastName: string;
  usedCode: string;
  countOfTenants: string;
  countOfKidsUnder21: string;
  area: string;
  tenancyStartDate: string;
  statusDescription: string;
  cityCode: string;
  floor: string;
  passcode: string;
  number: string;
  totalRoomsNumber: string;
  halfRoomsNumber: string;
  streetNumber: string;
  city: string;
  street: string;
  coordinationDate: string;
  countOfStairs: string;

  constructor(apartmentIdObj: IApartmentGeneralDetails) {
    this.tenantId = apartmentIdObj.CICL_MIS_ZIHUY_0;
    this.firstName = apartmentIdObj.CICL_SCR_SHEM_PRATI_0;
    this.lastName = apartmentIdObj.CICL_SCR_SHEM_MISHPACHA_0;
    this.usedCode = apartmentIdObj.CICL1_SCR_KOD_SHIMUSH_BF_0;
    this.countOfTenants = apartmentIdObj.CICL1_SCR_MIS_NEFASHOT_0;
    this.countOfKidsUnder21 = apartmentIdObj.CICL1_SCR_MIS_YELADIM_AD21_0;
    this.area = apartmentIdObj.CICL1_SCR_SHETACH_0;
    this.tenancyStartDate = getDateFormat(
      apartmentIdObj.CICL1_SCR_TAR_TCHILAT_MATZAV_0
    );
    this.statusDescription = apartmentIdObj.CICL1_SCR_TEUR_MATZAV_0;
    this.cityCode = apartmentIdObj.KOD_ISHUV;
    this.floor = apartmentIdObj.KOMA;
    this.passcode = apartmentIdObj.MIKUD;
    this.number = apartmentIdObj.MIS_BAIT;
    this.totalRoomsNumber = apartmentIdObj.MIS_CHADARIM_KOLEL;
    this.halfRoomsNumber = apartmentIdObj.MIS_CHATZAIIM_MAKOR;
    this.streetNumber = apartmentIdObj.MIS_RECHOV;
    this.city = apartmentIdObj.SHEM_ISHUV;
    this.street = apartmentIdObj.SHEM_RECHOV;
    this.coordinationDate = getDateFormat(apartmentIdObj.TAR_BIKUR_ACHARON);
    this.countOfStairs = apartmentIdObj.DIRAT_AMID_MIS_MADREGOT_0;
  }

  getFullAddress() {
    return `${this.street} ${this.number}, ${this.city}`;
  }
}

export { ApartmentGeneralDetails, MaintenanceFormValues };
