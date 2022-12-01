import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { contexts } from "../Contexts/ContextsExports";
import { AuthContextType } from "../Data/Types/Auth";

interface PublicRouteProp {
  children: JSX.Element;
}

export default function PublicRoute({ children }: PublicRouteProp) {
  const { authState } = useContext(contexts.Auth) as AuthContextType;

  return authState.token ? <Navigate to="/homepage" /> : children;
}
