import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APARTMENTS, HOMEPAGE, LOGIN } from "./Assets/Constants/Constants";
import { providers } from "./Contexts/ContextsExports";
import PrivateRoute from "./Routes/PrivateRoute";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import VisitPage from "./Pages/Visit";
import PublicRoute from "./Routes/PublicRoute";
import "./Layouts/Layout.css";

function App() {
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
