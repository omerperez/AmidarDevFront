import { CameraAlt, Collections } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import { RepresentativeApartment } from "../Data/Builders/Home";
import { IRepresentativeApartment } from "../Data/Interfaces/Home";
import { VisitContextType } from "../Data/Types/Visit";
import idb from "../db/localforage";
import Camera from "../Features/Camera";
import ExistVisitPopup from "../Layouts/ExistVisitPopup";
import Loading from "../Layouts/Loading";
import "../Layouts/Style/CSS/Visit.css";
import Http from "../Services/Http";
import { getVisitDetails } from "../Services/Visit";

export default function VisitPage() {
  const [searchParams] = useSearchParams();
  const { visitState, initVisit } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [loading, setLoading] = useState(true);
  const [camera, setCamera] = useState<Boolean>(false);
  const [representativeNumber, setRepresentativeNumber] = useState<string>("");

  useMemo(() => {
    if (visitState.activeStep === 0) {
      const fetchData = async () => {
        if (searchParams) {
          const currentApartment = Object.fromEntries([...searchParams]);
          setRepresentativeNumber(
            `${currentApartment.blockId}-${currentApartment.buildingNumber}-${currentApartment.entrance}-${currentApartment.flatId}`
          );
          const currentVisit = await getVisitDetails(
            new RepresentativeApartment(currentApartment)
          );
          if (currentVisit) {
            initVisit({ ...currentVisit, activeStep: 0 });
          }
          setLoading(false);
        }
      };

      Http.isConnectionPropper()
        .then(() => {
          console.log("Online Mode");
          fetchData();
        })
        .catch(async () => {
          console.log("Offline Mode");
          const currentApartment = Object.fromEntries([...searchParams]);
          const apartment: IRepresentativeApartment = {
            blockId: currentApartment.blockId,
            buildingNumber: currentApartment.buildingNumber,
            entrance: currentApartment.entrance,
            flatId: currentApartment.flatId,
            personId: currentApartment.personId,
          };
          const userdata = await idb.getFromDataDbById(apartment);
          if (userdata) {
            initVisit({ ...userdata, activeStep: 0 });
            setLoading(false);
          }
        });
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
