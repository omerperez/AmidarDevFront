import React from "react";
import { Grid } from "@mui/material";
import FormTitle from "./FormLayout/FormTitle";
import TenantPersonalDetails from "./FormLayout/TenantPersonalDetails";
import FormSignature from "./FormLayout/FormSignature";
import "./HtmlForms.css";

export default function TransitionalRent() {
  return (
    <page size="A4" className="page-layout">
      <Grid container spacing={0}>
        <FormTitle title={"הצהרה - שכירות מעבר"} />
        <TenantPersonalDetails
          firstName={"עומר"}
          lastName={"פרץ"}
          id={"209543214"}
          year={2020}
        />
        <Grid item xs={12} sm={12} md={12} className="mt-20 pl-5"></Grid>
        <FormSignature />
      </Grid>
    </page>
  );
}
