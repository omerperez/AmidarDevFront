import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { ITenant } from "../../../Data/Interfaces/Visit";
import { isIdPropper } from "../../../Features/FormatsFunctions";
import "../../../Layouts/Style/CSS/Visit.css";
import { validationService } from "../../../Services/Validation/GlobalValidations";
import BasicDatePicker from "../../Global/DatePicker";
import Input from "../../Global/Input";

const handleValidation = (date: string) => {
  return validationService.isDatePropperValidation.function(date, false);
};

const errorComment = (status: boolean) => {
  return validationService.isDatePropperValidation.errorComment(status, false);
};

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    name: "id",
    validation: {
      function: isIdPropper,
      errorComment: "תעודת זהות אינה תקינה",
    },
  },
  {
    label: "תעודת זהות חדשה",
    name: "newId",
    validation: {
      function: isIdPropper,
      errorComment: "תעודת זהות אינה תקינה",
    },
  },
  {
    label: "שם מלא",
    name: "firstName",
  },
  {
    label: "מין",
    name: "gender",
  },
  {
    label: "תאריך לידה",
    name: "birthdate",
    validation: {
      function: handleValidation,
      errorComment: errorComment,
    },
  },
  {
    label: "מצב משפחתי",
    name: "maritalStatus",
  },
];

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

  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {tenantDemoRowInfo.map((tenant, index) => {
          return (
            <Grid item md={4} key={`tenantDemoRowInfo-label-${index}`}>
              {tenant.name === "birthdate" ? (
                <BasicDatePicker
                  label={tenant.label}
                  currentValue={
                    formValues.birthdate ?? `${tenantDetails.birthdate}`
                  }
                  onChange={changeState}
                  readOnly={false}
                  name={tenant.name}
                  isShowLabel={true}
                  validation={tenant.validation}
                />
              ) : (
                <Input
                  label={tenant.label}
                  value={
                    formValues[`${tenant.name}`] ??
                    `${tenantDetails[tenant.name as keyof ITenant]}`
                  }
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
