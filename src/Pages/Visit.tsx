import { useEffect, useState } from "react";
import Loading from "../Layouts/Loading";
import { getApartment, getVisitDetails } from "../Services/Visit";
import { useSearchParams } from "react-router-dom";
import { ApartmentGeneralDetails } from "../Builders/Visit";
import CostumerDetails from "../Components/Visit/CostumerDetails";
import AccountStatus from "../Components/Visit/AccountStatus";
import OccupancyForm from "../Components/Visit/OccupancyForm";
import Forms from "../Components/Visit/Forms";
import Stepper from "../Components/Visit/Stepper";
import { Fab } from "@mui/material";
import { Collections, CameraAlt } from "@mui/icons-material";
import MaintenanceForm from "../Components/Visit/MaintenanceForm";
import Camera from "../Features/Camera";
import Gallery from "../Components/Visit/Gallery";
import GenericDialog from "../Components/Global/GenericDialog";
import SummaryVisit from "../Components/Visit/SummaryVisit";
import LastStep from "../Components/Visit/LastStep";
import "../Layouts/Style/Visit.css";

export default function VisitPage() {
  const [searchParams] = useSearchParams();
  const [apartment, setApartment] = useState<ApartmentGeneralDetails | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [camera, setCamera] = useState<Boolean>(false);

  useEffect(() => {
    if (activeStep === 0) {
      const fetchData = async () => {
        if (searchParams) {
          const currentApartment = Object.fromEntries([...searchParams]);
          const response = await getVisitDetails(currentApartment);
          const [element] = await response;
          if (element) {
            setApartment(new ApartmentGeneralDetails(element));
          } else {
            setApartment(null);
          }
          setLoading(false);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, activeStep]);

  if (loading || apartment === null) {
    return <Loading />;
  }
  if (camera === true) {
    return <Camera closeCameraState={setCamera} />;
  }

  const SubPages = [
    <div className="mb-20 maintenance-layout">
      <CostumerDetails />
      {/* apartment={apartment} */}
    </div>,
    <div className="maintenance-layout">
      <AccountStatus />
    </div>,
    <MaintenanceForm />,
    <div className="mb-20 maintenance-layout">
      <OccupancyForm />
    </div>,
    <Forms />,
    <div className="mb-20 maintenance-layout">
      <LastStep />
    </div>,
    <SummaryVisit />,
  ];

  return (
    <div className="padding-layout">
      <div className="appartment-number">
        <h3 className="apartment-details-number">2040-8005-1-010</h3>
      </div>
      <div className="floating-img-btn">
        <GenericDialog
          children={
            <Fab color="primary" aria-label="gallery" className="fab-btn">
              <Collections />
            </Fab>
          }
          title="גלריה"
          content={<Gallery />}
        />
        <div className="mt-10">
          <Fab
            className="fab-btn"
            aria-label="camera"
            onClick={() => setCamera(true)}
          >
            <CameraAlt />
          </Fab>
        </div>
      </div>
      <div className="stepper-pos">
        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      {SubPages[activeStep]}
    </div>
  );
}
