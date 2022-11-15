import { useReducer, createContext, useEffect, Dispatch } from "react";
import { getEmployeeProperties } from "../Services/Home";
import { CookiesService } from "../Services/Cookies";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  token: string;
  company: string;
}

const initialState: IUser = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  token: "",
  company: "",
};

type AuthAction =
  | { type: "login"; currentUserId: string }
  | {
      type: "changeUserProperties";
      firstName: string;
      lastName: string;
      mobileNumber: string;
    }
  | { type: "logout" };

const authReducer = (authState: IUser, action: AuthAction) => {
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
      CookiesService.removeUserObj();
      return (authState = {
        ...authState,
        id: "",
      });
    default:
      return authState;
  }
};

export const AuthContext = createContext<{
  authState: IUser;
  authDispatch: Dispatch<AuthAction>;
}>({ authState: initialState, authDispatch: () => null });

export default function AuthPovider({ children }: any) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    async function fetchData(employeeNumber: string) {
      const currentUser = await getEmployeeProperties(employeeNumber);
      dispatch({ type: "login", currentUserId: currentUser.employeeNumber });
      dispatch({
        type: "changeUserProperties",
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        mobileNumber: currentUser.mobileNumber,
      });
    }

    const userId = CookiesService.getUserId();
    if (userId !== undefined) {
      fetchData(userId);
    }
  }, []);

  const value = {
    authState: authState,
    authDispatch: dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
