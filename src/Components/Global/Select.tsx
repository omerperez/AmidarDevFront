import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CSSProperties, useId } from "react";
import Layout from "../../Layouts/Forms/InputLayout";
import { SelectMui } from "../../Layouts/Style/MUI/GlobalStyle";

interface SelectProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: SelectChangeEvent<any>) => void;
  list?: string[];
  required?: Boolean | boolean;
  style?: CSSProperties;
  disabled?: boolean;
}

export default function SelectInput({
  label,
  onChange,
  name,
  value,
  list,
  required,
  style,
  disabled,
}: SelectProps) {
  const inputId = useId();

  return (
    <Layout label={label}>
      <Select
        disabled={disabled}
        labelId={`select-label-${label}`}
        id={`select-${label}-${inputId}`}
        fullWidth
        className={required ? "select-required" : "h-100"}
        style={style}
        sx={SelectMui}
        value={value}
        onChange={onChange}
        name={name}
      >
        {list?.map((item, key) => (
          <MenuItem key={`selectInput-MenuItem-${item}-${key}`} value={item}>
            <span className="project-font">{item}</span>
          </MenuItem>
        ))}
      </Select>
    </Layout>
  );
}
