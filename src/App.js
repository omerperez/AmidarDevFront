import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeProvider from "./Contexts/HomeContext";
import VisitProvider from "./Contexts/VisitContext";
import AppMenu from "./Layouts/TopNavigation/AppMenu";
import Main from "./Pages/HomePage";
import VisitPage from "./Pages/VisitPage";
// import MicrosoftLogin from "react-microsoft-login";

// https://ecom.gov.il/voucherspa/input/316?clear=true

function App() {
  // const authHandler = (err, data) => {
  //   console.log(err, data);
  // };
  {
    /* <MicrosoftLogin clientId={} authCallback={authHandler} /> */
  }

  return (
    <BrowserRouter>
      <HomeProvider>
        <VisitProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AppMenu />
                  <Main />
                </>
              }
            ></Route>
            <Route
              path="/visits"
              element={
                <>
                  <AppMenu />
                  <Main />
                </>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/apartments"
              element={
                <>
                  <AppMenu />
                  <VisitPage />
                </>
              }
            />
          </Routes>
        </VisitProvider>
      </HomeProvider>
    </BrowserRouter>
  );
}

export default App;
