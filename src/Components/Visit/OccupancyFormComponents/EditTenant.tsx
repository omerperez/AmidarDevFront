import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { tenantInfoFields } from "../../../Assets/Visit/Occupancy";
import { ITenant } from "../../../Data/Interfaces/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import BasicDatePicker from "../../Global/DatePicker";
import Input from "../../Global/Input";

interface EditTenantProps {
  tenantDetails: ITenant;
  formValues?: any;
  changeFormValues?: (e: ChangeEvent<HTMLInputElement>) => void;
  changeState: (key: any, value?: any) => void;
}
export default function EditTenant({
  tenantDetails,
  formValues,
  changeFormValues,
  changeState,
}: EditTenantProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (changeFormValues) {
      changeFormValues(e);
    }
  };

  const getCurrentValue = (name: keyof ITenant) => {
    return formValues[name] ?? (tenantDetails[name] as string);
  };

  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {tenantInfoFields.map((tenant, index) => {
          return (
            <Grid item md={4} key={`tenantDemoRowInfo-label-${index}`}>
              {tenant.name === "birthdate" ? (
                <BasicDatePicker
                  label={tenant.label}
                  currentValue={getCurrentValue(tenant.name)}
                  onChange={changeState}
                  readOnly={false}
                  name={tenant.name}
                  isShowLabel={true}
                  validation={tenant.validation}
                />
              ) : (
                <Input
                  label={tenant.label}
                  value={getCurrentValue(tenant.name)}
                  onChange={handleChange}
                  variant={"outlined"}
                  readOnly={false}
                  name={tenant.name}
                  isShowLabel={true}
                  style={{ marginBottom: 20 }}
                  sx={{ height: 35 }}
                  validation={tenant.validation}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
