import { CSSProperties, useId } from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  SxProps,
  Theme,
  FormControl,
} from "@mui/material";
import Layout from "../../Layouts/Forms/InputLayout";
import { ISelectListItem } from "../../Interfaces/Visit";

interface SelectProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: SelectChangeEvent<any>) => void;
  defaultValue?: string | number;
  list?: ISelectListItem[];
  required?: Boolean;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
}
const ssx = {
  "& .muirtl-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
    fontFamily: "Noto Sans Hebrew, sans-serif",
  },
};
export default function SelectInput({
  label,
  onChange,
  name,
  value,
  defaultValue,
  list,
  required,
  style,
  sx,
}: SelectProps) {
  const inputId = useId();

  return (
    <Layout label={label} error={""}>
      <Select
        labelId={`select-label-${label}`}
        id={`select-input-${label}-${inputId}`}
        fullWidth
        className={required ? "select-required" : "h-100"}
        style={style}
        sx={ssx}
        value={value}
        onChange={onChange}
        name={name}
      >
        {list &&
          list.map((item, key) => (
            <MenuItem
              key={`selectInput-MenuItem-${item.label}-${key}`}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </Layout>
  );
}
