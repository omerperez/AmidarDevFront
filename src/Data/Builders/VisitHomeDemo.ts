import {
  changeHebrewMonthToEnglisMonth,
  getDateFormat,
  getDefaultNumberValueIfEmpty,
  getDefaultStringValueIfEmpty,
  getGender,
} from "../../Features/FormatsFunctions";
import {
  IDefect,
  INismach,
  IOtherDefect,
  IPhoto,
  ITenant,
  IVisitState,
} from "../Interfaces/Visit";
import {
  kindOfFamilyRelationshipOptions,
  maritalStatusOptions,
} from "../Types/Visit";
import { FormStatus, Summary } from "./Visit";

class MainTenantDetails {
  firstName: string;
  lastName: string;
  fullName: string;
  tenantId: string;
  city: string;
  number: number;
  street: string;
  passcode: number;
  apartmentNumber: string;
  isExistVisit: boolean = false;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.firstName = "עומר";
      this.lastName = "פרץ";
      this.fullName = "עומר פרץ";
      this.tenantId = "209543214";
      this.city = "הרצליה";
      this.number = 49;
      this.street = "יציאת אירופה";
      this.passcode = 4637565;
      this.apartmentNumber = "0";
    } else {
      this.firstName = visitDetails.SHEMPRATI;
      this.lastName = visitDetails.SHEMMISHPACHA;
      this.fullName = `${visitDetails.SHEMPRATI} ${visitDetails.SHEMMISHPACHA}`;
      this.tenantId = visitDetails.DRZIHUY;
      this.city = visitDetails.ISHUV;
      this.number = visitDetails.BAIT;
      this.street = visitDetails.RECHOV;
      this.passcode = visitDetails.MIKUD;
      this.apartmentNumber = visitDetails.MIS_DIRA;
    }
  }
}

class OccupancyDetails {
  visitDate: string;
  occupancyDate: string;
  lastVisitDate: string;
  occupancyStatus: string;
  kidsUnder21: number;
  totalTenantsCount: number;
  contractStatus: string = "";

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.visitDate = "";
      this.occupancyDate = "";
      this.lastVisitDate = "";
      this.occupancyStatus = "שכירות";
      this.kidsUnder21 = 0;
      this.totalTenantsCount = 2;
      this.contractStatus = "asndkjasd";
    } else {
      this.visitDate = getDateFormat(new Date(visitDetails.TAR_BIKUR));
      this.occupancyDate = getDateFormat(new Date(visitDetails.TARICHLUS));
      this.lastVisitDate = getDateFormat(
        new Date(visitDetails.TARBIKURACHARON)
      );
      this.occupancyStatus = visitDetails.MATZAVICHLUS;
      this.kidsUnder21 = visitDetails.YELADIMAD21;
      this.totalTenantsCount = visitDetails.MISNEFASHOT;
      this.contractStatus = visitDetails.STATUSCHOZE;
    }
  }
}

class ContactInformation {
  mainPhoneNumber: string;
  apartmentPhoneNumber: string;
  workPhoneNumber: string;
  email: string;
  firstContactName: string;
  firstContactPhoneNumber: string;
  secondContactName: string;
  secondContactPhoneNumber: string;
  otherContactDetailsComment: string;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.mainPhoneNumber = "0522520484";
      this.apartmentPhoneNumber = "099559281";
      this.workPhoneNumber = "-";
      this.email = "omerperez222@gmail.com";
      this.firstContactName = "משה השכן";
      this.firstContactPhoneNumber = "0545225998";
      this.secondContactName = "-";
      this.secondContactPhoneNumber = "-";
      this.otherContactDetailsComment = "בלה בלה בלה בלה";
    } else {
      this.mainPhoneNumber = visitDetails.TELNAYAD;
      this.apartmentPhoneNumber = getDefaultStringValueIfEmpty(
        visitDetails.TELDIRA
      );
      this.workPhoneNumber = getDefaultStringValueIfEmpty(
        visitDetails.TELAVODA
      );
      this.email = getDefaultStringValueIfEmpty(visitDetails.DOARELECTRONI);
      this.firstContactName = getDefaultStringValueIfEmpty(
        visitDetails.TITLENOSAF,
        "איש קשר נוסף"
      );
      this.firstContactPhoneNumber = getDefaultStringValueIfEmpty(
        visitDetails.TELNOSAF
      );
      this.secondContactName = getDefaultStringValueIfEmpty(
        visitDetails.TITLENOSAF2,
        "איש קשר נוסף 2"
      );
      this.secondContactPhoneNumber = getDefaultStringValueIfEmpty(
        visitDetails.TELNOSAF2
      );
      this.otherContactDetailsComment = getDefaultStringValueIfEmpty(
        visitDetails.TELHEAROT,
        "אין הערות"
      );
    }
  }
}

class VisitGeneralDetails {
  mainTenantDetails: MainTenantDetails;
  occupancyDetails: OccupancyDetails;
  contactInformation: ContactInformation;

  constructor(visitDetails: any) {
    this.mainTenantDetails = new MainTenantDetails(visitDetails);
    this.occupancyDetails = new OccupancyDetails(visitDetails);
    this.contactInformation = new ContactInformation(visitDetails);
  }
}

class PaymentAccount {
  accountFullName: string;
  accountNumber: string;
  netRent: number | string;
  grossRent: number | string;
  rentType: string;
  discountType: string;
  finishDate: string;
  collectionMeans: string;
  debt: number | string;
  balaceDebt: number | string;
  lawsuitDebt: number | string;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.accountFullName = "עומר פרץ";
      this.accountNumber = "אחלה";
      this.netRent = 0;
      this.grossRent = 0;
      this.rentType = "אחלה";
      this.discountType = "שובר";
      this.finishDate = "";
      this.collectionMeans = "לא יודע";
      this.debt = 0;
      this.balaceDebt = 0;
      this.lawsuitDebt = 0;
    } else {
      this.accountFullName = `${visitDetails.SHEMPRATI} ${visitDetails.SHEMMISHPACHA}`;
      this.accountNumber = visitDetails.MISPARCESHBON;
      this.netRent = getDefaultNumberValueIfEmpty(visitDetails.SCHDNETO);
      this.grossRent = getDefaultNumberValueIfEmpty(visitDetails.SCHDBRUTO);
      this.rentType = getDefaultStringValueIfEmpty(visitDetails.SUGSCHD);
      this.discountType = getDefaultStringValueIfEmpty(visitDetails.SUGHANACH);
      this.finishDate = getDateFormat(new Date(visitDetails.TARSIYUM));
      this.collectionMeans = getDefaultStringValueIfEmpty(visitDetails.EMGVIYA);
      this.debt = getDefaultNumberValueIfEmpty(visitDetails.CHOV);
      this.balaceDebt = getDefaultNumberValueIfEmpty(visitDetails.ITRATCHOV);
      this.lawsuitDebt = getDefaultNumberValueIfEmpty(visitDetails.CHOVTVIAA);
    }
  }
}

class ApartmentDetails {
  waterHeating: string;
  securityRoom: string;
  tama: string;
  actualUse: string;
  area: number;
  rooms: number;
  halfRooms: number;
  floor: number;
  stairs: number;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.waterHeating = "חימום מים";
      this.securityRoom = "ממ״ד";
      //
      this.tama = "נדרש תמ״א";
      this.actualUse = "מגורים";
      //
      this.area = 100;
      this.rooms = 2.5;
      this.halfRooms = 2;
      this.floor = 3;
      this.stairs = 15;
    } else {
      this.waterHeating = visitDetails.CHIMUMMAYIM;
      this.securityRoom = visitDetails.CHADARBITACHON;
      //
      this.tama = visitDetails.CHADARBITACHON;
      this.actualUse = visitDetails.CHADARBITACHON;
      //
      this.area = visitDetails.SHETACH;
      this.rooms = visitDetails.CHADARIM;
      this.halfRooms = visitDetails.CATZAEICHADARIM;
      this.floor = visitDetails.KOMA;
      this.stairs = visitDetails.MADREGOT;
    }
  }
}

class OtherMaintenanceVisit {
  constructionAnomalies: IOtherDefect | null;
  othersHeatsWaterType: IOtherDefect | null;
  asbestos: IOtherDefect | null;
  smokeDetector: IOtherDefect | null;
  depreciationRelay: IOtherDefect | null;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.constructionAnomalies = null;
      this.othersHeatsWaterType = null;
      this.asbestos = null;
      this.smokeDetector = null;
      this.depreciationRelay = null;
    } else {
      this.constructionAnomalies = {
        rate: visitDetails.TZIYUNBNIYA,
        defectDescription: visitDetails.HEAROTBNIYA,
      };
      this.othersHeatsWaterType = {
        rate: visitDetails.TZIYUNCHIMUM,
        defectDescription: visitDetails.HEAROTCHIMUM,
      };
      this.asbestos = {
        rate: visitDetails.TZIYUNASBEST,
        defectDescription: visitDetails.HEAROTASBEST,
      };
      this.smokeDetector = {
        rate: visitDetails.TZIYUNGALAY,
        defectDescription: visitDetails.HEAROTGALAY,
      };
      this.depreciationRelay = {
        rate: visitDetails.TZIYUNPCHAT,
        defectDescription: visitDetails.HEAROTPCHAT,
      };
    }
  }
}

class MaintenanceVisit {
  apartmentDetails: ApartmentDetails;
  flooring: IDefect | null;
  enteryDoor: IDefect | null;
  caulking: IDefect | null;
  barsAndRailings: IDefect | null;
  electricalSystem: IDefect | null;
  pipingLeaks: IDefect | null;
  insidesDoors: IDefect | null;
  bathroomDoors: IDefect | null;
  windows: IDefect | null;
  blinds: IDefect | null;
  kitchen: IDefect | null;
  toilet: IDefect | null;
  shower: IDefect | null;
  generalApartmentCondition: IDefect | null;
  otherMaintenanceVisitDetails: OtherMaintenanceVisit;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.apartmentDetails = new ApartmentDetails(visitDetails);
      this.flooring = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.enteryDoor = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.caulking = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.barsAndRailings = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.electricalSystem = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.pipingLeaks = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.insidesDoors = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.bathroomDoors = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.windows = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.blinds = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.kitchen = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.toilet = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.shower = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.generalApartmentCondition = {
        rate: 1,
        defectDescription: "visitDetails.HEAROTRITZUF",
      };
      this.otherMaintenanceVisitDetails = new OtherMaintenanceVisit(
        visitDetails
      );
    } else {
      this.apartmentDetails = new ApartmentDetails(visitDetails);
      this.flooring = {
        rate: visitDetails.TZIYUNRITZUF,
        defectDescription: visitDetails.HEAROTRITZUF,
      };
      this.enteryDoor = {
        rate: visitDetails.TZIYUNKNISA,
        defectDescription: visitDetails.HEAROTKNISA,
      };
      this.caulking = {
        rate: visitDetails.TZIYUNITUM,
        defectDescription: visitDetails.HEAROTITUM,
      };
      this.barsAndRailings = {
        rate: visitDetails.TZIYUNSORAGIM,
        defectDescription: visitDetails.HEAROTSORAGIM,
      };
      this.electricalSystem = {
        rate: visitDetails.TZIYUNHASHMAL,
        defectDescription: visitDetails.HEAROTHASHMAL,
      };
      this.pipingLeaks = {
        rate: visitDetails.TZIYUNNEZILOT,
        defectDescription: visitDetails.HEAROTNEZILOT,
      };

      this.insidesDoors = {
        rate: visitDetails.TZIYUNPNIM,
        defectDescription: visitDetails.HEAROTPNIM,
      };
      this.bathroomDoors = {
        rate: visitDetails.TZIYUNDLATOT,
        defectDescription: visitDetails.HEAROTDLATOT,
      };
      this.windows = {
        rate: visitDetails.TZIYUNCHALONOT,
        defectDescription: visitDetails.HEAROTCHALONOT,
      };
      this.blinds = {
        rate: visitDetails.TZIYUNTRISIM,
        defectDescription: visitDetails.HEAROTTRISIM,
      };
      this.kitchen = {
        rate: visitDetails.TZIYUNMITBACH,
        defectDescription: visitDetails.HEAROTMITBACH,
      };
      this.toilet = {
        rate: visitDetails.TZIYUNSHERUTIM,
        defectDescription: visitDetails.HEAROTSHERUTIM,
      };

      this.shower = {
        rate: visitDetails.TZIYUNMIKLACHAT,
        defectDescription: visitDetails.HEAROTMIKLACHAT,
      };
      this.generalApartmentCondition = {
        rate: visitDetails.TZIYUNKLALI,
        defectDescription: visitDetails.HEAROTKLALI,
      };
      this.otherMaintenanceVisitDetails = new OtherMaintenanceVisit(
        visitDetails
      );
    }
  }
}

class TenantsOccupancyDetails {
  mainTenant: ITenant;
  tenantPartner: ITenant | null;
  otherTenants: INismach[] | [];

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.mainTenant = {
        id: "209543214",
        firstName: "עומר",
        lastName: "פרץ",
        fullName: "עומר פרץ",
        gender: "זכר",
        birthdate: "",
        maritalStatus: "רווק",
      };
      this.tenantPartner = null;
      this.otherTenants = [];
    } else {
      this.mainTenant = {
        id: visitDetails.DRZIHUY,
        firstName: visitDetails.DRPRATI,
        lastName: visitDetails.DRMISHPACHA,
        fullName: `${visitDetails.DRPRATI} ${visitDetails.DRMISHPACHA}`,
        gender: getGender(visitDetails.DRSEX),
        birthdate: getDateFormat(new Date(visitDetails.DRTARLEDA)),
        maritalStatus: maritalStatusOptions[visitDetails.DRMATZAV - 1],
      };
      this.tenantPartner = {
        id: visitDetails.BZZIHUY,
        firstName: visitDetails.BZPRATI,
        lastName: visitDetails.BZMISHPACHA,
        fullName: `${visitDetails.DRPRATI} ${visitDetails.DRMISHPACHA}`,
        gender: getGender(visitDetails.BZSEX),
        birthdate: getDateFormat(new Date(visitDetails.BZTARLEDA)),
        maritalStatus: maritalStatusOptions[visitDetails.BZMATZAV - 1],
      };
      const splitByTenant =
        visitDetails.NISMACHIM !== ""
          ? visitDetails.NISMACHIM.split("&")
          : null;
      let tempOtherTenants: INismach[] = [];
      if (splitByTenant) {
        for (let i = 0; i < splitByTenant.length; i++) {
          const currentNismach = splitByTenant[i]
            .toString()
            .replaceAll(" ", "")
            .replaceAll(",", "")
            .split("$");
          if (currentNismach) {
            const newNismach = nismachObjFromStringFormat(currentNismach);
            tempOtherTenants.push(newNismach);
          }
        }
      }
      this.otherTenants = tempOtherTenants;
    }
  }
}

const keysOfINismach = [
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

const nismachObjFromStringFormat = (currentNismach: string[]) => {
  let createNismach: any = {};
  keysOfINismach.map((key, index) => {
    return (createNismach = {
      ...createNismach,
      [key]: key.toLowerCase().includes("date")
        ? changeHebrewMonthToEnglisMonth(currentNismach[index])
        : currentNismach[index],
    });
  });
  const newNismach: INismach = (createNismach = {
    ...createNismach,
    fullName: `${currentNismach[1]} ${currentNismach[2]}`,
    kindOfFamilyRelationship:
      kindOfFamilyRelationshipOptions[
      createNismach["kindOfFamilyRelationship"] - 1
      ],
    maritalStatus:
      maritalStatusOptions[createNismach["kindOfFamilyRelationship"] - 1],
  });
  return newNismach;
};

class VisitState implements IVisitState {
  identifyingInformation;
  paymentDetails;
  maintenanceVisit;
  occupancyVisit;
  formsFiles;
  summary;
  tableCode;

  constructor(visitDetails: any) {
    this.identifyingInformation = new VisitGeneralDetails(visitDetails);
    this.paymentDetails = new PaymentAccount(visitDetails);
    this.maintenanceVisit = new MaintenanceVisit(visitDetails);
    this.occupancyVisit = new TenantsOccupancyDetails(visitDetails);
    this.images = [];
    this.formsFiles = new FormStatus(null);
    this.summary = new Summary(null);
    this.tableCode = new Map();

  }
  images: IPhoto[];
}

export {
  MainTenantDetails,
  OccupancyDetails,
  ContactInformation,
  VisitGeneralDetails,
  PaymentAccount,
  ApartmentDetails,
  MaintenanceVisit,
  OtherMaintenanceVisit,
  TenantsOccupancyDetails,
  VisitState,
};
