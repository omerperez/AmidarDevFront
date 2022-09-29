import React, { useId } from "react";
import { Select, MenuItem, FormLabel, FormControl } from "@mui/material";

export default function SelectInput({
  title,
  onChangeFunction,
  name,
  value,
  defaultValue,
  inputWidth,
  selectList,
  required,
}) {
  const inputId = useId();

  return (
    <FormControl className="w-100 p-7">
      <FormLabel
        className={required ? "title-required" : "mb-10 global-font"}
        id={`form-title-label-${title}`}
      >
        {title}
      </FormLabel>
      <Select
        labelId={`select-label-${title}`}
        id={`select-input-${title}-${inputId}`}
        fullWidth
        className={required ? "select-required" : "h-100"}
        style={inputWidth ? { width: `${inputWidth}px` } : {}}
        value={value ?? defaultValue}
        onChange={onChangeFunction}
        name={name}
      >
        {selectList &&
          selectList.map((item, key) => {
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
    </FormControl>
  );
}
