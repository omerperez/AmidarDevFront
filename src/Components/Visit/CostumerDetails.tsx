import { Grid } from "@mui/material";
import TenantGeneralDetails from "./CostumerDetailsComponents/TenantGeneralDetails";
import OccupancyDetails from "./CostumerDetailsComponents/OccupancyDetails";
import ContactInformation from "./CostumerDetailsComponents/ContactInformation";
import "../../Layouts/Style/Visit.css";
import { ApartmentGeneralDetails } from "../../Builders/Visit";

interface CostumerDetailsProps {
  apartment: ApartmentGeneralDetails;
}

export default function CostumerDetails({ apartment }: CostumerDetailsProps) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <TenantGeneralDetails apartment={apartment} />
      </Grid>
      <Grid item sm={6}>
        <OccupancyDetails apartment={apartment} />
      </Grid>
      <Grid item sm={12}>
        <ContactInformation />
      </Grid>
    </Grid>
  );
}
