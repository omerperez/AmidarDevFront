import React, { useId, useState } from "react";
import { TextField, FormLabel, FormControl } from "@mui/material";
import { dateInputStyle } from "../../VisitPageComponents/VisitPageAssets";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";

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
  validation,
}) {
  const inputId = useId();
  const [error, setError] = useState("");

  const handleChange = (event) => {
    if (
      validation &&
      validation.function !== undefined &&
      validation.errorComment !== undefined
    ) {
      if (!validation.function(event.target.value)) {
        setError(validation.errorComment);
      } else {
        setError("");
      }
    }
    onChangeFunction(event);
  };

  return (
    <ThemeStyleRTL>
      <FormControl className="w-100 p-7">
        {error && <h6>{error}</h6>}
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
          onChange={handleChange}
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
