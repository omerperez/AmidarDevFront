import { useContext } from "react";
import { Grid } from "@mui/material";
import TenantGeneralDetails from "./CostumerDetailsComponents/TenantGeneralDetails";
import OccupancyDetails from "./CostumerDetailsComponents/OccupancyDetails";
import ContactInformation from "./CostumerDetailsComponents/ContactInformation";
import { VisitGeneralDetails } from "../../Types/Visit";
import { contexts } from "../../Contexts/ContextsExports";
import "../../Layouts/Style/Visit.css";

export default function CostumerDetails() {
  // { apartment }: CostumerDetailsProps
  const { visitState } = useContext(contexts.Visit);

  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <TenantGeneralDetails apartment={visitState.identifyingInformation} />
      </Grid>
      <Grid item sm={6}>
        <OccupancyDetails apartment={visitState.identifyingInformation} />
      </Grid>
      <Grid item sm={12}>
        <ContactInformation apartment={visitState.identifyingInformation} />
      </Grid>
    </Grid>
  );
}
