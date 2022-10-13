import React, { useReducer, createContext, useEffect } from "react";
import { getEmployeeProperties } from "../Components/HomePageComponents/HomePageService";
import { applicationCookie } from "../Services/CookieService/CookieService";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  token: "",
  company: "",
};

export const AuthContext = createContext(initialState);

const reducer = (authState, action) => {
  switch (action.type) {
    case "login":
      return (authState = {
        ...authState,
        id: action.currentUserId,
      });
    case "changeUserProperties":
      return (authState = {
        ...authState,
        firstName: action.firstName,
        lastName: action.lastName,
        phoneNumber: action.mobileNumber,
      });
    case "logout":
      applicationCookie.removeUserObj();
      return (authState = {
        ...authState,
        id: "",
      });
    default:
      return authState;
  }
};

export default function AuthPovider({ children }) {
  const [authState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData(employeeNumber) {
      const currentUser = await getEmployeeProperties(employeeNumber);
      login(currentUser.employeeNumber);
      changeUserProperties(
        currentUser.firstName,
        currentUser.lastName,
        currentUser.mobileNumber
      );
    }

    const userId = applicationCookie.getUserId();
    if (userId !== undefined) {
      fetchData(userId);
    }
  }, []);

  function login(currentUserId) {
    dispatch({
      type: "login",
      currentUserId: currentUserId,
    });
  }

  function changeUserProperties(firstName, lastName, mobileNumber) {
    dispatch({
      type: "changeUserProperties",
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
    });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const value = {
    authState,
    initialState,
    login,
    logout,
    changeUserProperties,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
