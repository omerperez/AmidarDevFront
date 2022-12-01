import { SxProps, TextField, Theme } from "@mui/material";
import {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useId,
  useState,
} from "react";
import "../../Layouts/Forms/FieldsTypesStyle.css";
import Layout from "../../Layouts/Forms/InputLayout";
import { InputMui } from "../../Layouts/Style/MUI/GlobalStyle";
import { variant } from "../../Data/Types/MuiTypes";
import { isStringIncludesNumbersOnly } from "../../Features/FormatsFunctions";

interface InputProps {
  label?: string;
  type?: InputHTMLAttributes<unknown>["type"];
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  isShowLabel?: Boolean;
  readOnly?: boolean;
  variant?: variant;
  validation?: any;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  name,
  isShowLabel,
  readOnly,
  variant,
  validation,
  style,
  sx,
}: InputProps) {
  const inputId = useId();
  const [error, setError] = useState("");

  const handleChange = (event: any) => {
    if (type === "mobile" || name === "id") {
      if (isStringIncludesNumbersOnly(event)) {
        return;
      }
    }
    if (validation && validation.function && validation.errorComment) {
      if (!validation.function(event.target.value)) {
        setError(validation.errorComment);
      } else {
        setError("");
      }
    }
    onChange(event);
  };

  const inputStyle = sx ? { ...sx, ...InputMui } : InputMui;
  return (
    <Layout label={label} error={error}>
      <TextField
        variant={variant ?? "outlined"}
        fullWidth
        name={name}
        id={inputId}
        label={isShowLabel ? label : ""}
        type={type ?? "text"}
        value={value ?? ""}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: readOnly ?? false,
        }}
        className={"h-100"}
        sx={inputStyle}
        style={style}
      />
    </Layout>
  );
}
