import React from "react";
import SectionTitle from "../VisitPageLayout/SectionTitle";
import { Button, Grid } from "@mui/material";
import { GenericInputForm } from "../../GlobalComponents/ProjectFieldsTypes";
import { accountStatusProperties } from "../VisitPageAssets";
import { EmailService } from "../../../Services/EmailService/EmailService";
import { WhatsAppService } from "../../../Services/WhatsAppService/WhatsAppService";

export default function AccountStatus() {
  const openAmidarPaymentForm = () => {
    console.log(process.env.REACT_APP_AMIDAR_PAYMENT_API);
    // https://ecom.gov.il/voucherspa/input/316?clear=true
    window.open(process.env.REACT_APP_AMIDAR_PAYMENT_API);
  };

  // const data = {
  //   sender: "support@amidar.co.il",
  //   recipients: "u8193@gmail.com",
  //   subject: "Omer Perez",
  //   data: "blablabla",
  //   file_pdf: "",
  // };
  // EmailService.sendEmailToTenant(data);

  return (
    <div className="section-general">
      <SectionTitle title={"מצב חשבון"} />
      <div className="section-content">
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
            <Button
              className="finish-visit-btn"
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
