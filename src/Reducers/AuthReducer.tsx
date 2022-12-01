import { initialState } from "../Contexts/Auth";
import { IUser } from "../Data/Interfaces/Auth";
import CookiesService from "../Services/Cookies";
import { AuthAction } from "../Data/Types/Auth";

export default function authReducer(authState: IUser, action: AuthAction) {
  switch (action.type) {
    case "login":
      return (authState = {
        ...authState,
        id: action.userDetails.id,
        token: action.userDetails.token,
        mobileNumber: action.userDetails.mobileNumber,
        fullName: action.userDetails.fullName,
      });
    case "logout":
      CookiesService.removeUser();
      return (authState = initialState);
    default:
      return authState;
  }
}
