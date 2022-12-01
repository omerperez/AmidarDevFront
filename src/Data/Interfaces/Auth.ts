interface IApplicationUser {
  id: string;
  fullName: string;
  mobileNumber: string;
  token: string;
}

interface IUser {
  id: string;
  fullName: string;
  mobileNumber: string;
  token: string;
  company: string;
}

interface AuthProviderProps {
  children: JSX.Element;
}

export type { IApplicationUser, IUser, AuthProviderProps };
