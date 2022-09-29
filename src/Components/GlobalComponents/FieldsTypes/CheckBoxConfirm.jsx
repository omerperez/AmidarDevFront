import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";

export default function CheckBoxConfirm({
  text,
  name,
  onChangeFunction,
  className,
}) {
  const fontStyle = {
    "& .muirtl-ahj2mt-MuiTypography-root": {
      fontFamily: "Tahoma",
      fontSize: 18,
    },
  };

  return (
    <ThemeStyleRTL>
      <FormControlLabel
        control={
          <Checkbox
            checked={name}
            value={name}
            onChange={onChangeFunction}
            name={name}
          />
        }
        label={text}
        sx={fontStyle}
        className={className}
      />
    </ThemeStyleRTL>
  );
}
