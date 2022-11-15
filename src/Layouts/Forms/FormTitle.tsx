import { amidarLogo } from "../../Assets/ProjectImages";
import { Grid } from "@mui/material";

interface FormTitleProp {
  title: string;
}
export default function FormTitle({ title }: FormTitleProp) {
  return (
    <>
      <Grid item xs={1} sm={1} md={1}>
        <div className="margin-logo">
          <img src={amidarLogo} width={150} alt="logo" />
        </div>
      </Grid>
      <Grid item xs={10} sm={10} md={10}>
        <h2 className="text-center title-underline"> {title} </h2>
      </Grid>
    </>
  );
}
