import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APARTMENTS, HOMEPAGE, LOGIN } from "./Assets/Constants/Constants";
import { providers } from "./Contexts/ContextsExports";
import HomeFakePages from "./FakePages/Home";
import LoginFakePages from "./FakePages/Login";
import VisitFakePages from "./FakePages/Visit";
import "./Layouts/Layout.css";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import VisitPage from "./Pages/Visit";
import FakeRouter from "./Routes/FakePrivateRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  useEffect(() => {}, []);
  const isFakeData = true;
  if (isFakeData) {
    return (
      <BrowserRouter>
        <providers.Auth>
          <providers.Home>
            <providers.Visit>
              <Routes>
                <Route
                  path={`/${LOGIN}`}
                  element={<PublicRoute children={<LoginFakePages />} />}
                ></Route>
                <Route
                  path="/"
                  element={<FakeRouter children={<HomeFakePages />} />}
                ></Route>
                <Route
                  path={`/${HOMEPAGE}`}
                  element={<FakeRouter children={<HomeFakePages />} />}
                ></Route>
                <Route
                  path={`/${APARTMENTS}/*`}
                  element={<FakeRouter children={<VisitFakePages />} />}
                ></Route>
              </Routes>
            </providers.Visit>
          </providers.Home>
        </providers.Auth>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <providers.Auth>
        <providers.Home>
          <providers.Visit>
            <Routes>
              <Route
                path={`/${LOGIN}`}
                element={<PublicRoute children={<LoginPage />} />}
              ></Route>
              <Route
                path="/"
                element={<PrivateRoute children={<HomePage />} />}
              ></Route>
              <Route
                path={`/${HOMEPAGE}`}
                element={<PrivateRoute children={<HomePage />} />}
              ></Route>
              <Route
                path={`/${APARTMENTS}/*`}
                element={<PrivateRoute children={<VisitPage />} />}
              ></Route>
            </Routes>
          </providers.Visit>
        </providers.Home>
      </providers.Auth>
    </BrowserRouter>
  );
}

export default App;
