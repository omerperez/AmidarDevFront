import React from "react";
import { Grid } from "@mui/material";
import GenericInputForm from "../FieldsTypes/GenericInputForm";
import SelectInput from "../FieldsTypes/SelectInput";
import RadioInput from "../FieldsTypes/RadioInput";
import TextAreaInput from "../FieldsTypes/TextAreaInput";
import {
  radioOptionsItemsList,
  abandonmentCodeSelectItemList,
} from "./ActionsAssets";
import useForm from "../../../Hooks/useForm";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import ThemeStyleRTL from "../../HomePageComponents/Style/ThemeStyleRTL";

export default function Abandonment() {
  const [values, handleChange] = useForm();

  return (
    <div className="global-font mr-2p">
      <SectionTitle title={"נטישה"} />
      <div className="ml-2p">
        <div className="d-flex jc-center form-layout">
          <ThemeStyleRTL>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={4}>
                <GenericInputForm
                  title={"תאריך נטישה"}
                  inputType={"date"}
                  inputWidth={220}
                  name={"abandonment"}
                  value={values.abandonment ?? "2017-05-24"}
                />
              </Grid>
              <Grid item sm={6} md={4}>
                <SelectInput
                  title={"קוד עדכון נטישה"}
                  onChangeFunction={handleChange}
                  value={values.abandonmentCode}
                  inputWidth={220}
                  defaultValue={"נטישה"}
                  selectList={abandonmentCodeSelectItemList}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} className="mt-20">
                <Grid container spacing={0}>
                  <Grid item sm={4} md={2}>
                    <RadioInput
                      title={"שעון מים"}
                      name={"waterWatch"}
                      value={values.waterWatch}
                      onChangeFunction={handleChange}
                      radioItemsList={radioOptionsItemsList}
                    />
                  </Grid>
                  <Grid item sm={4} md={2}>
                    <RadioInput
                      title={"דירה פרוצה"}
                      name={"apartmentOpen"}
                      value={values.apartmentOpen}
                      onChageFunction={handleChange}
                      radioItemsList={radioOptionsItemsList}
                    />
                  </Grid>
                  <Grid item sm={4} md={2}>
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
              <Grid item xs={12} sm={12} lg={7} className="mt-20">
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
