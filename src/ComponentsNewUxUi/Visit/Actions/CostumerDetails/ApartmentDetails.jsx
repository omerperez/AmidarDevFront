import React from "react";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import { Button, Card, CardActions, Grid } from "@mui/material";
import {
  GenericInputForm,
  SelectInput,
} from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import { apartmentDetails } from "./Assets";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import useForm from "../../../../Hooks/useForm";
import {
  securityRoom,
  waterHeating,
} from "../../../VisitsComponents/Actions/MaintenanceVisit/MaintenanceVisitAssets";

export default function ApartmentDetails() {
  const [values, handleChange] = useForm();

  const openAmidarPaymentForm = () => {
    window.open(process.env.REACT_APP_AMIDAR_PAYMENT_API);
  };
  const sx = {
    "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      height: "12px",
    },
  };
  return (
    <ThemeStyleRTL>
      <div className="section-general">
        <Card className="apartment-details-box">
          <div className="pl-20">
            <h3 className="mb-none qr-title">פרטי הנכס</h3>
            {/* <SectionTitle title={`פרטי הנכס`} /> */}
            <Grid container spacing={2} className="mtb-10">
              {apartmentDetails.map((item, index) => (
                <Grid item sm={item.gridSize} key={index}>
                  <b className="card-body-text-label">{item.label}</b>
                  <br />
                  <b className="card-body-text-value">{item.value}</b>
                </Grid>
              ))}
            </Grid>
          </div>
        </Card>
      </div>
    </ThemeStyleRTL>
  );
}
