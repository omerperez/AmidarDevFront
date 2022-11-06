import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";
import { Grid } from "@mui/material";
import "../../Visit.css";
import { occupancyInformationLabels } from "../../Assets";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import TenantDetails from "./TenantDetails";
import AccountStatus from "./AccountStatus";
import OccupancyDetails from "./OccupancyDetails";
import ApartmentDetails from "./ApartmentDetails";
import ContactInformation from "./ContactInformation";
export default function CostumerDetails({ apartment }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <TenantDetails apartment={apartment} />
      </Grid>
      <Grid item sm={6}>
        <OccupancyDetails apartment={apartment} />
      </Grid>
      <Grid item sm={12} className="mb-10">
        <ContactInformation apartment={apartment} />
      </Grid>
    </Grid>
  );
}
