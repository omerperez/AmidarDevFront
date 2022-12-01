import { CameraAlt, Collections } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tenant_3 } from "../Assets/FakeData/Fake";
import GenericDialog from "../Components/Global/GenericDialog";
import AccountStatus from "../Components/Visit/AccountStatus";
import CostumerDetails from "../Components/Visit/CostumerDetails";
import Forms from "../Components/Visit/Forms";
import Gallery from "../Components/Visit/Gallery";
import LastStep from "../Components/Visit/LastStep";
import MaintenanceForm from "../Components/Visit/MaintenanceForm";
import OccupancyForm from "../Components/Visit/OccupancyForm";
import Stepper from "../Components/Visit/Stepper";
import SummaryVisit from "../Components/Visit/SummaryVisit";
import { contexts } from "../Contexts/ContextsExports";
import { VisitState } from "../Data/Builders/Visit";
import { VisitContextType } from "../Data/Types/Visit";
import Camera from "../Features/Camera";
import ExistVisitPopup from "../Layouts/ExistVisitPopup";
import Loading from "../Layouts/Loading";
import "../Layouts/Style/CSS/Visit.css";
import { getTableCode } from "../Services/Visit";

export default function VisitFakePage() {
  const [searchParams] = useSearchParams();
  const { visitState, initVisit, setTableCode } = useContext(
    contexts.Visit,
  ) as VisitContextType;
  const [loading, setLoading] = useState(true);
  const [camera, setCamera] = useState<Boolean>(false);
  const [representativeNumber, setRepresentativeNumber] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTableCode(true);
      setTableCode(response);
    };
    fetchData();
  }, []);

  useMemo(() => {
    if (visitState.activeStep === 0) {
      const [element] = tenant_3;
      if (element) {
        const initVisitState = new VisitState(element);
        initVisit({ ...initVisitState, activeStep: 0 });
      }
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, visitState.activeStep]);

  if (loading) {
    return <Loading />;
  }

  if (camera === true) {
    return <Camera closeCameraState={setCamera} />;
  }

  const SubPages = [
    <div className="mb-20 maintenance-layout">
      <CostumerDetails />
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
      <ExistVisitPopup />
      <div className="appartment-number">
        <h3 className="apartment-details-number">{representativeNumber}</h3>
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
      {visitState.activeStep !== 2 && (
        <div className="stepper-pos">
          <Stepper />
        </div>
      )}
      {SubPages[visitState.activeStep]}
    </div>
  );
}
