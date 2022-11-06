import React, { forwardRef, useState, useEffect } from "react";
import { Avatar, Button, Chip, FormLabel, Grid, Stack } from "@mui/material";
import {
  TextAreaInput,
  MultipleSelectInput,
  DiscreteSlider,
} from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import RatingInput from "../../../Global/FieldsTypes/RatingInput";
import { Add, Delete, Done } from "@mui/icons-material";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";

function T({ item, onChange, options }, ref) {
  const [value, setValue] = useState(false);

  return (
    <div className="qr-layout">
      <h3 className="mb-none qr-title">{item.title}</h3>
      <Grid container spacing={0} className="mt-20">
        <Grid item xs={12} className="">
          <Grid container spacing={4}>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setValue(true)}
                className={
                  value
                    ? "active-rating-bg-5 btn-rating"
                    : "non-active-rating-bg btn-rating"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design"
                    >
                      1
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <b className={value ? "col-white" : ""}>יש</b>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setValue(false)}
                className={
                  value
                    ? "btn-rating non-active-rating-bg"
                    : "btn-rating active-rating-bg-1"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design"
                    >
                      2
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <b className={value ? "" : "col-white"}>אין</b>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <div className="mt-10">
            <TextAreaInput
              title={"הערות"}
              required={
                options[item.name] < 4 &&
                (!options[item.areaName] || !options[item.areaName] === "")
              }
              name={item.areaName}
              // value={deficienciesText}
              // onChange={handleInputTextOfDeficiencies}
              minRow={5}
              ref={ref}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(T);

export default forwaredQualityRating;
