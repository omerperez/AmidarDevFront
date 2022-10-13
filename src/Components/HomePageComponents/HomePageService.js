import axios from "axios";
import { User, ApplicationUser } from "../../Data/Builders/User";
import { formsStatus } from "../../Services/Hub/HubClasses";

const baseUrl = process.env.REACT_APP_BASE_URL;
const visitCalenderApi = process.env.REACT_APP_VISIT_DIARY_API;
const advanceSearchApi = process.env.REACT_APP_VISIT_DIARY_SEARCH_API;
const apartmentDetailsApi = process.env.REACT_APP_IDENTIFY_INFORMATION;
// const mobileNumberApi = process.env.REACT_APP_GET_PHONE_NUMBER;
const getEmployeePropertiesByUserId =
  process.env.REACT_APP_GET_USER_PROPERTIES_BY_EMPLOYEE_ID;

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

const getEmployeeProperties = async (userId) => {
  let response = await axios.post(
    baseUrl + getEmployeePropertiesByUserId,
    { pMis_oved: userId },
    jsonContentType
  );
  const employeeTableData = await response.data.Response.bm_rakazimTableArray;
  const applicationUser = new ApplicationUser(
    userId,
    employeeTableData.bm_rakazimArrayItem[0]
  );
  return applicationUser;
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
  // const url = baseUrl + advanceSearchApi;
  // let response = sendPostRequest(url, allPostData, null);
  let response = await axios.post(
    baseUrl + advanceSearchApi,
    allPostData,
    jsonContentType
  );
  const diaryVisitArray =
    response.data.Response.bm_Yoman_Bikurim_searchTableArray;

  return diaryVisitArray.bm_Yoman_Bikurim_searchArrayItem;
};

const formStatusRequest = async (currentApartment) => {
  const dataObj = {
    FormsUrl: "http://fr11opdev/forms/frmservlet?config=orapl_tst",
    FormsUrlDB: "jdbc:oracle:thin:@oravc:1521:ogdanvc",
    triggerServices: {
      bm_select_knisot: {
        customKeys: {
          FormsUrl: "jdbc:oracle:thin:@oravc:1521:ogdanvc",
          pShikun: "2040",
          pMivne: "8005",
          pKnisa: "1",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "TableArray",
        priority: 1,
        callback: "bmSelectKnisot",
      },
      bm_get_pirtei_zihuy_db_hub: {
        customKeys: {
          FormsUrl: "jdbc:oracle:thin:@oravc:1521:ogdanvc",
          blockId: "2040",
          buildingNumber: "8005",
          entrance: "1",
          flatId: "010",
          personId: "010403970",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "TableArray",
        callback: "applyPirteiZihui",
        priority: 2,
      },
      bm_exists_bikur_ichlus_db_hub: {
        keys: [
          "FormsUrlDB",
          "blockId",
          "buildingNumber",
          "entrance",
          "number",
          "personId",
        ],
        extract: "TableArray",
        callback: "bmExistsBikurIchlusDb",
        priority: 3,
      },
      bm_select_phones_db_hub: {
        keys: ["FormsUrlDB", "personId"],
        extract: "TableArray",
        callback: "bmSelectPhonesDbHub",
        priority: 4,
      },
      bm_select_choze_status_hub: {
        keys: ["FormsUrlDB"],
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmSelectChozeStatus",
        priority: 5,
      },
      bm_getLastVisitDate_hub: {
        keys: ["FormsUrlDB", "userId"],
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmGetLastVisitDate",
        priority: 7,
      },
      bm_select_cheder_bitachon_hub: {
        customKeys: {
          FormsUrl: "jdbc:oracle:thin:@oravc:1521:ogdanvc",
          B1_USER_SCR_0: "Y8271",
          B1_ZEHUT_0: "VCOG01",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmSelectChederBitachon",
        priority: 8,
      },
      bm_getAchazaka_hub: {
        keys: ["FormsUrlDB"],
        extract: "TableArray",
        extractAs: "array",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmGetAchzakaHub",
        priority: 9,
      },
      bm_getNismachim_hub: {
        keys: ["FormsUrlDB", "personId"],
        extract: "TableArray",
        extractAs: "array",
        callback: "bmGetNismachim",
        priority: 10,
      },
      bm_select_yoman_visit_hub: {
        keys: ["FormsUrlDB", "personId"],
        extract: "TableArray",
        callback: "bmSelectYomanVisit",
        priority: 11,
      },
      bm_getFullDetails_hub: {
        customKeys: {
          FormsUrl: "http://fr11opdev/forms/frmservlet?config=orapl_tst",
          CICL_SCR_SHIKUN_0: "2040",
          CICL_SCR_MIVNE_0: "8005",
          CICL_SCR_KNISA_0: "1",
          CICL_SCR_DIRA_0: "010",
          CICL_SCR_TEUDAT_ZEHUT_0: "010403970",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "Elements",
        callback: "bmGetFullDetailsHub",
        priority: 6,
      },
      bm_isTazhirDayar_js: {
        customKeys: {
          FormsUrl: "jdbc:oracle:thin:@oravc:1521:ogdanvc",
          B1_USER_SCR_0: "Y8271",
          B1_ZEHUT_0: "VCOG01",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "Elements",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            IdDayarRashi: "CICL_SCR_TEUDAT_ZEHUT_COPY_0",
          },
          {
            IdDayarMekurav: "CICL_SCR_MIS_ZIHUY_MEKORAV_0",
          },
        ],
        callback: "bmIsTazhirDayar",
        priority: 12,
      },
      bm_isGarBegapo_hub: {
        keys: ["FormsUrlDB"],
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmIsGarBegapoHub",
        priority: 13,
      },
      bm_isBikurKashish_hub: {
        keys: ["FormsUrlDB", "personId"],
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmIsBikurKashishHub",
        priority: 14,
      },
      bm_isTama38_hub: {
        keys: ["FormsUrlDB"],
        extract: "TableArray",
        dependOn: "bmGetFullDetailsHub",
        dependOnKeys: [
          {
            number: "CICL_MIS_DIRA_0",
          },
        ],
        callback: "bmIsTama38Hub",
        priority: 15,
      },
      bm_getTenantDetails: {
        customKeys: {
          FormsUrl: "http://fr11opdev/forms/frmservlet?config=orapl_tst",
          CICL_SCR_SHIKUN_0: "2040",
          CICL_SCR_MIVNE_0: "8005",
          CICL_SCR_KNISA_0: "1",
          CICL_SCR_DIRA_0: "010",
          CICL_SCR_TEUDAT_ZEHUT_0: "010403970",
          MISH_PRATI_MIS_ZIHUY_0: "010403970",
          userid: "Y8271/VCOG01@vcogdan",
        },
        extract: "Elements",
        callback: "bmGetTenantDetails",
        priority: 5,
      },
      bm_Mishtaknim_hub: {
        keys: ["FormsUrlDB", "personId"],
        extract: "TableArray",
        callback: "bmMishtaknimHub",
        priority: 3,
      },
    },
    matalData: {
      employeeId: "Y8271",
      employeePass: "VCOG01",
    },
    number: "010",
    flatId: "010",
    entrance: "1",
    floor: "03",
    houseNumber: "5",
    buildingNumber: "8005",
    city: "חולון",
    street: "טרומפלדור",
    blockId: "2040",
    lastVisitDate: "07/04/2021",
    personName: "מנזלוביץ חוה",
    personId: "010403970",
  };

  let allPostData = {
    ...systemUser,
    ...dataObj,
  };
  let response = await axios.post(
    baseUrl + "services_hub",
    allPostData,
    jsonContentType
  );

  const data = response.data.Response.services_hubElements.report.delayedFns;
  const formDataStatus = new formsStatus(data);
  return formDataStatus;
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

export {
  getDiaryVisitData,
  getAdvanceSearchData,
  getApartment,
  getEmployeeProperties,
  formStatusRequest,
};
