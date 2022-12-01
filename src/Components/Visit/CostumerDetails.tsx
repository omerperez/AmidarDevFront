import { Grid } from "@mui/material";
import { useContext } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import "../../Layouts/Style/CSS/Visit.css";
import ContactInformation from "./CostumerDetailsComponents/ContactInformation";
import OccupancyDetails from "./CostumerDetailsComponents/OccupancyDetails";
import TenantGeneralDetails from "./CostumerDetailsComponents/TenantGeneralDetails";

export default function CostumerDetails() {
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

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
