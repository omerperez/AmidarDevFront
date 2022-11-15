import { ITenantInformation } from "../../Interfaces/Visit";
import TenantsInformationRow from "./OccupancyFormComponents/TenantsInformationRow";
import SubPagesTitle from "./SubPageTitle";
import { Grid, Stack, Button, Card } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import GenericDialog from "../Global/GenericDialog";
import EditOccupancyTenants from "./OccupancyFormComponents/EditOccupancyTenants";

export default function OccupancyForm() {
  const tenantInfo: ITenantInformation = {
    id: "209543214",
    fullName: "עומר פרץ",
    gender: "זכר",
    birthdate: "20/01/1998",
    familyStatus: "רווק",
  };

  return (
    <div className="section-general">
      <SubPagesTitle title="משתכן ראשי עם בן/בת זוג" />
      <Card className="white-box mb-20">
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TenantsInformationRow details={tenantInfo} />
          </Grid>
          <Grid item sm={12}>
            <TenantsInformationRow details={tenantInfo} />
          </Grid>
        </Grid>
      </Card>
      <Stack direction={"row"}>
        <SubPagesTitle title="נסמכים" />
        <div style={{ paddingTop: 8 }}>
          <GenericDialog
            children={
              <Button className="neg-mt-10">
                <AddCircleOutline />
              </Button>
            }
            content={
              <EditOccupancyTenants tenantInfo={null} isNewTenant={true} />
            }
          />
        </div>
      </Stack>
      <Card className="white-box">
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TenantsInformationRow details={tenantInfo} />
          </Grid>
          <Grid item sm={12}>
            <TenantsInformationRow details={tenantInfo} />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
