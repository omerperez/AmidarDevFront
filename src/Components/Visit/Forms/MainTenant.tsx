import { Grid } from "@mui/material";
import Signature from "../../../Features/SignaturePad";
import "../../../Layouts/Forms/Forms.css";
import FormTitle from "../../../Layouts/Forms/FormTitle";
import TenantFormDetails from "../../../Layouts/Forms/TenantFormDetails";

export default function MainTenant() {
  return (
    <div className="page-" dir="rtl">
      <Grid container spacing={0}>
        <FormTitle title={"הצהרה לדיירי הדיור הציבורי"} />
        <TenantFormDetails
          firstName={"עומר"}
          lastName={"פרץ"}
          id={"209543214"}
          year={2020}
        />

        <Grid item xs={12} sm={12} md={12} className="mt-20 pl-5"></Grid>
        <Signature />
      </Grid>
    </div>
  );
}
