import React, { useRef } from "react";
import useForm from "../../../../Hooks/useForm";
import SectionTitle from "../../VisitPageLayout/SectionTitle";
import { occupancyInputsList } from "./OccupancyVisitAssets";
import TenantsInformation from "./TenantsInformation";
import { dividerStyle } from "../../VisitPageAssets";
import { Grid, Divider, Chip } from "@mui/material";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import {
  GenericInputForm,
  SelectInput,
  CheckBoxConfirm,
  TextAreaInput,
} from "../../../GlobalComponents/ProjectFieldsTypes";

export default function OccupancyVisit() {
  const [values, handleChange] = useForm();
  const occupancyVisitCommentsRef = useRef();

  return (
    <div className="section-general">
      <SectionTitle title={"ביקור אכלוס"} />
      <div className="section-content">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} textAlign="left">
              <Chip label="משתכן ראשי עם בן/בת זוג" className="chip-style" />
            </Divider>
          </Grid>
          <div className="tenants-info">
            <TenantsInformation isFirstTenant={true} />
            <TenantsInformation isFirstTenant={false} />
          </div>

          <Grid item xs={12} spacing={1}>
            <Divider sx={dividerStyle} textAlign="left">
              <Chip label="נסמכים" className="chip-style" />
            </Divider>
          </Grid>
          <div className="tenants-info">
            <TenantsInformation isFirstTenant={false} />
            <TenantsInformation isFirstTenant={false} />
          </div>

          <Grid item xs={12} style={{ padding: "10px 0 0 10px" }}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={3}>
                <GenericInputForm
                  cancelLabel={true}
                  title={"תאריך הביקור"}
                  readOnly={true}
                  variant={"filled"}
                  value={`${getCurrentDate()}`}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <GenericInputForm
                  cancelLabel={true}
                  title={"שעה"}
                  readOnly={true}
                  variant={"filled"}
                  value={`PM 1:28:55`}
                />
              </Grid>
              {occupancyInputsList &&
                occupancyInputsList.map((item, index) => (
                  <>
                    {index === occupancyInputsList.length - 2 && (
                      <Grid item xs={6} md={3}>
                        <GenericInputForm
                          cancelLabel={true}
                          onChangeFunction={handleChange}
                          name={"tenantSignsFullName"}
                          title={"שם הדייר החותם"}
                          value={values["tenantSignsFullName"] ?? `עומר פרץ`}
                        />
                      </Grid>
                    )}
                    <Grid item xs={6} md={3}>
                      <SelectInput
                        title={item.title}
                        onChangeFunction={handleChange}
                        name={item.name}
                        value={values[item.name]}
                        defaultValue={item.selectList[0].value}
                        selectList={item.selectList}
                      />
                    </Grid>
                  </>
                ))}

              <Grid item xs={12} md={12}>
                <TextAreaInput
                  title={"הערות לביקור"}
                  name={"occupancyVisitComments"}
                  minRow={3}
                  onChangeFunction={handleChange}
                  ref={occupancyVisitCommentsRef}
                />
              </Grid>
              <CheckBoxConfirm
                className={"mb-40"}
                text={
                  "לקוח עודכן שבאפשרותו להגיש בקשה להטת״ד עקב צפיפות / דירה מונגשת"
                }
                name={"occupancyCheckBoxConfirm"}
                onChangeFunction={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
