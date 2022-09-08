import React, { useRef } from "react";
import useForm from "../../../../Hooks/useForm";
import { Grid, Divider, Chip } from "@mui/material";
import SectionTitle from "../../VisitPageLayout/SectionTitle";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import GenericInputForm from "../../FieldsTypes/GenericInputForm";
import SelectInput from "../../FieldsTypes/SelectInput";
import { occupancyInputsList } from "./OccupancyVisitAssets";
import TextAreaInput from "../../FieldsTypes/TextAreaInput";
import CheckBoxConfirm from "../../FieldsTypes/CheckBoxConfirm";
import TenantsInformation from "./TenantsInformation";
import {dividerStyle} from "../../VisitPageAssets";

export default function OccupancyVisit() {

  const [values, handleChange] = useForm();
  const occupancyVisitCommentsRef = useRef();

  return (
    <div className="global-font mr-2p">
      <SectionTitle title={"ביקור אכלוס"} />
      <div className="d-flex jc-center pl-5">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Divider sx={dividerStyle} textAlign="left">
              <Chip label="משתכן ראשי עם בן/בת זוג" className="chip-style" />
            </Divider>
          </Grid>
          <div className="w-100 mt-10 mb-10">
            <TenantsInformation isFirstTenant={true} />
            <TenantsInformation isFirstTenant={false} />
          </div>

          <Grid item xs={12} spacing={1}>
            <Divider sx={dividerStyle} textAlign="left">
              <Chip label="נסמכים" className="chip-style" />
            </Divider>
          </Grid>
          <div className="w-100 mt-10 mb-10">
            <TenantsInformation isFirstTenant={false} />
            <TenantsInformation isFirstTenant={false} />
          </div>

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
      </div>
    </div>
  );
}
