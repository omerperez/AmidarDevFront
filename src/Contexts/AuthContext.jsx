import React, { useReducer, createContext } from "react";

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

const reducer = (visitState, action) => {
  switch (action.type) {
    case "login":
      return (visitState.currentUser = action.currentUser);
    case "logout":
      return (visitState.logout = null);
    default:
      return visitState;
  }
};

export default function VisitProvider({ children }) {
  const [visitState, dispatch] = useReducer(reducer, initialState);

  function login(currentUser) {
    dispatch({ type: "login", currentUser: currentUser });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const value = {
    visitState,
    initialState,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
