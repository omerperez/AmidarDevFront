/* eslint-disable array-callback-return */
import { getDateFormat } from "../../Utils/getDateFormat";

class apartmentVisitId {
  constructor(apartmentIdObj) {
    this.tenantId = apartmentIdObj.CICL_MIS_ZIHUY_0;
    this.lastName = apartmentIdObj.CICL_SCR_SHEM_MISHPACHA_0;
    this.firstName = apartmentIdObj.CICL_SCR_SHEM_PRATI_0;

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

class Apartment {
  constructor(apartment) {
    Object.keys(apartment).map((key) => {
      this[key] = apartment[key];
    });
  }
}

class ApartmentDetailsApi {
  constructor(apartment) {
    this.blockId = apartment.V_YOMAN_BIKUR_SHIKUN_0;
    this.buildingNumber = apartment.V_YOMAN_BIKUR_MIVNE_0;
    this.entrance = apartment.V_YOMAN_BIKUR_KNISA_0;
    this.flatId = apartment.V_YOMAN_BIKUR_DIRA_0;
    this.personId = apartment.V_YOMAN_BIKUR_MIS_ZIHUY_0;
  }
}

export { Apartment, ApartmentDetailsApi, apartmentVisitId };
