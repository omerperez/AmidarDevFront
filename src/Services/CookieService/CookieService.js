import Cookies from "universal-cookie";

const cookies = new Cookies();

const getUserId = () => {
  return cookies.get("userId");
};

const setUserId = (userId) => {
  return cookies.set("userId", userId);
};

const setUserObj = (user) => {
  cookies.set("userId", user.employeeNumber);
  cookies.set("firstName", user.firstName);
  cookies.set("lastName", user.lastName);
  cookies.set("phoneNumber", user.phoneNumber);
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

const removeProperties = (propName) => {
  return cookies.remove(`${propName}`);
};

const applicationCookie = {
  getCookie: cookies,
  getUserId: getUserId,
  setUserId: setUserId,
  removeProperties: removeProperties,
  removeUserId: removeUserId,
  setUserObj: setUserObj,
  removeUserObj: removeUserObj,
};
export { applicationCookie };
