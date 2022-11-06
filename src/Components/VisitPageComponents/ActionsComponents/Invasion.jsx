import React from "react";
import { Grid } from "@mui/material";
import {
  GenericInputForm,
  SelectInput,
  RadioInput,
  TextAreaInput,
} from "../../GlobalComponents/ProjectFieldsTypes";
import {
  sexOptionsList,
  invasionCodeSelectItemsList,
  mobileAreaCodeOptions,
} from "./ActionsAssets";
import useForm from "../../../Hooks/useForm";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";
import { validationService } from "../../../Services/ValidationsService/ValidationService";

export default function Invasion() {
  const [values, handleChange] = useForm();

  // {tenantDetails.map((item, index) => (
  //   <Grid item xs={6} md={4} xl={2}>
  //     <GenericInputForm
  //       name={item.name}
  //       onChangeFunction={handleChange}
  //       title={item.title}
  //       inputType={item.inputType}
  //       value={values[item.name]}
  //     />
  //   </Grid>
  // ))}

  return (
    <div className="section-general">
      <SectionTitle title={"פלישה"} />
      <div className="section-general">
        <div className="form-layout">
          <ThemeStyleRTL>
            <Grid container spacing={0}>
              <Grid item md={4.5} xl={2.55}>
                <GenericInputForm
                  name={"invasionDate"}
                  onChangeFunction={handleChange}
                  title={"תאריך פלישה"}
                  inputType={"date"}
                  value={"2017-05-24"}
                />
              </Grid>
              <Grid item md={4.5} xl={2.55}>
                <SelectInput
                  title={"קוד עדכון פלישה"}
                  onChangeFunction={handleChange}
                  value={values.invasionCode}
                  name={"invasionCode"}
                  defaultValue={"פלישה"}
                  selectList={invasionCodeSelectItemsList}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item xs={6} md={3} xl={1.7}>
                    <GenericInputForm
                      name={"idNumber"}
                      onChangeFunction={handleChange}
                      title={"מספר זהות"}
                      inputType={"number"}
                      value={values.idNumber}
                    />
                  </Grid>
                  <Grid item xs={6} md={3} xl={1.7}>
                    <GenericInputForm
                      name={"lastName"}
                      onChangeFunction={handleChange}
                      title={"שם משפחה"}
                      inputType={"text"}
                      value={values.lastName}
                      validation={validationService.hebrewLettersOnly}
                    />
                  </Grid>
                  <Grid item xs={6} md={3} xl={1.7}>
                    <GenericInputForm
                      name={"firstName"}
                      onChangeFunction={handleChange}
                      title={"שם פרטי"}
                      inputType={"text"}
                      value={values.firstName}
                      validation={validationService.hebrewLettersOnly}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item sm={6} md={3} xl={1.7}>
                    <RadioInput
                      row={true}
                      title={"מין"}
                      name={"gender"}
                      onChangeFunction={handleChange}
                      value={values.gender}
                      radioItemsList={sexOptionsList}
                    />
                  </Grid>
                  <Grid item md={4} xl={1.7}>
                    <GenericInputForm
                      onChangeFunction={handleChange}
                      name={"birthdayDate"}
                      title={"תאריך לידה"}
                      inputType={"date"}
                      value={values.birthdayDate}
                    />
                  </Grid>

                  <Grid item md={3} xl={1.5}>
                    <GenericInputForm
                      onChangeFunction={handleChange}
                      name={"mobileNumber"}
                      title={"נייד מוביל"}
                      cancelLabel={true}
                      inputType={"tel"}
                      value={values.mobileNumber}
                    />
                  </Grid>
                  <Grid item xs={2} md={1.5} xl={0.7}>
                    <SelectInput
                      title={"בחירה"}
                      onChangeFunction={handleChange}
                      value={values.areaCode ?? "050"}
                      name={"areaCode"}
                      inputWidth={80}
                      selectList={mobileAreaCodeOptions}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={12} xl={5.1} className="mt-20">
                <TextAreaInput
                  title={"הערות"}
                  minRow={5}
                  value={values.comments}
                  onChangeFunction={handleChange}
                  name={"comments"}
                />
              </Grid>
            </Grid>
          </ThemeStyleRTL>
        </div>
      </div>
    </div>
  );
}
