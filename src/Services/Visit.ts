import axios from "axios";
import { RefObject } from "react";
import { maintenanceQualityList } from "../Assets/Visit/Maintenance";

const systemUser = {
  B1_USER_SCR_0: "Y8271",
  B1_ZEHUT_0: "VCOG01",
  Mis_oved: "8271",
  numOfRowsInTable: "numOfRowsInTable",
};

const baseUrl = "http://fr11opdev:7001/ServiceManager/Macro/ExecMacro/";
// const apartmentDetailsApi = "bm_get_pirtei_zihuy_db_hub";
const apartmentDetailsApi = "bmn_Sel_Bikur";

const getIncompleteFields = (values: any) => {
  if (Object.keys(values).length < maintenanceQualityList.length) {
    for (let index = 0; index < maintenanceQualityList.length; index++) {
      if (values[maintenanceQualityList[index].name] === undefined) {
        return maintenanceQualityList[index].indexLocation;
      }
    }
  }
  return -1;
};

const minRateForNoDescriptionRequire = 4;

const isFormDescriptionsFieldsFilled = (
  values: any,
  elementsRef?: RefObject<any>
) => {
  const rateLowerThanThree = Object.keys(values).filter(
    (itemRate) => values[itemRate] < minRateForNoDescriptionRequire
  );

  if (rateLowerThanThree.length > 0) {
    for (let index = 0; index < rateLowerThanThree.length; index++) {
      const currentItem = maintenanceQualityList.find(
        (it) => it.name === rateLowerThanThree[index]
      ) ?? { indexLocation: -1 };
      if (
        currentItem.indexLocation !== -1 &&
        elementsRef?.current[currentItem.indexLocation].current.value === ""
      ) {
        return currentItem.indexLocation;
      }
    }
  }
  return -1;
};

const getApartment = async (apartment: { [k: string]: string }) => {
  let allPostData = {
    ...systemUser,
    ...apartment,
  };

  let baseResponse = await axios.post(
    baseUrl + apartmentDetailsApi,
    allPostData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const apartmentIdResponse =
    baseResponse.data.Response.bm_get_pirtei_zihuy_db_hubTableArray;

  return apartmentIdResponse.bm_get_pirtei_zihuy_db_hubArrayItem;
};

const getVisitDetails = async (apartment: { [k: string]: string }) => {
  console.log(apartment);

  const requstObjData = {
    pShikun: apartment.blockId,
    pMivne: apartment.buildingNumber,
    pKnisa: apartment.entrance,
    pDira: apartment.flatId,
    pZihuy: apartment.personId,
  };

  let allPostData = {
    ...systemUser,
    ...apartment,
  };

  let baseResponse = await axios.post(
    baseUrl + "bm_get_pirtei_zihuy_db_hub",
    // apartmentDetailsApi,
    allPostData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // baseResponse.data.Response.bmn_Sel_BikurTableArray.bmn_Sel_BikurArrayItem[0];

  const apartmentIdResponse =
    baseResponse.data.Response.bm_get_pirtei_zihuy_db_hubTableArray;

  return apartmentIdResponse.bm_get_pirtei_zihuy_db_hubArrayItem;
};

export {
  getApartment,
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
  getVisitDetails,
};
