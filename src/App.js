import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPovider from "./Contexts/AuthContext";
import HomeProvider from "./Contexts/HomeContext";
import VisitProvider from "./Contexts/VisitContext";
import AppMenu from "./Layouts/TopNavigation/AppMenu";
import Main from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import VisitPage from "./Pages/VisitPage";
import PrivateRoute from "./Services/ApplicationRoutesService/PrivateRoute";
import PublicRoute from "./Services/ApplicationRoutesService/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <HomeProvider>
        <VisitProvider>
          <AuthPovider>
            <Routes>
              <Route
                path="/"
                element={<PublicRoute children={<LoginPage />} />}
              ></Route>
              <Route
                path="/login"
                element={<PublicRoute children={<LoginPage />} />}
              ></Route>
              <Route
                path="/homepage"
                element={
                  <PublicRoute
                    // PrivateRoute
                    children={
                      <>
                        <AppMenu />
                        <Main />
                      </>
                    }
                  />
                }
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/apartments"
                element={
                  // <PrivateRoute
                  // children={
                  <>
                    <AppMenu />
                    <VisitPage />
                  </>
                  //   }
                  // />
                }
              />
            </Routes>
          </AuthPovider>
        </VisitProvider>
      </HomeProvider>
    </BrowserRouter>
  );
}

export default App;
