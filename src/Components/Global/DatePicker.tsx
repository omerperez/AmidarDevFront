import { ChangeEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { convertDateFormatToDayJS } from "../../Features/FormatsFunctions";
import Layout from "../../Layouts/Forms/InputLayout";

interface DatePickerProps {
  label?: string;
  currentValue?: string;
  onChange: (key: any, value?: any) => void;
  name?: string;
  isShowLabel?: Boolean;
  readOnly?: boolean;
  validation?: {
    function: (date: string) => boolean;
    errorComment: ((status: boolean) => string) | string;
  };
}

export default function BasicDatePicker({
  label,
  currentValue,
  onChange,
  name,
  isShowLabel,
  readOnly,
  validation,
}: DatePickerProps) {
  const [value, setValue] = useState<Dayjs | null>(
    currentValue ? convertDateFormatToDayJS(currentValue) : null
  );

  const [error, setError] = useState<string>("");

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onChange(name, newValue ? newValue.format("DD/MM/YYYY") : "");

    const isPropperValue = validation?.function(
      dayjs(newValue).format("DD/MM/YYYY")
    );
    if (!isPropperValue) {
      if (typeof validation?.errorComment === "string") {
        return setError(validation.errorComment);
      } else {
        if (isPropperValue === false) {
          const currentError = validation?.errorComment(false);
          if (currentError) {
            setError(currentError);
          } else {
            setError("");
          }
        }
      }
    }
  };

  return (
    <Layout label={label} error={error}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          readOnly={readOnly}
          label={isShowLabel ? label : ""}
          value={value}
          onChange={handleChange}
          renderInput={(params) => {
            return <TextField {...params} />;
          }}
        />
      </LocalizationProvider>
    </Layout>
  );
}
