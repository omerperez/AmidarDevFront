import { IApplicationUser, IUser } from "../Interfaces/Auth";

type AuthAction =
  | {
      type: `login`;
      userDetails: IApplicationUser;
    }
  | { type: "logout" };

type AuthContextType = {
  authState: IUser;
  login: (user: IApplicationUser) => void;
  logout: () => void;
};

export type { AuthAction, AuthContextType };
