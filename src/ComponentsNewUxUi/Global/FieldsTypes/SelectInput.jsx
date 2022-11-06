import React, { useId } from "react";
import { Select, MenuItem, FormLabel, FormControl } from "@mui/material";
import Layout from "./Layout";

export default function SelectInput({
  label,
  onChange,
  name,
  value,
  defaultValue,
  list,
  required,
  style,
  sx,
}) {
  const inputId = useId();

  return (
    <Layout label={label} error={""}>
      <Select
        labelId={`select-label-${label}`}
        id={`select-input-${label}-${inputId}`}
        fullWidth
        className={required ? "select-required" : "h-100"}
        style={style ?? null}
        sx={sx ?? null}
        value={value ?? defaultValue}
        onChange={onChange}
        name={name}
      >
        {list &&
          list.map((item, key) => {
            return (
              <MenuItem
                key={`selectInput-MenuItem-${item.label}-${key}`}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            );
          })}
      </Select>
    </Layout>
  );
}
