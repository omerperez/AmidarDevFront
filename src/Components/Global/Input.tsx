import {
  useId,
  useState,
  InputHTMLAttributes,
  ChangeEvent,
  CSSProperties,
} from "react";
import Layout from "../../Layouts/Forms/InputLayout";
import { TextField } from "@mui/material";
import { variant } from "../../Types/MuiTypes";
import { SxProps, Theme } from "@mui/material";
import "../../Layouts/Forms/FieldsTypesStyle.css";

const dateInputStyle = {
  "& .muirtl-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
    fontFamily: "Noto Sans Hebrew, sans-serif",
  },
  "& .muirtl-1a1fmpi-MuiInputBase-root-MuiInput-root": {
    fontFamily: "Noto Sans Hebrew, sans-serif",
  },
  "& .muirtl-10botns-MuiInputBase-input-MuiFilledInput-input": {
    fontFamily: "Noto Sans Hebrew, sans-serif",
    padding: "16px 8px 16px 12px",
  },
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    textAlign: "start",
  },
};

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

  const [stateVal, setStateVal] = useState<string | null>(null);

  const handleChange = (event: any) => {
    if (
      validation &&
      validation.function !== undefined &&
      validation.errorComment !== undefined
    ) {
      if (!validation.function(event.target.value)) {
        setError(validation.errorComment);
      } else {
        setError("");
      }
    }
    onChange(event);
  };

  return (
    <Layout label={label} error={error}>
      <TextField
        variant={variant ?? "outlined"}
        fullWidth
        name={name}
        id={inputId}
        label={isShowLabel ? label : ""}
        type={type}
        value={stateVal !== null ? stateVal : value ?? ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setStateVal(e.target.value)
        }
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: readOnly ?? false,
        }}
        className={"h-100"}
        sx={sx ?? dateInputStyle}
        style={style}
      />
    </Layout>
  );
}
