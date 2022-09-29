import React from "react";
import Canvas from "../../../Features/Drawer/Canvas";
import { ClearCanvasButton } from "../../../Features/Drawer/ClearCanvasButton";
import { getDateFormat } from "../../../Utils/getDateFormat";
import { Divider, Grid } from "@mui/material";

export default function FormSignature() {
  return (
    <>
      <Grid item xs={6} sm={6} md={6} className="mt-40">
        <div className="text-center">
          <span>{getDateFormat(new Date())}</span>
          <br />
          <Divider className="divider-style" />
          <span>תאריך</span>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={6} className="mt-40 mb-40 ">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="d-flex jc-center">
              <Canvas />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className="d-flex jc-center">
              <ClearCanvasButton />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
