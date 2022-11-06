import { Button, Grid } from "@mui/material";
import React from "react";
import "./Docs.css";

const barOptions = [
  {
    label: "קוד משתמש",
  },
  {
    label: "גר בגפו",
  },
  {
    label: "הצהרת דייר ראשי",
  },
  {
    label: "שכירות מעבר",
  },
  {
    label: "שכירות מעבר",
  },
  {
    label: "שכירות מעבר",
  },
];

export default function TopBar({ activeLabel, changeActiveLabel }) {
  return (
    <Grid container spacing={2}>
      {barOptions.map((option, index) => (
        <Grid item sm={12 / barOptions.length}>
          <Button
            fullWidth
            onClick={() => changeActiveLabel(index)}
            className={
              activeLabel === index
                ? "top-bar-btn-active"
                : "top-bar-btn-non-active"
            }
          >
            {option.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
