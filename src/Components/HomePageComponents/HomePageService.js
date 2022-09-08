import axios from "axios";
import { User } from "../../Data/Builders/User";

const baseUrl = process.env.REACT_APP_BASE_URL;
const visitCalenderApi = process.env.REACT_APP_VISIT_DIARY_API;
const advanceSearchApi = process.env.REACT_APP_VISIT_DIARY_SEARCH_API;
const apartmentDetailsApi = process.env.REACT_APP_IDENTIFY_INFORMATION;
const mobileNumberApi = process.env.REACT_APP_GET_PHONE_NUMBER;

const jsonContentType = { "Content-Type": "application/json" };
const systemUser = new User("Y8271", {
  password: "VCOG01",
  employeeNumber: "8271",
  countOfRows: "numOfRowsInTable",
});

const userProperties = {
  B1_USER_SCR_0: "Y8271",
  B1_ZEHUT_0: "VCOG01",
  pMis_oved: "8271",
  numOfRowsInTable: 1000,
};

const getDiaryVisitData = async () => {
  let response = await axios.post(
    baseUrl + visitCalenderApi,
    userProperties,
    jsonContentType
  );
  const diaryVisitArray = response.data.Response.bm_Yoman_BikurimTableArray;
  return diaryVisitArray.bm_Yoman_BikurimArrayItem;
};

const getAdvanceSearchData = async (values) => {
  let allPostData = {
    ...systemUser,
    ...values,
  };
  let response = await axios.post(
    baseUrl + advanceSearchApi,
    allPostData,
    jsonContentType
  );
  const diaryVisitArray =
    response.data.Response.bm_Yoman_Bikurim_searchTableArray;
  return diaryVisitArray.bm_Yoman_Bikurim_searchArrayItem;
};

const getApartment = async (apartment) => {
  let allPostData = {
    ...systemUser,
    ...apartment,
  };

  let baseResponse = await axios.post(
    baseUrl + apartmentDetailsApi,
    allPostData,
    jsonContentType
  );
  const apartmentIdResponse =
    baseResponse.data.Response.bm_get_pirtei_zihuy_db_hubTableArray;
  return apartmentIdResponse.bm_get_pirtei_zihuy_db_hubArrayItem;
};

export { getDiaryVisitData, getAdvanceSearchData, getApartment };
