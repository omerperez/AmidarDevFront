import { FormLabel, FormControl } from "@mui/material";
// import { dateInputStyle } from "../../VisitPageComponents/VisitPageAssets";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";

export default function Layout({ error, label, children }) {
  return (
    <ThemeStyleRTL>
      <FormControl className="w-100">
        {error && <h6>{error}</h6>}
        <FormLabel className="form-label" id={`form-title-label-${label}`}>
          {label}
        </FormLabel>
        {children}
      </FormControl>
    </ThemeStyleRTL>
  );
}
