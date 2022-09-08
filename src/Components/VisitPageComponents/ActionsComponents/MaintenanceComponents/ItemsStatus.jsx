import React, { useState } from "react";
import { Grid } from "@mui/material";
import RadioInput from "../../FieldsTypes/RadioInput";
import { itemsStatusOptions } from "./MaintenanceVisitAssets";
import TextAreaInput from "../../FieldsTypes/TextAreaInput";
import ToggleButtonOptions from "../../FieldsTypes/ToggleButtonOptions";
import ThemeStyleRTL from "../../../HomePageComponents/Style/ThemeStyleRTL";
import { useResponsiveLayout } from "../../../../Layouts/useResponsiveLayout";

export default function ItemsStatus({
  title,
  onChangeFunction,
  name,
  value,
  areaValue,
  areaName,
}) {
  const [valueOfItemStatus, setValueOfItemStatus] = useState("there is");

  const handleChangeValue = (event) => {
    setValueOfItemStatus(event.target.value);
  };
  
  const itsTabletWidth = useResponsiveLayout(600);
  
  return (
    <div className="rtl">
      <h3 className="input-area-title">{title}</h3>
      <ThemeStyleRTL>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className="mr-20"
          >
            <ToggleButtonOptions
              valueOfItemStatus={valueOfItemStatus}
              handleChangeValue={handleChangeValue}
            />

            {/* <RadioInput
            row={true}
            title={""}
            name={name}
            onChangeFunction={onChangeFunction}
            value={value}
            radioItemsList={itemsStatusOptions}
          /> */}
          </Grid>
          {valueOfItemStatus !== "there is" ? null : (
            <Grid item xs={12} sm={10}>
              <TextAreaInput
                title={"הערות"}
                name={areaName}
                onChageFunction={onChangeFunction}
                value={areaValue}
                minRow={5}
                required={valueOfItemStatus === "there is"}
              />
            </Grid>
          )}
        </Grid>
      </ThemeStyleRTL>
    </div>
  );
}
