import axios from "axios";
// import { User } from "../../Data/Builders/User";

// const baseUrl = process.env.REACT_APP_BASE_URL;
// const emailToTenantApi = "bm_emailToCustomer";

const jsonContentType = { "Content-Type": "application/json" };
// const systemUser = new User("Y8271", {
//   password: "VCOG01",
//   employeeNumber: "8271",
//   countOfRows: "numOfRowsInTable",
// });

const userProperties = {
  //   username: "Y8271",
  //   password: "VCOG01",
  //   pMis_oved: "8271",
  //   numOfRowsInTable: 1000,
  json: "true",
  useLabelsAsKeys: "true",
  numOfRowsInTable: "20",
};

const sendEmailToTenant = async ({ emailDetails }) => {
  let data = {
    ...emailDetails,
    ...userProperties,
  };

  let response = await axios.post(
    // baseUrl + emailToTenantApi,
    "http://fr11op2:7001/ServiceManager/Macro/ExecMacro/bm_emailToCustomer",
    data,
    jsonContentType
  );
  const diaryVisitArray = response.data.Response.bm_Yoman_BikurimTableArray;
  return diaryVisitArray.bm_Yoman_BikurimArrayItem;
};

const EmailService = {
  sendEmailToTenant: sendEmailToTenant,
};
export { EmailService };
