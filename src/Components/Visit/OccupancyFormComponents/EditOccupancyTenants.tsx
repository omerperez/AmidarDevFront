import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Grid } from "@mui/material";
import "../../../Layouts/Style/Visit.css";
import Input from "../../Global/Input";
import { ITenantInformation } from "../../../Interfaces/Visit";

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    name: "id",
    value: "209543214",
  },
  {
    label: "שם מלא",
    name: "fullName",
    value: "עומר פרץ",
  },
  {
    label: "מין",
    name: "gender",
    value: "זכר",
  },
  {
    label: "תאריך לידה",
    name: "birthdate",
    value: "20/01/1998",
  },
  {
    label: "מצב משפחתי",
    name: "familyStatus",
    value: "רווק",
  },
];

interface EditOccupancyTenantsProps {
  tenantInfo?: ITenantInformation | null;
  isNewTenant?: Boolean;
}
export default function EditOccupancyTenants({
  tenantInfo,
  isNewTenant,
}: EditOccupancyTenantsProps) {
  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {tenantDemoRowInfo.map((item, index) => {
          return (
            <Grid item md={4} key={`tenantDemoRowInfo-label-${index}`}>
              <Input
                label={item.label}
                value={isNewTenant ? "" : item.value}
                onChange={() => console.log("omer")}
                variant={"outlined"}
                readOnly={false}
                name={item.name}
                isShowLabel={true}
                style={{ marginBottom: 20 }}
                sx={{ height: 35 }}
              />
            </Grid>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
