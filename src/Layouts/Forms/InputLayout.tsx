import { FormControl, FormLabel } from "@mui/material";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";

interface InputLayoutProps {
  error?: string;
  label?: string;
  children: JSX.Element;
}
export default function InputLayout({
  label,
  children,
  error,
}: InputLayoutProps) {
  return (
    <ThemeRightToLeft>
      <FormControl fullWidth>
        {label && (
          <FormLabel className="form-label" id={`form-title-label-${label}`}>
            {label}
          </FormLabel>
        )}
        {children}
      </FormControl>
      {error && <div className="input-error">{error}</div>}
    </ThemeRightToLeft>
  );
}
