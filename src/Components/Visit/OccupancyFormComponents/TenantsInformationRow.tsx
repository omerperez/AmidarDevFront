import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import GenericDialog from "../../Global/GenericDialog";
import EditOccupancyTenants from "./EditOccupancyTenants";
import { ITenantInformation } from "../../../Interfaces/Visit";

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    value: "209543214",
  },
  {
    label: "שם מלא",
    value: "עומר פרץ",
  },
  {
    label: "מין",
    value: "זכר",
  },
  {
    label: "תאריך לידה",
    value: "20/01/1998",
  },
  {
    label: "מצב משפחתי",
    value: "רווק",
  },
];

interface TenantsInformationRowProps {
  details: ITenantInformation;
}
export default function TenantsInformationRow({
  details,
}: TenantsInformationRowProps) {
  const [edit, setEdit] = useState<Boolean>(false);

  return (
    <Grid container spacing={3}>
      <Grid item sm={0.8} className="text-start">
        <GenericDialog
          children={
            <IconButton
              onClick={() => setEdit(!edit)}
              aria-label="edit"
              size="medium"
            >
              <ModeEditIcon fontSize="inherit" />
            </IconButton>
          }
          title={details?.fullName}
          closeBtn={false}
          content={<EditOccupancyTenants tenantInfo={details} />}
        />
      </Grid>
      {tenantDemoRowInfo.map((item, key) => (
        <Grid item sm={2.2} key={`tenant-info-${key}`}>
          <div className="label-pos">
            <span className="card-body-text-label">{item.label}</span>
          </div>
          <span className="card-body-text-value">{item.value}</span>
        </Grid>
      ))}
    </Grid>
  );
}
