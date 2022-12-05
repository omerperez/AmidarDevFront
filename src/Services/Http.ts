import axios from "axios";
import HttpConstans from "../Assets/Http";

async function postRequest(
  endpoint: string,
  data?: { [key: string]: string | number },
  header?: string
) {
  let headerObj = {};
  const requestData = {
    ...HttpConstans.systemUser,
    ...data,
  };
  if (header && header === "urlencoded") {
    headerObj = HttpConstans.urlencodedHeader;
  } else {
    headerObj = HttpConstans.jsonHeader;
  }
  const response = await axios.post(
    HttpConstans.baseUrl + endpoint,
    requestData,
    headerObj
  );
  return response.data.Response;
}

async function isConnectionPropper() {
  let baseResponse = await axios.post(
    HttpConstans.baseUrl + HttpConstans.connectionValidationApi,
    HttpConstans.systemUser,
    { timeout: 2000 }
  );
  return baseResponse.status;
  // throw "error";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { postRequest, isConnectionPropper };
