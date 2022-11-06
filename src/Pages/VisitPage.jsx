import React, { useEffect, useState, useContext } from "react";
import Loading from "../Layouts/Loading";
import {
  getApartment,
  formStatusRequest,
} from "../Components/HomePageComponents/HomePageService";
import { apartmentVisitId } from "../Data/Builders/Apartment";
import { useSearchParams } from "react-router-dom";
import { VisitContext } from "../Contexts/VisitContext";
import Panels from "../ComponentsNewUxUi/VisitsComponents/Panels";
import { Button, Grid } from "@mui/material";
import VisitStepper from "../ComponentsNewUxUi/Visit/Stepper";
import MaintenanceForm from "../ComponentsNewUxUi/VisitsComponents/Actions/MaintenanceVisit/MaintenanceForm";
import OccupancyForm from "../ComponentsNewUxUi/Visit/Actions/OccupancyVisitComponents/OccupancyForm";
import CostumerDetails from "../ComponentsNewUxUi/Visit/Actions/CostumerDetails/CostumerDetails";
import Stack from "@mui/material/Stack";
import Forms from "../ComponentsNewUxUi/Visit/Actions/Forms/Forms";
import Fab from "@mui/material/Fab";
import CollectionsIcon from "@mui/icons-material/Collections";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideoClass from "../Features/Video/VideoClass";
import AccountStatus from "../ComponentsNewUxUi/Visit/Actions/CostumerDetails/AccountStatus";

export default function VisitPage() {
  const [searchParams] = useSearchParams();
  const [apartment, setApartment] = useState();
  const [loading, setLoading] = useState(true);
  const { visitContextFunction } = useContext(VisitContext);
  const [activeStep, setActiveStep] = useState(0);
  const [camera, setCamera] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (activeStep === 0) {
      const fetchData = async () => {
        const currentApartment = Object.fromEntries([...searchParams]);
        const response = await getApartment(currentApartment);
        const formStatusRequestData = await formStatusRequest(currentApartment);

        const [element] = await response;
        if (element) {
          setApartment(new apartmentVisitId(element));
        } else {
          setApartment({});
        }
        if (formStatusRequestData) {
          visitContextFunction.setFormsFiles(formStatusRequestData);
        }
        setLoading(false);
      };
      fetchData();
    }
    if (activeStep === 5) {
      setShow(false);
      const timeId = setTimeout(() => {
        setShow(true);
      }, 3000);

      return () => {
        clearTimeout(timeId);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, activeStep]);

  if (loading || !show) {
    return <Loading />;
  }

  const visitPages = [
    <div className="mb-20 maintenance-layout">
      <CostumerDetails apartment={apartment} />
    </div>,
    <div className="maintenance-layout">
      <AccountStatus />
    </div>,
    <MaintenanceForm />,
    <div className="mb-20 maintenance-layout">
      <OccupancyForm />
    </div>,
    <Forms />,
    <h1>Done</h1>,
  ];

  if (camera === true) {
    return (
      <div>
        <Button
          variant="contained"
          className="bg-amidar-blue"
          onClick={() => setCamera(false)}
        >
          חזור
        </Button>
        <VideoClass />
      </div>
    );
  }
  // const visitPageSections = getVisitPageSections(apartment);

  return (
    <div className="padding-layout">
      <div className="appartment-number">
        {/* {apartment.number} */}
        <h2 className="text-color">2040-8005-1-010</h2>
      </div>
      <div className="floating-img-btn">
        <Fab color="primary" aria-label="gallery" className="fab-btn">
          <CollectionsIcon />
        </Fab>
        <div className="mt-10">
          <Fab
            className="fab-btn"
            aria-label="camera"
            onClick={() => setCamera(true)}
          >
            <CameraAltIcon />
          </Fab>
        </div>
      </div>

      <div className="stepper-pos">
        <VisitStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      {visitPages[activeStep]}
    </div>
    // <Panels currentApartment={apartment} />
  );
  // return <Sidebar key="sideBar-General" children={visitPageSections} />;
}
