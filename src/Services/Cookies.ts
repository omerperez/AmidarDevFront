import Cookies from "universal-cookie";
import { ApplicationUser } from "../Builders/Auth";

const cookies = new Cookies();

const getUserId = () => {
  return cookies.get("userId");
};

const setUserId = (userId: string) => {
  return cookies.set("userId", userId);
};

const setUserObj = (user: ApplicationUser) => {
  cookies.set("userId", user.employeeNumber);
  cookies.set("firstName", user.firstName);
  cookies.set("lastName", user.lastName);
  cookies.set("phoneNumber", user.employeeNumber);
  return;
};

const removeUserId = () => {
  return cookies.remove("userId");
};

const removeUserObj = () => {
  cookies.remove("userId");
  cookies.remove("firstName");
  cookies.remove("lastName");
  cookies.remove("phoneNumber");
  return;
};

const removeProperties = (propName: string) => {
  return cookies.remove(`${propName}`);
};

const CookiesService = {
  getCookie: cookies,
  getUserId: getUserId,
  setUserId: setUserId,
  removeProperties: removeProperties,
  removeUserId: removeUserId,
  setUserObj: setUserObj,
  removeUserObj: removeUserObj,
};
export { CookiesService };
