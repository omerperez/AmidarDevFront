const systemUser = {
  B1_USER_SCR_0: "Y8271",
  B1_ZEHUT_0: "VCOG01",
  Mis_oved: "8271",
  numOfRowsInTable: "numOfRowsInTable",
};

const jsonHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

const urlencodedHeader = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};

const baseUrl = process.env.REACT_APP_BASE_URL ?? "";
const apartmentDetailsApi = process.env.REACT_APP_APARTMENT_DETAILS ?? "";
const tableCodeApi = process.env.REACT_APP_TABLES_CODES ?? "";
const connectionValidationApi = process.env.REACT_APP_CONNECTION_API ?? "";
const authApi = process.env.REACT_APP_AUTH_API ?? "";
const verification = process.env.REACT_APP_VERIFY_API ?? "";

export default {
  jsonHeader,
  systemUser,
  baseUrl,
  apartmentDetailsApi,
  tableCodeApi,
  urlencodedHeader,
  connectionValidationApi,
  authApi,
  verification,
};
