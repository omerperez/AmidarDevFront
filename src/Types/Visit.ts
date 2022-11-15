import { IDefect, IOtherDefect } from "../Interfaces/Visit";

class MainTenantDetails {
  firstName: string;
  lastName: string;
  tenantId: string;
  city: string;
  number: number;
  street: string;
  passcode: number;
  apartmentNumber: string;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.firstName = "עומר";
      this.lastName = "פרץ";
      this.tenantId = "209543214";
      this.city = "הרצליה";
      this.number = 49;
      this.street = "יציאת אירופה";
      this.passcode = 4637565;
      this.apartmentNumber = "0";
    } else {
      this.firstName = visitDetails.SHEMPRATI;
      this.lastName = visitDetails.SHEMMISHPACHA;
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
  visitDate: Date;
  occupancyDate: Date;
  lastVisitDate: Date;
  occupancyStatus: string;
  kidsUnder21: number;
  totalTenantsCount: number;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.visitDate = new Date();
      this.occupancyDate = new Date();
      this.lastVisitDate = new Date();
      this.occupancyStatus = "שכירות";
      this.kidsUnder21 = 0;
      this.totalTenantsCount = 2;
    } else {
      this.visitDate = new Date(visitDetails.TAR_BIKUR);
      this.occupancyDate = new Date(visitDetails.TARICHLUS);
      this.lastVisitDate = new Date(visitDetails.TARBIKURACHARON);
      this.occupancyStatus = visitDetails.MATZAVICHLUS;
      this.kidsUnder21 = visitDetails.YELADIMAD21;
      this.totalTenantsCount = visitDetails.MISNEFASHOT;
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
      this.apartmentPhoneNumber = "099559281"
      this.workPhoneNumber = "-"
      this.email = "omerperez222@gmail.com";
      this.firstContactName = "משה השכן";
      this.firstContactPhoneNumber = "0545225998";
      this.secondContactName = "-";
      this.secondContactPhoneNumber = "-";
      this.otherContactDetailsComment = "בלה בלה בלה בלה";

    } else {
      this.mainPhoneNumber = visitDetails.TELNAYAD;
      this.apartmentPhoneNumber = visitDetails.TELDIRA;
      this.workPhoneNumber = visitDetails.TELAVODA;
      this.email = visitDetails.DOARELECTRONI;
      this.firstContactName = visitDetails.TITLENOSAF;
      this.firstContactPhoneNumber = visitDetails.TELNOSAF;
      this.secondContactName = visitDetails.TITLENOSAF2;
      this.secondContactPhoneNumber = visitDetails.TELNOSAF2;
      this.otherContactDetailsComment = visitDetails.TELHEAROT;
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
  netRent: number;
  grossRent: number;
  rentType: string;
  discountType: string;
  finishDate: Date;
  collectionMeans: string;
  debt: number;
  lawsuitDebt: number;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.accountFullName = "עומר פרץ";
      this.accountNumber = "אחלה"
      this.netRent = 0;
      this.grossRent = 0;
      this.rentType = "אחלה";
      this.discountType = "שובר"
      this.finishDate = new Date();
      this.collectionMeans = "לא יודע";
      this.debt = 0;
      this.lawsuitDebt = 0;
    } else {
      this.accountFullName = `${visitDetails.SHEMPRATI} ${visitDetails.SHEMMISHPACHA}`
      this.accountNumber = visitDetails.MISPARCESHBON;
      this.netRent = visitDetails.SCHDNETO;
      this.grossRent = visitDetails.SCHDBRUTO;
      this.rentType = visitDetails.SUGSCHD;
      this.discountType = visitDetails.SUGHANACH;
      this.finishDate = new Date(visitDetails.TARSIYUM);
      this.collectionMeans = visitDetails.EMGVIYA;
      this.debt = visitDetails.CHOV;
      this.lawsuitDebt = visitDetails.CHOVTVIAA;
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
  flooring: IDefect | null;;
  enteryDoor: IDefect | null;;
  caulking: IDefect | null;;
  barsAndRailings: IDefect | null;;
  electricalSystem: IDefect | null;;
  pipingLeaks: IDefect | null;;
  insidesDoors: IDefect | null;;
  bathroomDoors: IDefect | null;;
  windows: IDefect | null;;
  blinds: IDefect | null;;
  kitchen: IDefect | null;;
  toilet: IDefect | null;;
  shower: IDefect | null;;
  generalApartmentCondition: IDefect | null;;
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
      this.otherMaintenanceVisitDetails = new OtherMaintenanceVisit(visitDetails);
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
      this.otherMaintenanceVisitDetails = new OtherMaintenanceVisit(visitDetails);
    }
  }
}

interface Tenant {
  id: string;
  firstName: string;
  lastName: string;
  gender: "זכר" | "נקבה";
  birthdate: Date;
  maritalStatus: string;
}

interface Nismach {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: Date | null;
  KindOfFamilyRelationship: string | null;
  maritalStatus: string | null;
  disabilityPercentage: number | null;
  disabilityStartDate: Date | null;
  disabilityEndDate: Date | null;
  militaryServiceStartDate: Date | null;
  militaryServiceEndDate: Date | null;
}

class TenantsOccupancyDetails {
  mainTenant: Tenant;
  tenantPartner: Tenant | null;
  otherTenants: Nismach[] | null;

  constructor(visitDetails: any) {
    if (visitDetails === null) {
      this.mainTenant = {
        id: "209543214",
        firstName: "עומר",
        lastName: "פרץ",
        gender: "זכר",
        birthdate: new Date(),
        maritalStatus: "רווק"
      };
      this.tenantPartner = null;
      this.otherTenants = null;
    } else {
      this.mainTenant = {
        id: visitDetails.DRZIHUY,
        firstName: visitDetails.DRPRATI,
        lastName: visitDetails.DRMISHPACHA,
        gender: visitDetails.DRSEX === "1" ? "זכר" : "נקבה",
        birthdate: new Date(visitDetails.DRTARLEDA),
        maritalStatus: visitDetails.DRMATZAV,
      };
      this.tenantPartner = {
        id: visitDetails.BZZIHUY,
        firstName: visitDetails.BZPRATI,
        lastName: visitDetails.BZMISHPACHA,
        gender: visitDetails.BZSEX === "1" ? "זכר" : "נקבה",
        birthdate: new Date(visitDetails.BZTARLEDA),
        maritalStatus: visitDetails.BZMATZAV,
      };

      const splitByTenant =
        visitDetails.NISMACHIM !== "" ? visitDetails.NISMACHIM.split("&") : null;
      let tempOtherTenants: Nismach[] | null = null;

      if (splitByTenant !== null) {
        const tenantsProps = splitByTenant.toString().split("$");
        tempOtherTenants = [];
        for (let i = 0; i < tenantsProps.length; i += 11) {
          tempOtherTenants.push({
            id: tenantsProps[0],
            firstName: tenantsProps[1],
            lastName: tenantsProps[2],
            birthdate: new Date(tenantsProps[3]),
            KindOfFamilyRelationship: tenantsProps[4],
            maritalStatus: tenantsProps[4],
            disabilityPercentage: tenantsProps[5],
            disabilityStartDate: new Date(tenantsProps[6]),
            disabilityEndDate: new Date(tenantsProps[7]),
            militaryServiceStartDate: new Date(tenantsProps[8]),
            militaryServiceEndDate: new Date(tenantsProps[9]),
          });
        }
      }
      this.otherTenants = tempOtherTenants;
    }
  }
}

export { MainTenantDetails, OccupancyDetails, ContactInformation, VisitGeneralDetails, PaymentAccount, ApartmentDetails, MaintenanceVisit, TenantsOccupancyDetails };
