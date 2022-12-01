import { createContext, useReducer } from "react";
import {
  AuthProviderProps,
  IApplicationUser,
  IUser,
} from "../Data/Interfaces/Auth";
import { AuthContextType } from "../Data/Types/Auth";
import authReducer from "../Reducers/AuthReducer";

export const initialState: IUser = {
  id: "",
  fullName: "",
  mobileNumber: "",
  token: "",
  company: "",
};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthPovider({ children }: AuthProviderProps) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  function login(user: IApplicationUser) {
    dispatch({ type: "login", userDetails: user });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const value = {
    authState: authState,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
