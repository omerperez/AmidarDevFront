import { CameraAlt, Collections } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fakeCodesResponse, tenant_2 } from "../Assets/FakeData/Fake";
import { selectsLists } from "../Assets/Visit/Maintenance";
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
import {
  IApartmentVisitResponse,
  IListsOfSelect,
  ITableCodeItem,
} from "../Data/Interfaces/Visit";
import { VisitContextType } from "../Data/Types/Visit";
import Camera from "../Features/Camera";
import ExistVisitPopup from "../Layouts/ExistVisitPopup";
import Loading from "../Layouts/Loading";
import "../Layouts/Style/CSS/Visit.css";

export default function VisitFakePage() {
  const [searchParams] = useSearchParams();
  const { visitState, initVisit } = useContext(
    contexts.Visit,
  ) as VisitContextType;
  const [loading, setLoading] = useState(true);
  const [camera, setCamera] = useState<Boolean>(false);
  const [representativeNumber, setRepresentativeNumber] = useState<string>("");

  useMemo(() => {
    const getFakeTablesCode = () => {
      const map = new Map();
      Object.keys(selectsLists).map((key) => {
        return map.set(selectsLists[key as keyof IListsOfSelect], []);
      });

      const codesResponse = fakeCodesResponse;

      for (let i = 0; i < codesResponse.length; i++) {
        map
          .get(selectsLists[codesResponse[i].TABLENAME as keyof IListsOfSelect])
          .push(codesResponse[i]);
      }
      return map as Map<string, ITableCodeItem[]>;
    };

    if (visitState.activeStep === 0) {
      const [element] = [tenant_2];
      const tablesCode = getFakeTablesCode();
      if (element && tablesCode) {
        const initVisitState = new VisitState(
          element as IApartmentVisitResponse,
          tablesCode,
        );
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
          title="??????????"
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
