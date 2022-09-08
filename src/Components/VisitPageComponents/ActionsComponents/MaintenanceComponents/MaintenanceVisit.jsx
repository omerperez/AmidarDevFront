import React, { useRef, createRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import SelectInput from "../../FieldsTypes/SelectInput";
import useForm from "../../../../Hooks/useForm";
import {
  waterHeating,
  securityRoom,
  maintenanceQualityList,
  otherIssuesList,
} from "./MaintenanceVisitAssets";
import QualityRating from "./QualityRating";
import ItemsStatus from "./ItemsStatus";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import GenericInputForm from "../../FieldsTypes/GenericInputForm";
import SectionTitle from "../../VisitPageLayout/SectionTitle";
import { MaintenanceVisitClass } from "../../../../Data/Builders/MaintenanceVisit";
import {
  getIncompleteFields,
  isFormDescriptionsFieldsFilled,
} from "./CheckMaintenanceForm";
import FormAlert from "../../VisitPageLayout/FormAlert";

export default function MaintenanceVisit() {
  const [values, handleChange] = useForm();
  const [error, setError] = useState("");
  const [allDefectsAreNormal, setAllDefectsAreNormal] = useState(false);

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
    console.log(visitFinished);
  };

  return (
    <div className="global-font mr-2p">
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
      <div className="d-flex jc-center pl-5">
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
                <Grid item xs={12} md={4} >
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
