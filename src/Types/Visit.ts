class TenantDetails {
  firstName: string;
  lastName: string;
  tenantId: string;
  city: string;
  number: number;
  street: string;
  passcode: number;
  apartmentNumber: string;

  constructor(visitDetails: any) {
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

class OccupancyDetails {
  visitDate: Date;
  occupancyDate: Date;
  lastVisitDate: Date;
  occupancyStatus: string;
  kidsUnder21: number;
  totalTenantsCount: number;

  constructor(visitDetails: any) {
    this.visitDate = new Date(visitDetails.TAR_BIKUR);
    this.occupancyDate = new Date(visitDetails.TARICHLUS);
    this.lastVisitDate = new Date(visitDetails.TARBIKURACHARON);
    this.occupancyStatus = visitDetails.MATZAVICHLUS;
    this.kidsUnder21 = visitDetails.YELADIMAD21;
    this.totalTenantsCount = visitDetails.MISNEFASHOT;
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

class PaymentAccount {
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

interface IDefect {
  rate: number;
  defectDescription?: string;
}

class MaintenanceVisit {
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

  constructor(visitDetails: any) {
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
  }
}

interface IOtherDefect {
  rate: Boolean;
  defectDescription?: string;
}

class OtherMaintenanceVisit {
  constructionAnomalies: IOtherDefect;
  othersHeatsWaterType: IOtherDefect;
  asbestos: IOtherDefect;
  smokeDetector: IOtherDefect;
  depreciationRelay: IOtherDefect;

  constructor(visitDetails: any) {
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

class TenantsDetails {
  mainTenant: Tenant;
  tenantPartner: Tenant | null;
  otherTenants: Nismach[] | null;

  constructor(visitDetails: any) {
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

export {};
