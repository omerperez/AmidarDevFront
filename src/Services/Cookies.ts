/* eslint-disable import/no-anonymous-default-export */
import Cookies from "universal-cookie";
import { IApplicationUser } from "../Data/Interfaces/Auth";

const cookies = new Cookies();

const getToken = () => {
  const token = cookies.get("token");
  return token;
};

const getUserId = () => {
  return cookies.get("id");
};

const setUserObj = (applicationUser: IApplicationUser) => {
  removeUser();
  cookies.set("id", applicationUser.id);
  cookies.set("fullName", applicationUser.fullName);
  cookies.set("mobileNumber", applicationUser.mobileNumber);
  cookies.set("token", applicationUser.token);
  return;
};

const removeUser = () => {
  cookies.remove("token");
  cookies.remove("fullName");
  cookies.remove("mobileNumber");
  cookies.remove("id");
  return;
};

const removeProperties = (propName: string) => {
  return cookies.remove(`${propName}`);
};

export default {
  getToken,
  setUserObj,
  removeUser,
  removeProperties,
  getUserId,
};
