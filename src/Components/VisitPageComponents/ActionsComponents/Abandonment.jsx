import React from "react";
import { Grid } from "@mui/material";
import {
  GenericInputForm,
  SelectInput,
  RadioInput,
  TextAreaInput,
} from "../../GlobalComponents/ProjectFieldsTypes";
import {
  radioOptionsItemsList,
  abandonmentCodeSelectItemList,
} from "./ActionsAssets";
import useForm from "../../../Hooks/useForm";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";

export default function Abandonment() {
  const [values, handleChange] = useForm();

  return (
    <div className="section-general">
      <SectionTitle title={"נטישה"} />
      <div className="ml-2p">
        <div className="d-flex jc-center form-layout">
          <ThemeStyleRTL>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={2.55}>
                <GenericInputForm
                  title={"תאריך נטישה"}
                  inputType={"date"}
                  name={"abandonment"}
                  value={values.abandonment ?? "2017-05-24"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2.55}>
                <SelectInput
                  title={"קוד עדכון נטישה"}
                  onChangeFunction={handleChange}
                  value={values.abandonmentCode}
                  defaultValue={"נטישה"}
                  selectList={abandonmentCodeSelectItemList}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item sm={4} md={1.7}>
                    <RadioInput
                      title={"שעון מים"}
                      name={"waterWatch"}
                      value={values.waterWatch}
                      onChangeFunction={handleChange}
                      radioItemsList={radioOptionsItemsList}
                    />
                  </Grid>
                  <Grid item sm={4} md={1.7}>
                    <RadioInput
                      title={"דירה פרוצה"}
                      name={"apartmentOpen"}
                      value={values.apartmentOpen}
                      onChageFunction={handleChange}
                      radioItemsList={radioOptionsItemsList}
                    />
                  </Grid>
                  <Grid item sm={4} md={1.7}>
                    <RadioInput
                      title={"שעון חשמל"}
                      name={"electricWatch"}
                      value={values.electricWatch}
                      onChageFunction={handleChange}
                      radioItemsList={radioOptionsItemsList}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} lg={5.1} className="mt-20">
                <TextAreaInput
                  title={"מטלטלין הערות"}
                  name={"comments"}
                  minRow={5}
                  onChageFunction={handleChange}
                  value={values.comments}
                />
              </Grid>
            </Grid>
          </ThemeStyleRTL>
        </div>
      </div>
    </div>
  );
}
