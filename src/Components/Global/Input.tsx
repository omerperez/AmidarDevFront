import {
  Grid,
  SelectChangeEvent,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useContext,
  useId,
  useState,
} from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { variant } from "../../Data/Types/MuiTypes";
import { VisitContextType } from "../../Data/Types/Visit";
import { isStringIncludesNumbersOnly } from "../../Features/FormatsFunctions";
import "../../Layouts/Forms/FieldsTypesStyle.css";
import Layout from "../../Layouts/Forms/InputLayout";
import { InputMui } from "../../Layouts/Style/MUI/GlobalStyle";
import { convertTableCodeToSelectListFormat } from "../../Services/Visit";
import SelectInput from "./Select";

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
  required?: boolean;
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
  required,
}: InputProps) {
  const inputId = useId();
  const [error, setError] = useState("");
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

  const isErorrValidation = (value: string | number) => {
    if (validation && validation.function && validation.errorComment) {
      if (!validation.function(value)) {
        setError(validation.errorComment);
      } else {
        setError("");
      }
    }
  };

  const onSelectMobileExtention = (e: SelectChangeEvent<any>) => {
    e.target.name = name ?? "";
    const extention = e.target.value;
    if (!(value as string).includes("-")) {
      e.target.value = extention.concat("-" + value);
    } else {
      const number = (value as string).split("-")[1];
      if (number) {
        e.target.value = extention.concat("-" + number);
      } else {
        e.target.value = extention.concat("-");
      }
    }
    onChange(e as ChangeEvent<HTMLInputElement>);
  };

  const handleChangeMobile = (event: ChangeEvent<any>) => {
    if (isStringIncludesNumbersOnly(event)) {
      return;
    }

    if ((value as string).includes("-")) {
      const mobileExtention = (value as string).split("-")[0];
      event.target.value = mobileExtention.concat("-" + event.target.value);
    }
    isErorrValidation(event.target.value);
    onChange(event);
  };

  const handleChange = (event: ChangeEvent<any>) => {
    if (type === "id") {
      if (isStringIncludesNumbersOnly(event)) {
        return;
      }
    }
    isErorrValidation(event.target.value);
    onChange(event);
  };

  const inputStyle = sx ? { ...sx, ...InputMui } : InputMui;
  return (
    <Layout label={label} error={error}>
      <Grid container spacing={type === "mobile" ? 1 : 0}>
        <Grid item sm={type === "mobile" ? 8 : 12}>
          <TextField
            variant={variant ?? "outlined"}
            fullWidth
            name={name}
            id={inputId}
            label={isShowLabel ? label : ""}
            type={type ?? "text"}
            value={
              type === "mobile" ? (value as string).split("-")[1] : value ?? ""
            }
            onChange={type === "mobile" ? handleChangeMobile : handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            required={required ?? false}
            InputProps={{
              readOnly: readOnly ?? false,
            }}
            className={required ? "input-required" : "h-100"}
            sx={inputStyle}
            style={style}
          />
        </Grid>
        <Grid item sm={4}>
          {type === "mobile" && (
            <SelectInput
              disabled={false}
              required={false}
              list={convertTableCodeToSelectListFormat(
                visitState.tableCode.get("mobile"),
              )}
              name={"mobileExtention"}
              value={(value as string).split("-")[0]}
              label={""}
              onChange={onSelectMobileExtention}
            />
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}
