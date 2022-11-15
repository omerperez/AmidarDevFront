import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { contexts } from "../Contexts/ContextsExports";
import TopBar from "../Layouts/Navigation/TopBar";
import { CookiesService } from "../Services/Cookies";

interface PrivateRouteProps {
  children: JSX.Element;
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { authState, authDispatch } = useContext(contexts.Auth);

  useEffect(() => {
    const userId = CookiesService.getUserId();
    if (userId !== undefined) {
      authDispatch({ type: "login", currentUserId: userId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authState.id !== "" ? (
    <div className="visit-page-layout">
      <TopBar />
      {children}
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
