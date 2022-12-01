import { Autocomplete, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { ISelectListItem } from "../../Data/Interfaces/Visit";
import Layout from "../../Layouts/Forms/InputLayout";

interface AutocompleteProps {
  list: ISelectListItem[];
  name: string;
  cancelLabel?: boolean;
  label?: string;
  className?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  value?: string | number;
  disabled?: boolean;
}

const AutocompleteMui = { backgroundColor: "white", marginTop: 0.05 };

export default function AutocompleteInput({
  list,
  name,
  cancelLabel,
  label,
  onChange,
  value,
  disabled,
}: AutocompleteProps) {
  return (
    <Layout label={label}>
      <Autocomplete
        disabled={disabled ?? false}
        sx={AutocompleteMui}
        options={list}
        value={{ label: value as string, value: value }}
        onChange={onChange}
        renderInput={(params) => (
          <TextField name={name} {...params} label={cancelLabel ? "" : label} />
        )}
      />
    </Layout>
  );
}
