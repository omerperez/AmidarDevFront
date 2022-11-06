import React, { useRef } from "react";
import useForm from "../../../../Hooks/useForm";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import { occupancyInputsList } from "./OccupancyVisitAssets";
import TenantsInformation from "./TenantsInformation";
import { dividerStyle } from "../../../../Components/VisitPageComponents/VisitPageAssets";
import { Grid, Divider, Chip, Stack, Button, Card } from "@mui/material";
import { getCurrentDate } from "../../../../Utils/getDateFormat";
import {
  GenericInputForm,
  SelectInput,
  CheckBoxConfirm,
  TextAreaInput,
} from "../../../Global/ProjectFieldsTypes";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function OccupancyForm() {
  const [values, handleChange] = useForm();
  const occupancyVisitCommentsRef = useRef();

  return (
    <div className="section-general">
      <SectionTitle title="משתכן ראשי עם בן/בת זוג" />
      <Card className="white-box mb-20">
        <Grid container spacing={3}>
          <Grid item sm={12} spacing={3}>
            <TenantsInformation isFirstTenant={true} />
          </Grid>
          <Grid item sm={12} spacing={3}>
            <TenantsInformation isFirstTenant={true} />
          </Grid>
        </Grid>
      </Card>

      <Stack direction={"row"}>
        <SectionTitle title="נסמכים" />
        <Button className="neg-mt-10">
          <AddCircleOutlineIcon />
        </Button>
      </Stack>
      <Card className="white-box">
        <Grid container spacing={3}>
          <Grid item sm={12} spacing={3}>
            <TenantsInformation isFirstTenant={true} />
          </Grid>
          <Grid item sm={12} spacing={3}>
            <TenantsInformation isFirstTenant={true} />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
