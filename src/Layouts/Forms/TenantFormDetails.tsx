import { Grid, Divider } from "@mui/material";

interface TenantFormDetailsForm {
  firstName: string;
  lastName: string;
  id: string;
  year: number;
}
export default function TenantFormDetails({
  firstName,
  lastName,
  id,
  year,
}: TenantFormDetailsForm) {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} className="mt-20">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1}>
            <div className="mr-30">
              <span>אני,</span>
            </div>
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <div className="text-center">
              <span>{firstName}</span>
              <br />
              <Divider className="divider-style" />
              <span>שם פרטי</span>
            </div>
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <div className="text-center">
              <span>{lastName}</span>
              <br />
              <Divider className="divider-style" />
              <span>שם משפחה</span>
            </div>
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <div className="text-center">
              <span>{id}</span>
              <br />
              <Divider className="divider-style" />
              <span>ת.ז</span>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className="mt-20 mr-20">
        <span className="ml-20">
          הנני דייר/ת המתגורר בדיור הציבורי החל משנת:
        </span>
        <span className="title-underline">{year}</span>
      </Grid>
    </>
  );
}
