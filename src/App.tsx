import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import { providers } from "./Contexts/ContextsExports";
import PrivateRoute from "./Features/PrivateRoute";
import PublicRoute from "./Features/PublicRoute";
import LoginPage from "./Pages/Login";
import VisitPage from "./Pages/Visit";
import "./Layouts/Layout.css";

function App() {
  return (
    <BrowserRouter>
      <providers.Auth>
        <providers.Home>
          <providers.Visit>
            <Routes>
              <Route
                path="/login"
                element={<PublicRoute children={<LoginPage />} />}
              ></Route>
              <Route
                path="/"
                element={<PrivateRoute children={<HomePage />} />}
              ></Route>
              <Route
                path="/homepage"
                element={<PrivateRoute children={<HomePage />} />}
              ></Route>
              <Route
                path="/apartments/*"
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
