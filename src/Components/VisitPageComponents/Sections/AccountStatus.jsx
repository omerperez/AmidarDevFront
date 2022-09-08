import React from "react";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import { Button, Grid } from "@mui/material";
import GenericInputForm from "../FieldsTypes/GenericInputForm";
import {accountStatusProperties} from "../VisitPageAssets";

export default function AccountStatus() {
  return (
    <div className="global-font mr-2p">
      <SectionTitle title={"מצב חשבון"} />
      <div className="d-flex jc-center pl-5">
        <Grid container spacing={4}>
          {accountStatusProperties.map((item, index) => (
            <Grid
              item
              xs={3}
              md={2}
              key={`account-status-field=${item.label}-${index}`}
            >
              <GenericInputForm
                cancelLabel={true}
                title={item.label}
                readOnly={true}
                variant={"standard"}
                value={item.value}
              />
            </Grid>
          ))}
          <Grid item xs={12} className="grid-end">
            <Button className="finish-visit-btn" variant="contained">
              לינק לתשלום
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
