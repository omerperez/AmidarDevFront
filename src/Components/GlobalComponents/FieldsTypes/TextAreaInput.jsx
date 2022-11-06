import React, { forwardRef } from "react";
import { TextareaAutosize, FormLabel, FormControl } from "@mui/material";

function TextAreaInput(
  { title, value, name, onChangeFunction, minRow, required },
  ref,
) {
  return (
    <FormControl className="w-100">
      <FormLabel
        className={required ? "title-required" : "global-font"}
        id={`form-title-label-${title}`}
      >
        <b>{required ? `${title} - שדה חובה` : title}</b>
      </FormLabel>

      <TextareaAutosize
        id={name}
        className={required ? "area-input-req mt-10" : "mt-10"}
        name={name}
        aria-label={value}
        minRows={minRow ?? 3}
        placeholder={title}
        value={value}
        onChange={onChangeFunction}
        ref={ref ?? null}
      />
    </FormControl>
  );
}

const TextAreaInputRef = forwardRef(TextAreaInput);

export default TextAreaInputRef;

// const TextAreaInputRef = (props, ref) => {
//   <TextAreaInput
//     title={props.title}
//     value={props.value}
//     name={props.name}
//     onChangeFunction={props.onChangeFunction}
//     minRow={props.minRow}
//     required={props.required}
//     itemRef={ref}
//   />;
// };

// export { TextAreaInputRef };
