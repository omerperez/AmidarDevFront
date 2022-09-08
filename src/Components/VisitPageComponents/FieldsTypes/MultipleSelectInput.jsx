import React, { useState } from "react";
import { MultipleSelectMenuProps } from "../VisitPageAssets";
import {
  Select,
  Checkbox,
  ListItemText,
  MenuItem,
  FormLabel,
  FormControl,
} from "@mui/material";

export default function MultipleSelect({
  title,
  required,
  selectList,
  inputWidth,
  name,
  value,
  handleChange,
}) {
  return (
    <FormControl className="w-100 p-7">
      <FormLabel
        className={
          required && value.length === 0
            ? "title-required"
            : "mb-10 global-font"
        }
        id={`form-title-label-${title}`}
      >
        {title}
      </FormLabel>
      <Select
        labelId={`select-label-${title}`}
        id={`select-input-${title}-id`}
        multiple
        fullWidth
        className={required && value.length === 0 ? "select-required" : "h-100"}
        style={inputWidth ? { width: `${inputWidth}px` } : {}}
        value={value}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MultipleSelectMenuProps}
        name={name}
      >
        {selectList &&
          selectList.map((item, index) => (
            <MenuItem
              key={`selectInput-MenuItem-${item.label}-${index}`}
              value={item.value}
            >
              <Checkbox checked={value.indexOf(item.value) > -1} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
