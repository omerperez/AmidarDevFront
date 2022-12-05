import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import { CSSProperties, useId } from "react";
import { ISelectListItem } from "../../Data/Interfaces/Visit";
import Layout from "../../Layouts/Forms/InputLayout";
import { SelectMui } from "../../Layouts/Style/MUI/GlobalStyle";

interface SelectProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: SelectChangeEvent<any>) => void;
  list: ISelectListItem[];
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
        variant={disabled ? "filled" : "outlined"}
        onChange={onChange}
        name={name}
      >
        {list.map((item, key) => (
          <MenuItem
            key={`selectInput-MenuItem-${item.label}-${key}`}
            value={item.value}
          >
            <span className="project-font">{item.label}</span>
          </MenuItem>
        ))}
      </Select>
    </Layout>
  );
}
