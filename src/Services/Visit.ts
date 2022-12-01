import { RefObject } from "react";
import {
  isExistsItemsList,
  maintenanceQualityList,
  selectsLists,
} from "../Assets/Visit/Maintenance";
import {
  MaintenanceVisit,
  OtherMaintenanceVisit,
} from "../Data/Builders/Visit";
import {
  IDefect,
  IListsOfSelect,
  IOtherDefect,
} from "../Data/Interfaces/Visit";
import { IRepresentativeApartment } from "../Data/Interfaces/Home";
import HttpConstans from "../Assets/Http";
import HttpService from "../Services/Http";

const isDefectUncompleted = (currentVisit: MaintenanceVisit) => {
  let indexLocation: number[];
  indexLocation = maintenanceQualityList.map((defect) => {
    const tempValue = currentVisit[
      defect.name as keyof MaintenanceVisit
    ] as IDefect;
    return tempValue && tempValue.rate !== -1 ? -1 : defect.indexLocation;
  });
  return findIndexLocationIfExist(indexLocation);
};

const isOtherDefectUncompleted = (otherDefects: OtherMaintenanceVisit) => {
  let indexLocation: number[];
  indexLocation = isExistsItemsList.map((defect) => {
    const tempValue = otherDefects[
      defect.name as keyof OtherMaintenanceVisit
    ] as IOtherDefect;
    return tempValue && (tempValue.rate === false || tempValue.rate === true)
      ? -1
      : defect.indexLocation;
  });
  return findIndexLocationIfExist(indexLocation);
};

const getIncompleteFields = (currentVisit: MaintenanceVisit) => {
  if (currentVisit) {
    let indexLocation = isDefectUncompleted(currentVisit);
    if (indexLocation !== -1) return indexLocation;
    indexLocation = isOtherDefectUncompleted(
      currentVisit.otherMaintenanceVisitDetails
    );
    return indexLocation;
  }
  return 1;
};

const minRateForNoDescriptionRequire = 4;

const createMaintenanceVisitObject = (
  elementsRef: RefObject<any>,
  isExistsElementRef: RefObject<any>,
  returnObject: MaintenanceVisit
) => {
  let maintenanceVisitValues = returnObject;
  maintenanceQualityList.map((item) => {
    return ((
      maintenanceVisitValues[item.name as keyof MaintenanceVisit] as IDefect
    ).defectDescription =
      elementsRef?.current[item.indexLocation].current.value);
  });

  isExistsItemsList.map((item) => {
    return ((
      maintenanceVisitValues.otherMaintenanceVisitDetails[
        item.name as keyof OtherMaintenanceVisit
      ] as IOtherDefect
    ).defectDescription =
      isExistsElementRef?.current[item.indexLocation].current.value);
  });
  return maintenanceVisitValues;
};

const isDefectRequiredTextProper = (
  currentVisit: MaintenanceVisit,
  elementsRef: RefObject<any>
) => {
  let indexLocation: number[];
  indexLocation = maintenanceQualityList.map((defect) => {
    const tempValue = currentVisit[
      defect.name as keyof MaintenanceVisit
    ] as IDefect;
    return tempValue.rate < minRateForNoDescriptionRequire &&
      elementsRef?.current[defect.indexLocation].current.value === ""
      ? defect.indexLocation
      : -1;
  });
  return findIndexLocationIfExist(indexLocation);
};

const findIndexLocationIfExist = (indexLocationArray: number[]) => {
  if (indexLocationArray) {
    const uncompletedDefects = indexLocationArray.filter((value) => {
      return value !== -1;
    });
    return uncompletedDefects.length > 0 ? uncompletedDefects[0] : -1;
  }
  return -1;
};

const isOtherDefectRequiredTextProper = (
  otherDefect: OtherMaintenanceVisit,
  isExistsElementRef: RefObject<any>
) => {
  let indexLocation: number[];
  indexLocation = isExistsItemsList.map((defect) => {
    const tempValue = otherDefect[
      defect.name as keyof OtherMaintenanceVisit
    ] as IOtherDefect;
    return tempValue.rate === true &&
      isExistsElementRef?.current[defect.indexLocation].current.value === ""
      ? defect.indexLocation
      : -1;
  });
  return findIndexLocationIfExist(indexLocation);
};

const isFormDescriptionsFieldsFilled = (
  currentVisit: MaintenanceVisit,
  elementsRef: RefObject<any>,
  isExistsElementRef: RefObject<any>
) => {
  let defectTextRequired = isDefectRequiredTextProper(
    currentVisit,
    elementsRef
  );
  if (defectTextRequired !== -1) return defectTextRequired;

  defectTextRequired = isOtherDefectRequiredTextProper(
    currentVisit.otherMaintenanceVisitDetails,
    isExistsElementRef
  );
  return defectTextRequired;
};

const getTableCode = async () => {
  const response = await HttpService.postRequest(HttpConstans.tableCodeApi);
  const codesResponse =
    response.bm_tables_codesTableArray.bm_tables_codesArrayItem;

  const map = new Map();

  Object.keys(selectsLists).map((key) => {
    return map.set(selectsLists[key as keyof IListsOfSelect], []);
  });

  for (let i = 0; i < codesResponse.length; i++) {
    map
      .get(selectsLists[codesResponse[i].TABLENAME as keyof IListsOfSelect])
      .push(codesResponse[i]);
  }

  return map;
};

const getApartment = async (apartment: { [k: string]: string }) => {
  const response = await HttpService.postRequest(
    HttpConstans.apartmentDetailsApi,
    apartment
  );
  const apartmentIdResponse = response.bm_get_pirtei_zihuy_db_hubTableArray;
  return apartmentIdResponse.bm_get_pirtei_zihuy_db_hubArrayItem;
};

const getVisitDetails = async (apartment: IRepresentativeApartment) => {
  const requstObjData = {
    pShikun: apartment.blockId,
    pMivne: apartment.buildingNumber,
    pKnisa: apartment.entrance,
    pDira: apartment.flatId,
    pZihuy: apartment.personId,
  };

  const response = await HttpService.postRequest(
    HttpConstans.apartmentDetailsApi,
    requstObjData,
    "urlencoded"
  );

  const apartmentIdResponse = response.bmn_Sel_BikurTableArray;

  return apartmentIdResponse.bmn_Sel_BikurArrayItem;
};

export {
  getApartment,
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
  getVisitDetails,
  createMaintenanceVisitObject,
  getTableCode,
};
