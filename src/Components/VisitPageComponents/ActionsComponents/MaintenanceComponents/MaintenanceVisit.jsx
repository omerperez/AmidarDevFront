import React, { useRef, createRef, useState, useContext } from "react";
import useForm from "../../../../Hooks/useForm";
import QualityRating from "./QualityRating";
import ItemsStatus from "./ItemsStatus";
import SectionTitle from "../../VisitPageLayout/SectionTitle";
import FormAlert from "../../VisitPageLayout/FormAlert";
import { MaintenanceVisitClass } from "../../../../Data/Builders/MaintenanceVisit";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import { Button, Grid } from "@mui/material";
import {
  SelectInput,
  GenericInputForm,
} from "../../../GlobalComponents/ProjectFieldsTypes";
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
import { useEffect } from "react";

export default function MaintenanceVisit() {
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
      elementsRef
    );
    if (incompleteFieldsIndexLocation >= 0) {
      elementsRef.current[incompleteFieldsIndexLocation].current.scrollIntoView(
        {
          behavior: "smooth",
        }
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

  return (
    <div className="section-general">
      <SectionTitle title={"ביקור אחזקה"} />
      {error && <FormAlert title={"שגיאה"} text={error} severity={"error"} />}
      <Button onClick={updateMaintenanceQuality} variant="contained">
        הכל תקין
      </Button>
      <Button
        variant="contained"
        onClick={onSubmit}
        className="finish-visit-btn"
      >
        סיים ביקור
      </Button>
      <div className="section-content">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <GenericInputForm
              cancelLabel={true}
              title={"תאריך הביקור"}
              readOnly={true}
              variant={"filled"}
              value={`${getCurrentDate()}`}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <SelectInput
              title={"חימום מים"}
              onChangeFunction={handleChange}
              name={"waterHeating"}
              value={values.waterHeating}
              defaultValue={waterHeating[0].value}
              selectList={waterHeating}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <SelectInput
              title={"חדר ביטחון"}
              onChangeFunction={handleChange}
              name={"securityRoom"}
              value={values.securityRoom}
              defaultValue={securityRoom[0].value}
              selectList={securityRoom}
            />
          </Grid>
          {maintenanceQualityList &&
            maintenanceQualityList.map((item, index) => {
              return (
                <Grid item xs={12} md={4}>
                  <QualityRating
                    changeStatusOfAllDefects={updateMaintenanceQuality}
                    allDefectsAreNormal={allDefectsAreNormal}
                    key={`qualityRating-${item.title}-${index}`}
                    item={item}
                    onChangeFunction={handleChange}
                    values={values}
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
                    <Grid item xs={12} sm={6} md={4}>
                      <ItemsStatus
                        key={`itemStatus-${item.title}-${key}`}
                        title={item.title}
                        onChangeFunction={handleChange}
                        name={item.name}
                        value={values[item.name]}
                        areaName={item.areaName}
                        areaValue={values[item.areaName]}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
