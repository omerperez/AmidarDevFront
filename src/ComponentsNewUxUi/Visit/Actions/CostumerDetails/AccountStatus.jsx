import React from "react";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import { Button, Grid } from "@mui/material";
import { GenericInputForm } from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import { accountStatusProperties } from "../../../../Components/VisitPageComponents/VisitPageAssets";

export default function AccountStatus() {
  const openAmidarPaymentForm = () => {
    window.open(process.env.REACT_APP_AMIDAR_PAYMENT_API);
  };

  return (
    <div className="section-general ">
      <SectionTitle title={"מצב חשבון"} />
      <div className="section-content white-box">
        <Grid container spacing={2}>
          {accountStatusProperties.map((item, index) => (
            <>
              {item.flag && <Grid item md={item.gridExtra} />}
              <Grid
                item
                md={3}
                key={`account-status-field=${item.label}-${index}`}
              >
                <div className="label-pos">
                  <b className="card-body-text-label">{item.label}</b>
                </div>
                <b className="card-body-text-value">{item.value}</b>
              </Grid>
            </>
          ))}
          <Grid item md={3} className="text-end">
            <Button
              className="paymant-btn"
              variant="contained"
              onClick={openAmidarPaymentForm}
            >
              לינק לתשלום
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
