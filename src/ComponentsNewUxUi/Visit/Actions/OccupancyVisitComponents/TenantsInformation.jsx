import { useState } from "react";
import { Grid, IconButton, Stack } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function TenantsInformation({ tenantsInfo, isFirstTenant }) {
  const [edit, setEdit] = useState(false);

  const tenantRowInfo = [
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
  return (
    <Grid container spacing={3}>
      <Grid item sm={0.8} className="text-start">
        <IconButton
          onClick={() => setEdit(!edit)}
          aria-label="edit"
          size="medium"
        >
          <ModeEditIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      {tenantRowInfo.map((item, key) => (
        <Grid item sm={2.2} key={`tenant-info-${key}`}>
          <div className="label-pos">
            <b className="card-body-text-label">{item.label}</b>
          </div>
          <b className="card-body-text-value">{item.value}</b>
        </Grid>
      ))}
    </Grid>
  );
}
