import axios from "axios";

const baseUrl = "http://fr11opdev:7001/ServiceManager/Macro/ExecMacro/";
const visitCalenderApi = "bm_Yoman_Bikurim";
const advanceSearchApi = "bm_Yoman_Bikurim_search";

const userProperties = {
  B1_USER_SCR_0: "Y8271",
  B1_ZEHUT_0: "VCOG01",
  pMis_oved: "8271",
  numOfRowsInTable: 1000,
};

const systemUser = {
  B1_USER_SCR_0: "Y8271",
  B1_ZEHUT_0: "VCOG01",
  Mis_oved: "8271",
  numOfRowsInTable: "numOfRowsInTable",
};

const getDiaryVisitData = async () => {
  let response = await axios.post(baseUrl + visitCalenderApi, userProperties, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const diaryVisitArray = response.data.Response.bm_Yoman_BikurimTableArray;
  return diaryVisitArray.bm_Yoman_BikurimArrayItem;
};

const getAdvanceSearchData = async (values: any) => {
  let allPostData = {
    ...systemUser,
    ...values,
  };
  let response = await axios.post(baseUrl + advanceSearchApi, allPostData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const diaryVisitArray =
    response.data.Response.bm_Yoman_Bikurim_searchTableArray;

  return diaryVisitArray.bm_Yoman_Bikurim_searchArrayItem;
};

export { getDiaryVisitData, getAdvanceSearchData };
