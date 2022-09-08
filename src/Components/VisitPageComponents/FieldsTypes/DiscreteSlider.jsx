import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import { useResponsiveLayout } from "../../../Layouts/useResponsiveLayout";

const qualityRating = [
  { label: "לא ראוי", value: 0 },
  { label: "תיקון מקיף", value: 25 },
  { label: "טיפול נקודתי", value: 50 },
  { label: "תקין, ישן", value: 75 },
  { label: "תקין", value: 100 },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return qualityRating.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider({ name, value, onChangeFunction, diffrentWidth }) {
  const [val, setVal] = useState(value ?? 20);

  useEffect(() => {
    if (value === 100) {
      setVal(100);
      const event = { target: { name: name, value: 100 } };
      onChangeFunction(event);
    }
  }, [value]);

  const handleChange = (e) => {
    setVal(e.target.value);
    onChangeFunction(e);
  };

  const mobileWidth = useResponsiveLayout(600);
  return (
    <Box sx={{ width: `${!mobileWidth ? "100%" : "80%"}` }} className="mt-20">
      <Slider
        aria-label="Restricted values"
        value={val}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={qualityRating}
        name={name}
        onChange={handleChange}
      />
    </Box>
  );
}
