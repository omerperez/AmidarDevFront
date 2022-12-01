import { Card, Grid, Stack } from "@mui/material";
import { useContext } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import AddNismach from "./OccupancyFormComponents/AddNismach";
import NismachInformation from "./OccupancyFormComponents/NismachInfo";
import TenantsInformationRow from "./OccupancyFormComponents/TenantInfo";
import SubPagesTitle from "./SubPageTitle";

export default function OccupancyForm() {
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

  return (
    <div className="section-general">
      <SubPagesTitle title="משתכן ראשי עם בן/בת זוג" />
      <Card className="white-box mb-20">
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TenantsInformationRow
              tenantDetails={visitState.occupancyVisit.mainTenant}
              occupancyKey="mainTenant"
            />
          </Grid>
          {visitState.occupancyVisit.tenantPartner && (
            <Grid item sm={12}>
              <TenantsInformationRow
                tenantDetails={visitState.occupancyVisit.tenantPartner}
                occupancyKey="tenantPartner"
              />
            </Grid>
          )}
        </Grid>
      </Card>
      <Stack direction={"row"}>
        <SubPagesTitle title="נסמכים" />
        <AddNismach />
      </Stack>
      {visitState.occupancyVisit.otherTenants.length > 0 && (
        <Card className="white-box">
          <Grid container spacing={3}>
            {visitState.occupancyVisit.otherTenants.map((nismach, index) => (
              <Grid item sm={12} key={`nismach-${index}`}>
                <NismachInformation nismachIndex={index} />
              </Grid>
            ))}
          </Grid>
        </Card>
      )}
    </div>
  );
}
