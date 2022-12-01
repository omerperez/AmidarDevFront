import {
  ApartmentDetails,
  ContactInformation,
  MaintenanceVisit,
  MainTenantDetails,
  OccupancyDetails,
  OtherMaintenanceVisit,
  TenantsOccupancyDetails,
  VisitGeneralDetails,
} from "../Data/Builders/Visit";
import {
  IDefect,
  IOtherDefect,
  ITenant,
  IVisitContext,
} from "../Data/Interfaces/Visit";

const apartmentDetailsKeys: { [key: string]: string } = {
  waterHeating: "CHIMUMMAYIM",
  securityRoom: "CHADARBITACHON",
  //
  tama: "CHADARBITACHON",
  actualUse: "CHADARBITACHON",
  //
  area: "SHETACH",
  rooms: "CHADARIM",
  halfRooms: "CATZAEICHADARIM",
  floor: "KOMA",
  stairs: "MADREGOT",
};
// "TZIYUN", "HEAROT"
const ratingKeys: { [key: string]: string } = {
  flooring: "RITZUF",
  enteryDoor: "KNISA",
  caulking: "ITUM",
  barsAndRailings: "SORAGIM",
  electricalSystem: "HASHMAL",
  pipingLeaks: "NEZILOT",
  insidesDoors: "PNIM",
  bathroomDoors: "DLATOT",
  windows: "CHALONOT",
  blinds: "TRISIM",
  kitchen: "MITBACH",
  toilet: "SHERUTIM",
  shower: "MIKLACHAT",
  generalApartmentCondition: "KLALI",
};

const otherMaintenanceKeys: { [key: string]: string } = {
  constructionAnomalies: "BNIYA",
  othersHeatsWaterType: "CHIMUM",
  asbestos: "ASBEST",
  smokeDetector: "GALAY",
  depreciationRelay: "PCHAT",
};

export default function convertClassToPostRequest(visitDitails: IVisitContext) {
  if (visitDitails) {
    const maintenance = convertMaintenanceVisit(visitDitails.maintenanceVisit);
    const generalDetails = convertGeneralDetails(
      visitDitails.identifyingInformation,
    );
    const occupancy = convertOccupancy(visitDitails.occupancyVisit);

    return {
      ...generalDetails,
      ...maintenance,
      ...occupancy,
    };
  }
  return null;
}

//TenantsOccupancyDetails
function convertOccupancy(occupancyVisit: TenantsOccupancyDetails) {
  const main = convertTenant(occupancyVisit.mainTenant, false);
  let partner = {};
  if (occupancyVisit.tenantPartner) {
    partner = convertTenant(occupancyVisit.tenantPartner, true);
  } else {
    partner = {
      BZZIHUY: "",
      BZNEWZIHUY: "",
      BZPRATI: "",
      BZMISHPACHA: "",
      BZSEX: "",
      BZTARLEDA: "",
      BZMATZAV: "",
    };
  }
  return {
    ...main,
    partner,
    ...occupancyVisit.tenantPartner,
  };
}

const ITenantKeys: { [key: string]: string } = {
  id: "ZIHUY",
  newId: "NEWZIHUY",
  firstName: "PRATI",
  lastName: "MISHPACHA",
  gender: "SEX",
  birthdate: "TARLEDA",
  maritalStatus: "MATZAV",
};

function convertTenant(tenant: ITenant, isPartner: boolean) {
  let tenantObj = {};
  Object.keys(tenant).map((key) => {
    if (key !== "fullName") {
      tenantObj = {
        ...tenantObj,
        [`${isPartner ? "BZ" : "DR"}${ITenantKeys[key]}`]:
          tenant[key as keyof ITenant],
      };
    }
  });
  return tenantObj;
}

// General Details
const mainTenantKeys: { [key: string]: string } = {
  firstName: "SHEMPRATI",
  lastName: "SHEMMISHPACHA",
  tenantId: "DRZIHUY",
  city: "ISHUV",
  number: "BAIT",
  street: "RECHOV",
  passcode: "MIKUD",
  apartmentNumber: "MIS_DIRA",
  isExistVisit: "ISEXISTSBIKUR",
};

function convertGeneralDetails(generalDetails: VisitGeneralDetails) {
  if (generalDetails) {
    const mainTenant = convertMainTenantDetails(
      generalDetails.mainTenantDetails,
    );
    const occupancy = convertOccupancyDetails(generalDetails.occupancyDetails);
    const contact = convertContactInformation(
      generalDetails.contactInformation,
    );
    return {
      ...mainTenant,
      ...occupancy,
      ...contact,
    };
  }
  return null;
}

function convertMainTenantDetails(tenant: MainTenantDetails) {
  let mainTenant = {};
  Object.keys(tenant).map((key) => {
    if (key !== "fullName") {
      mainTenant = {
        ...mainTenant,
        [mainTenantKeys[key]]: tenant[key as keyof MainTenantDetails],
      };
    }
  });
  return mainTenant;
}

const occupancyDetailsKeys: { [key: string]: string } = {
  visitDate: "TAR_BIKUR",
  occupancyDate: "TARICHLUS",
  lastVisitDate: "TARBIKURACHARON",
  occupancyStatus: "MATZAVICHLUS",
  kidsUnder21: "YELADIMAD21",
  totalTenantsCount: "MISNEFASHOT",
  contractStatus: "STATUSCHOZE",
};

function convertOccupancyDetails(occupancyDetails: OccupancyDetails) {
  let occupancy = {};
  Object.keys(occupancyDetails).map((key) => {
    if (key === "STATUSCHOZE") {
      occupancy = {
        ...occupancy,
        STATUSCHOZE:
          occupancyDetails[key as keyof OccupancyDetails] === "לא פעיל"
            ? "0"
            : "1",
      };
    } else {
      occupancy = {
        ...occupancy,
        [occupancyDetailsKeys[key]]:
          occupancyDetails[key as keyof OccupancyDetails],
      };
    }
  });
  return occupancy;
}

const removeSign = (mobile: string) => {
  if (mobile) {
    return mobile.replaceAll("-", "");
  }
  return "";
};

const contactInfoKeys: { [key: string]: string } = {
  mainPhoneNumber: "TELNAYAD",
  apartmentPhoneNumber: "TELDIRA",
  workPhoneNumber: "TELAVODA",
  email: "DOARELECTRONI",
  firstContactName: "TITLENOSAF",
  firstContactPhoneNumber: "TELNOSAF",
  secondContactName: "TITLENOSAF2",
  secondContactPhoneNumber: "TELNOSAF",
  otherContactDetailsComment: "TELHEAROT",
};

function convertContactInformation(contactInfo: ContactInformation) {
  let contact = {};
  Object.keys(contactInfo).map((key) => {
    if (key === "TELHEAROT") {
      contact = {
        ...contact,
        TELHEAROT:
          contactInfo.otherContactDetailsComment === "אין הערות"
            ? ""
            : contactInfo.otherContactDetailsComment,
      };
    } else {
      const temp = contactInfo[key as keyof ContactInformation];
      contact = {
        ...contact,
        [contactInfoKeys[key]]: removeSign(temp ?? ""),
      };
    }
  });
  return contact;
}

// Maintenance Visit
function convertMaintenanceVisit(maintenanceVisit: MaintenanceVisit) {
  const apartmentDetails = convertApartmentDetails(
    maintenanceVisit.apartmentDetails,
  );
  const defects = convertDefect(maintenanceVisit);
  const otherDefects = convertOtherDefect(
    maintenanceVisit.otherMaintenanceVisitDetails,
  );
  return {
    ...defects,
    ...apartmentDetails,
    ...otherDefects,
  };
}

function convertOtherDefect(otherMaintenance: OtherMaintenanceVisit) {
  let otherDefects = {};
  Object.keys(otherMaintenance).map((key: string) => {
    const defect = otherMaintenance[
      key as keyof OtherMaintenanceVisit
    ] as IOtherDefect;
    otherDefects = {
      ...otherDefects,
      [`TZIYUN${ratingKeys[key]}`]: defect.rate ? "1" : "0",
      [`HEAROT${ratingKeys[key]}`]: defect.defectDescription,
    };
  });
  return otherDefects;
}

function convertDefect(maintenance: MaintenanceVisit) {
  let defects = {};
  Object.keys(maintenance).map((key) => {
    if (key !== "apartmentDetails" && key != "otherMaintenanceVisitDetails") {
      const defect = maintenance[key as keyof MaintenanceVisit] as IDefect;
      defects = {
        ...defects,
        [`TZIYUN${ratingKeys[key]}`]: defect.rate.toString(),
        [`HEAROT${ratingKeys[key]}`]: defect.defectDescription,
      };
    }
  });
  return defects;
}

function convertApartmentDetails(details: ApartmentDetails) {
  let apartmentDetails = {};
  Object.keys(details).map((key) => {
    apartmentDetails = {
      ...apartmentDetails,
      [apartmentDetailsKeys[key]]: details[key as keyof ApartmentDetails],
    };
  });
  return apartmentDetails;
}
