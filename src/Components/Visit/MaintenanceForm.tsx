import { useRef, createRef, useState, useContext, Ref } from "react";
import useForm from "../../Hooks/useForm";
import QualityRating from "./MaintenanceComponents/QualityRating";
import IsExistInput from "./MaintenanceComponents/IsExistInput";
import SubPagesTitle from "./SubPageTitle";
import Alert from "../Global/Alert";
import {
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
} from "../../Services/Visit";
import {
  maintenanceQualityList,
  isExistsItemsList,
} from "../../Assets/Visit/Maintenance";
import ApartmentDetails from "./MaintenanceComponents/ApartmentDetails";
import { Grid } from "@mui/material";
import { contexts } from "../../Contexts/ContextsExports";
import { MaintenanceFormValues } from "../../Builders/Visit";
import { MaintenanceVisit } from "../../Types/Visit";
import { IDefect } from "../../Interfaces/Visit";

export default function MaintenanceForm() {
  const [values, handleChange] = useForm();
  const [error, setError] = useState("");
  const { visitState, visitDispatch } = useContext(contexts.Visit);

  const elementsRef: Ref<any> = useRef(
    maintenanceQualityList.map(() => createRef()),
  );

  const onSubmit = () => {
    const incompleteFieldsIndexLocation = getIncompleteFields(values);
    const incompleteDescriptionsIndexLocation = isFormDescriptionsFieldsFilled(
      values,
      elementsRef,
    );
    if (incompleteFieldsIndexLocation >= 0) {
      elementsRef.current[incompleteFieldsIndexLocation].current.scrollIntoView(
        {
          behavior: "smooth",
        },
      );
      return setError("בבקשה מלא את כל השדות");
    } else if (incompleteDescriptionsIndexLocation >= 0) {
      elementsRef.current[
        incompleteDescriptionsIndexLocation
      ].current.scrollIntoView({ behavior: "smooth" });
      return setError("בבקשה מלא הערות בליקויים שאינם תקינים");
    }
    const maintenanceForm = new MaintenanceFormValues(values, elementsRef);
    visitDispatch({
      type: "setMaintenanceVisit",
      maintenanceVisit: new MaintenanceVisit(null),
      // maintenanceForm,
    });
  };

  return (
    <div className="maintenance-layout">
      <SubPagesTitle title={"אחזקה"} fontSize={"32"} />
      {error && <Alert title={"שגיאה"} text={error} severity={"error"} />}
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} className="white-box">
          <ApartmentDetails
            apartmentMaintenanceDetails={
              visitState.maintenanceVisit.apartmentDetails
            }
          />
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
                key={`qualityRating-${item.title}-${index}`}
                onChange={handleChange}
                options={values}
                defaultValue={
                  visitState.maintenanceVisit[
                    item.name as keyof MaintenanceVisit
                  ] as IDefect
                }
                ref={elementsRef.current[index]}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} className="mb-40">
          <Grid container spacing={0}>
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
                    key={`itemStatus-${item.title}-${index}`}
                    onChange={handleChange}
                    options={values}
                    ref={elementsRef.current[index]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
