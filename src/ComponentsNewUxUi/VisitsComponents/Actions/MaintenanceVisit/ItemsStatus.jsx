import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  ToggleButtonOptions,
  TextAreaInput,
} from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";

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

  // const itsTabletWidth = useResponsiveLayout(600);

  return (
    <div className="rtl">
      <h3 className="input-area-title">{title}</h3>
      <ThemeStyleRTL>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4} md={3} className="mr-20">
            <ToggleButtonOptions
              valueOfItemStatus={valueOfItemStatus}
              handleChangeValue={handleChangeValue}
            />
          </Grid>
          {valueOfItemStatus !== "there is" ? null : (
            <Grid item xs={12} sm={10}>
              <TextAreaInput
                title={"הערות"}
                name={areaName}
                onChageFunction={onChangeFunction}
                value={areaValue}
                minRow={5}
                required={false}
              />
            </Grid>
          )}
        </Grid>
      </ThemeStyleRTL>
    </div>
  );
}
