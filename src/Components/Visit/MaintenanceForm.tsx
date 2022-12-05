import { Grid } from "@mui/material";
import { createRef, Ref, useContext, useRef, useState } from "react";
import { ERRORS_TITLE } from "../../Assets/Constants/Constants";
import { TITLES } from "../../Assets/Constants/VisitConstants";
import {
  isExistsItemsList,
  maintenanceQualityList,
} from "../../Assets/Visit/Maintenance";
import Stepper from "../../Components/Visit/Stepper";
import { contexts } from "../../Contexts/ContextsExports";
import { IDefect, IOtherDefect } from "../../Data/Interfaces/Visit";
import { VisitContextType } from "../../Data/Types/Visit";
import {
  createMaintenanceVisitObject,
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
} from "../../Services/Visit";
import Alert from "../Global/Alert";
import ApartmentDetails from "./MaintenanceComponents/ApartmentDetails";
import IsExistInput from "./MaintenanceComponents/IsExistInput";
import QualityRating from "./MaintenanceComponents/QualityRating";
import SubPagesTitle from "./SubPageTitle";

export default function MaintenanceForm() {
  const { visitState, setMaintenance } = useContext(
    contexts.Visit,
  ) as VisitContextType;

  const [error, setError] = useState("");

  const isExistsElementRef: Ref<any> = useRef(
    isExistsItemsList.map(() => createRef()),
  );

  const elementsRef: Ref<any> = useRef(
    maintenanceQualityList.map(() => createRef()),
  );

  const onSubmit = () => {
    const incompleteFieldsIndexLocation = getIncompleteFields(
      visitState.maintenanceVisit,
    );
    const maintenanceVisitValues = createMaintenanceVisitObject(
      elementsRef,
      isExistsElementRef,
      visitState.maintenanceVisit,
    );
    if (incompleteFieldsIndexLocation >= 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setError(ERRORS_TITLE.MISSING_FIELDS);
      return false;
    }
    const incompleteDescriptionsIndexLocation = isFormDescriptionsFieldsFilled(
      visitState.maintenanceVisit,
      elementsRef,
      isExistsElementRef,
    );
    if (incompleteDescriptionsIndexLocation >= 0) {
      setError(ERRORS_TITLE.NO_COMMENTS);
      return false;
    }
    setMaintenance(maintenanceVisitValues);
    return true;
  };

  return (
    <div className="maintenance-layout">
      <SubPagesTitle title={TITLES.MAINTENANCE} fontSize={"32"} />
      {error && <Alert title={"שגיאה"} text={error} />}
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} className="white-box">
          <ApartmentDetails maintenanceVisit={visitState.maintenanceVisit} />
        </Grid>
        {maintenanceQualityList.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              className="white-box mt-20"
              key={`maintenanceQualityList-Item-${index}`}
            >
              <QualityRating
                item={item}
                key={`qualityRating-${item.label}-${index}`}
                defaultValue={visitState.maintenanceVisit[item.name] as IDefect}
                ref={elementsRef.current[index]}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} className="mb-40">
          <Grid container>
            {isExistsItemsList.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  className="white-box mt-20"
                  key={`isExistsItemsList-Item-${index}`}
                >
                  <IsExistInput
                    item={item}
                    key={`itemStatus-${item.label}-${index}`}
                    otherDefect={
                      visitState.maintenanceVisit.otherMaintenanceVisitDetails[
                        item.name
                      ] as IOtherDefect
                    }
                    ref={isExistsElementRef.current[index]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <div className="stepper-pos">
        <Stepper onSubmit={onSubmit} />
      </div>
    </div>
  );
}
