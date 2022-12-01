import axios from "axios";
import { JSON_CONTENT } from "../Assets/Constants/Constants";
import HttpConstans from "../Assets/Http";

const verifyToken = async (token: string) => {
  // const baseUrl = "http://10.130.2.248:5000/verifyToken";

  const verificationApi = HttpConstans.authApi.concat(
    HttpConstans.verification
  );
  try {
    const response = await axios.post(verificationApi, {
      token: token,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const loginAuth = async (username: string, password: string) => {
  const baseUrl = HttpConstans.authApi.concat("login");
  const user = {
    username: username,
    password: password,
  };
  const response = await axios.post(baseUrl, user, JSON_CONTENT);
  return response.data;
};

const getWelcomeTitle = () => {
  const currentDate = new Date();
  let currentHour = currentDate.getHours();
  if (currentHour < 16 && currentHour >= 12) {
    return "צהריים טובים, ";
  } else if (currentHour >= 16 && currentHour < 18) {
    return "אחר הצהריים טובים, ";
  } else if (currentHour >= 18 && currentHour < 23) {
    return "ערב טוב, ";
  } else if (currentHour >= 23 && currentHour < 5) {
    return "לילה טוב, ";
  }
  return "בוקר טוב, ";
};
export { getWelcomeTitle, loginAuth, verifyToken };
