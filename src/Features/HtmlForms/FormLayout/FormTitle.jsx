import React from "react";
import { amidarLogo } from "../../../Assets/projectImages";
import { Grid } from "@mui/material";

export default function FormTitle({ title }) {
  return (
    <>
      <Grid item xs={1} sm={1} md={1}>
        <div className="margin-logo">
          <img src={amidarLogo} width={150} alt="logo" />
        </div>
      </Grid>
      <Grid item xs={10} sm={10} md={10}>
        <h2 className="text-center title-underline"> {title} </h2>
      </Grid>
    </>
  );
}
