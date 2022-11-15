import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { contexts } from "../Contexts/ContextsExports";

import { CookiesService } from "../Services/Cookies";

interface PublicRouteProp {
  children: JSX.Element;
}
export default function PublicRoute({ children }: PublicRouteProp) {
  const { authState, authDispatch } = useContext(contexts.Auth);

  useEffect(() => {
    const userId = CookiesService.getUserId();
    if (userId !== undefined) {
      authDispatch({ type: "login", currentUserId: userId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authState.id ? <Navigate to="/homepage" /> : children;
}
