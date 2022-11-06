import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { applicationCookie } from "../CookieService/CookieService";

export default function PublicRoute({ children }) {
  const { authState, login } = useContext(AuthContext);

  useEffect(() => {
    const userId = applicationCookie.getUserId();
    if (userId !== undefined) {
      login(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authState.id ? <Navigate to="/homepage" /> : children;
}
