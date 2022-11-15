import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";
import { FormLabel, FormControl } from "@mui/material";

interface InputLayoutProps {
  error?: string;
  label?: string;
  children: JSX.Element;
}
export default function InputLayout({
  error,
  label,
  children,
}: InputLayoutProps) {
  return (
    <ThemeRightToLeft>
      <FormControl className="w-100">
        {error && <h6>{error}</h6>}
        <FormLabel className="form-label" id={`form-title-label-${label}`}>
          {label}
        </FormLabel>
        {children}
      </FormControl>
    </ThemeRightToLeft>
  );
}
