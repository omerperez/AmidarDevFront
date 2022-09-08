import React from "react";
import { Grid } from "@mui/material";
import GenericInputForm from "../FieldsTypes/GenericInputForm";
import SelectInput from "../FieldsTypes/SelectInput";
import RadioInput from "../FieldsTypes/RadioInput";
import TextAreaInput from "../FieldsTypes/TextAreaInput";
import {
  sexOptionsList,
  invasionCodeSelectItemsList,
  mobileAreaCodeOptions,
} from "./ActionsAssets";
import useForm from "../../../Hooks/useForm";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import ThemeStyleRTL from "../../HomePageComponents/Style/ThemeStyleRTL";

export default function Invasion() {
  const [values, handleChange] = useForm();

  return (
    <div className="global-font mr-2p">
      <SectionTitle title={"פלישה"} />
      <div className="d-flex jc-center ml-2p mr-2p">
        <div className="d-flex jc-center form-layout">
          <ThemeStyleRTL>
            <Grid container spacing={0}>
              <Grid item md={4} xl={3}>
                <GenericInputForm
                  name={"invasionDate"}
                  onChangeFunction={handleChange}
                  title={"תאריך פלישה"}
                  inputType={"date"}
                  inputWidth={300}
                  value={"2017-05-24"}
                />
              </Grid>
              <Grid item md={4} xl={3}>
                <SelectInput
                  title={"קוד עדכון פלישה"}
                  onChangeFunction={handleChange}
                  value={values.invasionCode}
                  name={"invasionCode"}
                  inputWidth={300}
                  defaultValue={"פלישה"}
                  selectList={invasionCodeSelectItemsList}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item md={4} xl={3}>
                    <GenericInputForm
                      name={"idNumber"}
                      onChangeFunction={handleChange}
                      title={"מספר זהות"}
                      inputType={"number"}
                      inputWidth={300}
                      value={values.idNumber}
                    />
                  </Grid>
                  <Grid item md={4} xl={3}>
                    <GenericInputForm
                      name={"lastName"}
                      onChangeFunction={handleChange}
                      title={"שם משפחה"}
                      inputType={"text"}
                      inputWidth={300}
                      value={values.lastName}
                    />
                  </Grid>
                  <Grid item md={4} xl={3}>
                    <GenericInputForm
                      name={"firstName"}
                      onChangeFunction={handleChange}
                      title={"שם פרטי"}
                      inputType={"text"}
                      inputWidth={300}
                      value={values.firstName}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item sm={6} md={4}>
                    <RadioInput
                      row={true}
                      title={"מין"}
                      name={"gender"}
                      onChangeFunction={handleChange}
                      value={values.gender}
                      radioItemsList={sexOptionsList}
                    />
                  </Grid>
                  <Grid item md={4} xl={3}>
                    <GenericInputForm
                      onChangeFunction={handleChange}
                      name={"birthdayDate"}
                      title={"תאריך לידה"}
                      inputType={"date"}
                      inputWidth={300}
                      value={values.birthdayDate}
                    />
                  </Grid>

                  <Grid item md={3} xl={1.8}>
                    <GenericInputForm
                      onChangeFunction={handleChange}
                      name={"mobileNumber"}
                      title={"נייד מוביל"}
                      cancelLabel={true}
                      inputType={"tel"}
                      inputWidth={210}
                      value={values.mobileNumber}
                    />
                  </Grid>
                  <Grid item xs={1}>
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

              <Grid item md={12} xl={9} className="mt-20">
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
