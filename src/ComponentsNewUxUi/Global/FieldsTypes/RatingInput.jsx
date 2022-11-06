import React, { useState, useEffect } from "react";
import { Grid, Button, Avatar } from "@mui/material";
import "./FieldsTypesStyle.css";
import { qualityRatingOptions } from "../GlobalComponentsAssets";

export default function RatingInput({ name, value, onChange }) {
  const gridItemSize = 12 / qualityRatingOptions.length;
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (rate) {
      onChange(rate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  const handleChange = (e) => {
    e.preventDefault();
    setRate({
      target: { value: parseInt(e.currentTarget.value), name: name },
    });
  };

  return (
    <Grid container spacing={4}>
      {qualityRatingOptions.map((option, index) => (
        <Grid
          item
          sm={gridItemSize}
          className="rating-item-layout"
          key={`rating-item-${index}`}
        >
          <Button
            fullWidth
            value={option.value}
            onClick={handleChange}
            className={
              value === option.value
                ? `active-rating-bg-${option.value} btn-rating`
                : "non-active-rating-bg btn-rating"
            }
          >
            <Grid container spacing={0}>
              <Grid item sm={3}>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  className="avatar-design"
                >
                  {option.value}
                </Avatar>
              </Grid>
              <Grid item sm={9} className="label-grid">
                <b className={value === option.value && option.textActive}>
                  {option.label}
                </b>
              </Grid>
            </Grid>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
