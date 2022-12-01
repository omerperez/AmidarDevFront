import {
  IDefect,
  IOtherDefect,
  ITenant,
  INismach,
  IVisitState,
  IPhoto,
} from "../Interfaces/Visit";
import {
  getDateFormat,
  getDefaultStringValueIfEmpty,
  getDefaultNumberValueIfEmpty,
  getGender,
  getMobileFormat,
  getStatus,
  nismachObjFromStringFormat,
} from "../../Features/FormatsFunctions";
import { maritalStatusOptions } from "../Types/Visit";

class MainTenantDetails {
  firstName: string = "";
  lastName: string = "";
  fullName: string = "";
  tenantId: string = "";
  city: string = "";
  number: number = 0;
  street: string = "";
  passcode: number = 0;
  apartmentNumber: string = "";
  isExistVisit: boolean = false;

  constructor(visitDetails: any) {
    if (visitDetails) {
      this.firstName = visitDetails.SHEMPRATI;
      this.lastName = visitDetails.SHEMMISHPACHA;
      this.fullName = `${visitDetails.SHEMPRATI} ${visitDetails.SHEMMISHPACHA}`;
      this.tenantId = visitDetails.DRZIHUY;
      this.city = visitDetails.ISHUV;
      this.number = visitDetails.BAIT;
      this.street = visitDetails.RECHOV;
      this.passcode = visitDetails.MIKUD;
      this.apartmentNumber = visitDetails.MIS_DIRA;
      this.isExistVisit = getStatus(visitDetails.ISEXISTSBIKUR);
    }
  }
}

class OccupancyDetails {
  visitDate: string = "";
  occupancyDate: string = "";
  lastVisitDate: string = "";
  occupancyStatus: string = "";
  kidsUnder21: number = 0;
  totalTenantsCount: number = 0;
  contractStatus: string = "";

  constructor(visitDetails: any) {
    if (visitDetails) {
      this.visitDate = getDateFormat(new Date(visitDetails.TAR_BIKUR));
      this.occupancyDate = getDateFormat(new Date(visitDetails.TARICHLUS));
      this.lastVisitDate = getDateFormat(
        new Date(visitDetails.TARBIKURACHARON)
      );
      this.occupancyStatus = visitDetails.MATZAVICHLUS;
      this.kidsUnder21 = visitDetails.YELADIMAD21;
      this.totalTenantsCount = visitDetails.MISNEFASHOT;
      this.contractStatus = getStatus(visitDetails.STATUSCHOZE)
        ? "פעיל"
        : "לא פעיל";
    }
  }
}

class ContactInformation {
  mainPhoneNumber: string = "";
  apartmentPhoneNumber: string = "";
  workPhoneNumber: string = "";
  email: string = "";
  firstContactName: string | null = "";
  firstContactPhoneNumber: string = "";
  secondContactName: string | null = "";
  secondContactPhoneNumber: string = "";
  otherContactDetailsComment: string = "";

  constructor(visitDetails: any) {
    if (visitDetails) {
      this.mainPhoneNumber = getMobileFormat(visitDetails.TELNAYAD);
      this.apartmentPhoneNumber = getMobileFormat(visitDetails.TELDIRA);
      this.workPhoneNumber = getMobileFormat(visitDetails.TELAVODA);
      this.email = getDefaultStringValueIfEmpty(visitDetails.DOARELECTRONI);
      const firstContactNameVal = getDefaultStringValueIfEmpty(
        visitDetails.TITLENOSAF,
        "-"
      );
      this.firstContactName =
        firstContactNameVal === "-" ? null : firstContactNameVal;
      this.firstContactPhoneNumber = getMobileFormat(visitDetails.TELNOSAF);
      const secondContactNameVal = getDefaultStringValueIfEmpty(
        visitDetails.TITLENOSAF2,
        "-"
      );

      this.secondContactName =
        secondContactNameVal === "-" ? null : secondContactNameVal;
      this.secondContactPhoneNumber = getMobileFormat(visitDetails.TELNOSAF2);
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
  accountFullName: string = "";
  accountNumber: string = "";
  netRent: number | string = "";
  grossRent: number | string = "";
  rentType: string = "";
  discountType: string = "";
  finishDate: string = "";
  collectionMeans: string = "";
  debt: number | string = "";
  balaceDebt: number | string = "";
  lawsuitDebt: number | string = "";

  constructor(visitDetails: any) {
    if (visitDetails) {
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
  waterHeating: string = "";
  securityRoom: string = "";
  tama: string = "";
  actualUse: string = "";
  area: number = 0;
  rooms: number = 0;
  halfRooms: number = 0;
  floor: number = 0;
  stairs: number = 0;

  constructor(visitDetails: any) {
    if (visitDetails) {
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
  constructionAnomalies: IOtherDefect | null = null;
  othersHeatsWaterType: IOtherDefect | null = null;
  asbestos: IOtherDefect | null = null;
  smokeDetector: IOtherDefect | null = null;
  depreciationRelay: IOtherDefect | null = null;

  constructor(visitDetails: any) {
    if (visitDetails) {
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
        rate: -1,
        defectDescription: "",
      };
      this.enteryDoor = {
        rate: -1,
        defectDescription: "",
      };
      this.caulking = {
        rate: -1,
        defectDescription: "",
      };
      this.barsAndRailings = {
        rate: -1,
        defectDescription: "",
      };
      this.electricalSystem = {
        rate: -1,
        defectDescription: "",
      };
      this.pipingLeaks = {
        rate: -1,
        defectDescription: "",
      };
      this.insidesDoors = {
        rate: -1,
        defectDescription: "",
      };
      this.bathroomDoors = {
        rate: -1,
        defectDescription: "",
      };
      this.windows = {
        rate: -1,
        defectDescription: "",
      };
      this.blinds = {
        rate: -1,
        defectDescription: "",
      };
      this.kitchen = {
        rate: -1,
        defectDescription: "",
      };
      this.toilet = {
        rate: -1,
        defectDescription: "",
      };
      this.shower = {
        rate: -1,
        defectDescription: "",
      };
      this.generalApartmentCondition = {
        rate: -1,
        defectDescription: "",
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
  mainTenant: ITenant = {
    id: "",
    newId: "",
    firstName: "",
    lastName: "",
    fullName: "",
    gender: "-",
    birthdate: "",
    maritalStatus: "",
  };
  tenantPartner: ITenant | null = null;
  otherTenants: INismach[] | [] = [];

  constructor(visitDetails: any) {
    if (visitDetails) {
      this.mainTenant = {
        id: visitDetails.DRZIHUY,
        newId: visitDetails.DRZIHUY,
        firstName: visitDetails.DRPRATI,
        lastName: visitDetails.DRMISHPACHA,
        fullName: `${visitDetails.DRPRATI} ${visitDetails.DRMISHPACHA}`,
        gender: getGender(visitDetails.DRSEX),
        birthdate: getDateFormat(new Date(visitDetails.DRTARLEDA)),
        maritalStatus: maritalStatusOptions[visitDetails.DRMATZAV - 1],
      };
      if (visitDetails.BZZIHUY && visitDetails.BZPRATI) {
        this.tenantPartner = {
          id: visitDetails.BZZIHUY,
          firstName: visitDetails.BZPRATI,
          lastName: visitDetails.BZMISHPACHA,
          fullName: `${visitDetails.BZPRATI} ${visitDetails.BZMISHPACHA}`,
          gender: getGender(visitDetails.BZSEX),
          birthdate: getDateFormat(new Date(visitDetails.BZTARLEDA)),
          maritalStatus: maritalStatusOptions[visitDetails.BZMATZAV - 1],
        };
      }
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

class FormStatus {
  liveAlone: boolean = false;
  mainTenants: boolean = false;
  partner: boolean = false;
  bankDebitAccount: boolean = false;
  debtSettlement: boolean = false;
  transitionalRent: boolean = false;
  prefabricatedStructure: boolean = false;

  constructor(visitDetails: any) {
    if (visitDetails !== null) {
      this.liveAlone = getStatus(visitDetails.ISGARBEGAPO);
      this.mainTenants = getStatus(visitDetails.ISTAZHIRDAYAR);
      this.partner = getStatus(visitDetails.ISTAZHIRDAYAR); // less
      const debtStatus =
        visitDetails.EMGVIYA === "שובר" &&
        getDefaultNumberValueIfEmpty(visitDetails.CHOV) > 1999 &&
        getDefaultNumberValueIfEmpty(visitDetails.ITRATCHOV) === 0;
      this.bankDebitAccount = debtStatus;
      this.debtSettlement = getStatus(visitDetails.ISTAZHIRDAYAR); // ?
      this.transitionalRent = getStatus(visitDetails.ISTAZHIRDAYAR); // ?
      this.prefabricatedStructure = getStatus(visitDetails.ISTAZHIRDAYAR); // ?
    }
  }
}

class Summary {
  familyTenantsChanges: string = "";
  isLiveAlone: boolean = false;
  isSignLiveAlone: boolean = false;
  isAgreeSmallApartment: boolean = false;
  isTransitionalOldTenant: boolean = false;
  visitLanguage: string = "he";
  isTranslatorPresent: boolean = false;
  signsTenantName: string = "";
  signsTenantEssence: string = "";
  translatorId: string = "";
  comments: string = "";

  constructor(visitDetails: any) {
    if (visitDetails !== null) {
      this.isAgreeSmallApartment = getStatus(visitDetails.ISBIKURKASHISH);
      this.isTransitionalOldTenant = getStatus(visitDetails.ISBIKURKASHISH);
    }
  }
}

class VisitState implements IVisitState {
  identifyingInformation;
  paymentDetails;
  maintenanceVisit;
  occupancyVisit;
  formsFiles;
  summary;

  constructor(visitDetails: any) {
    this.identifyingInformation = new VisitGeneralDetails(visitDetails);
    this.paymentDetails = new PaymentAccount(visitDetails);
    this.maintenanceVisit = new MaintenanceVisit(visitDetails);
    this.occupancyVisit = new TenantsOccupancyDetails(visitDetails);
    this.images = [];
    this.formsFiles = new FormStatus(visitDetails);
    this.summary = new Summary(visitDetails);
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
  FormStatus,
  VisitState,
  Summary,
};
