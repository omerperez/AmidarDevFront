import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";

export default function RadioInput({
  title,
  value,
  name,
  onChangeFunction,
  radioItemsList,
  row,
}) {
  return (
    <FormControl className="w-100 p-7">
      <FormLabel className="global-font" id={`form-title-label-${title}`}>
        {title}
      </FormLabel>
      <RadioGroup
        className={title !== "" ? "mt-10" : "mt-20"}
        row={row ?? false}
        aria-labelledby={`${title}-radio-buttons-group-label-${title}`}
        name={name}
        value={value ?? null}
        onChange={onChangeFunction}
      >
        {radioItemsList &&
          radioItemsList.map((item, key) => {
            return (
              <FormControlLabel
                key={`RadioInput-FormControlLabel-${item.value}-${key}`}
                value={item.value}
                control={
                  <Radio key={`${title}-radioControlKey-${item.value + key}`} />
                }
                label={item.label}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
}
