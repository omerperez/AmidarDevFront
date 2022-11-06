import React, { useId, useState } from "react";
import { TextField } from "@mui/material";
// import { dateInputStyle } from "../../VisitPageComponents/VisitPageAssets";
import FieldTypeLayout from "./Layout";
import "./FieldsTypesStyle.css";

const dateInputStyle = {
  "& .muirtl-1a1fmpi-MuiInputBase-root-MuiInput-root": {
    fontFamily: "Tahoma",
  },
  "& .muirtl-10botns-MuiInputBase-input-MuiFilledInput-input": {
    fontFamily: "Tahoma",
    padding: "16px 8px 16px 12px",
  },
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    textAlign: "start",
  },
};

export default function GenericInputForm({
  label,
  type,
  value,
  onChange,
  name,
  isShowLabel,
  readOnly,
  variant,
  validation,
  style,
  sx,
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
    onChange(event);
  };

  return (
    <FieldTypeLayout label={label} error={error}>
      <TextField
        variant={variant ?? "outlined"}
        fullWidth
        name={name}
        id={inputId}
        label={isShowLabel ? label : ""}
        type={type}
        value={value ?? ""}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: readOnly ?? false,
        }}
        className={"h-100"}
        sx={sx ?? dateInputStyle}
        style={style ?? null}
      />
    </FieldTypeLayout>
  );
}
