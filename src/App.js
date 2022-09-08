import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Actions from "./Components/VisitPageComponents/Sections/Actions";
import HomeProvider from "./Contexts/HomeContext";
import VisitProvider from "./Contexts/VisitContext";
import AppMenu from "./Layouts/TopNavigation/AppMenu";
import Main from "./Pages/HomePage";
import VisitPage from "./Pages/VisitPage";
// import PrinterWrapper from './PDF/PrinterWrapper';
// import VideoClass from './Video/VideoClass';
// import { Canvas } from './Drawer/Canvas'
// import { ClearCanvasButton } from './Drawer/ClearCanvasButton';

function App() {
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
          <Routes>
            <Route path="/form" element={<Actions />}></Route>
          </Routes>
        </VisitProvider>
      </HomeProvider>
    </BrowserRouter>
    // <>
    // <HomeProvider>
    //   <AppMenu />
    //   {/* <PrinterWrapper children={
    //   <>
    //     <ClearCanvasButton/>
    //     <Canvas/>
    //   </>
    //   }/> */}
    //   {/* <VideoClass /> */}
    //   <Main />
    // </HomeProvider>
    // </>
  );
}

export default App;
