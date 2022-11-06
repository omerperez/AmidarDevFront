import React, { useRef, createRef, useState, useContext } from "react";
import useForm from "../../../../Hooks/useForm";
import QualityRating from "./QualityRating";
import T from "./T";
import SectionTitle from "../../Layout/SectionTitle";
import FormAlert from "../../../../Components/VisitPageComponents/VisitPageLayout/FormAlert";
import { MaintenanceVisitClass } from "../../../../Data/Builders/MaintenanceVisit";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import { Button, Grid } from "@mui/material";
import SelectInput from "../../../Global/FieldsTypes/SelectInput";
import GenericInputForm from "../../../Global/FieldsTypes/GenericInputForm";
import {
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
} from "./CheckMaintenanceForm";
import {
  waterHeating,
  securityRoom,
  maintenanceQualityList,
  otherIssuesList,
} from "./MaintenanceVisitAssets";
import { VisitContext } from "../../../../Contexts/VisitContext";
import ApartmentDetails from "../../../Visit/Actions/CostumerDetails/ApartmentDetails";

export default function MaintenanceForm() {
  const [values, handleChange] = useForm();
  const [error, setError] = useState("");
  const [allDefectsAreNormal, setAllDefectsAreNormal] = useState(false);
  const { visitContextFunction } = useContext(VisitContext);

  const elementsRef = useRef(maintenanceQualityList.map(() => createRef()));

  const updateMaintenanceQuality = () => {
    setAllDefectsAreNormal(!allDefectsAreNormal);
  };

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
    const visitFinished = new MaintenanceVisitClass(values, elementsRef);
    visitContextFunction.setMaintenanceVisits(visitFinished);
  };

  const sx = {
    "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      height: "12px",
    },
  };

  return (
    <div className="section-general">
      <div className="maintenance-layout">
        <SectionTitle title={"אחזקה"} />
        {error && <FormAlert title={"שגיאה"} text={error} severity={"error"} />}
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <ApartmentDetails />
          </Grid>
          {maintenanceQualityList &&
            maintenanceQualityList.map((item, index) => {
              return (
                <Grid item xs={12} md={12}>
                  <QualityRating
                    item={item}
                    key={`qualityRating-${item.title}-${index}`}
                    onChange={handleChange}
                    options={values}
                    ref={elementsRef.current[index]}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12} className="mb-40">
            <Grid container spacing={2}>
              {otherIssuesList &&
                otherIssuesList.map((item, key) => {
                  return (
                    <Grid item xs={12}>
                      <T
                        item={item}
                        key={`itemStatus-${item.title}-${key}`}
                        onChange={handleChange}
                        options={values}
                        ref={elementsRef.current[key]}
                      />

                      {/* <ItemsStatus
                        key={`itemStatus-${item.title}-${key}`}
                        title={item.title}
                        onChangeFunction={handleChange}
                        name={item.name}
                        value={values[item.name]}
                        areaName={item.areaName}
                        areaValue={values[item.areaName]}
                      /> */}
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
        {/* </div> */}
      </div>
    </div>
  );
}
