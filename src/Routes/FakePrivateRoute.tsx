import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { contexts } from "../Contexts/ContextsExports";
import { AuthContextType } from "../Data/Types/Auth";
import Loading from "../Layouts/Loading";
import TopBar from "../Layouts/Navigation/TopBar";
import CookiesService from "../Services/Cookies";

interface PrivateRouteProps {
  children: JSX.Element;
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { authState, login, logout } = useContext(
    contexts.Auth,
  ) as AuthContextType;
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const token = CookiesService.getToken();
    if (token) {
      const verifyTokenStatus = {
        id: "U9628",
        fullName: "עומר פרץ",
        mobileNumber: "0522520484",
      };
      if (verifyTokenStatus.id === CookiesService.getUserId()) {
        login({
          ...verifyTokenStatus,
          token: token,
        });
      } else {
        logout();
      }
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading loadingTitle="אנא המתן" />;
  }

  return authState.token !== "" ? (
    <div className="visit-page-layout">
      <TopBar />
      {children}
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
