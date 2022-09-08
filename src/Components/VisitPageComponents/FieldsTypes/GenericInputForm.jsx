import React, { useId } from "react";
import { TextField, FormLabel, FormControl } from "@mui/material";
import { dateInputStyle } from "../VisitPageAssets";
import ThemeStyleRTL from "../../HomePageComponents/Style/ThemeStyleRTL";

export default function GenericInputForm({
  title,
  inputType,
  value,
  onChangeFunction,
  name,
  inputWidth,
  cancelLabel,
  readOnly,
  variant,
}) {
  const inputId = useId();
  
  return (
    <ThemeStyleRTL>
      <FormControl className="w-100 p-7">
        <FormLabel
          className="mb-10 global-font"
          id={`form-title-label-${title}`}
        >
          {title}
        </FormLabel>
        <TextField
          variant={variant ?? "outlined"}
          fullWidth
          name={name}
          id={inputId}
          label={cancelLabel ? "" : title}
          type={inputType}
          value={value ?? ""}
          className={"h-100"}
          sx={dateInputStyle}
          style={inputWidth ? { width: `${inputWidth}px` } : {}}
          onChange={onChangeFunction}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: readOnly ?? false,
          }}
        />
      </FormControl>
    </ThemeStyleRTL>
  );
}
