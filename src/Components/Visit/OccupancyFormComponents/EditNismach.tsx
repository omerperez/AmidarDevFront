import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { INismach } from "../../../Data/Interfaces/Visit";
import { isIdPropper } from "../../../Features/FormatsFunctions";
import "../../../Layouts/Style/CSS/Visit.css";
import { validationService } from "../../../Services/Validation/GlobalValidations";
import BasicDatePicker from "../../Global/DatePicker";
import Input from "../../Global/Input";

const handleValidationIsAfter = (date: string) => {
  return validationService.isDatePropperValidation.function(date, false);
};

const errorCommentAfter = (status: boolean) => {
  return validationService.isDatePropperValidation.errorComment(status, false);
};

const tenantDemoRowInfo = [
  {
    label: "תעודת זהות",
    name: "id",
    type: "id",
    validation: {
      function: isIdPropper,
      errorComment: "תעודת זהות אינה תקינה",
    },
  },
  {
    label: "שם פרטי",
    name: "firstName",
    type: "text",
  },
  {
    label: "שם משפחה",
    name: "lastName",
    type: "text",
  },
  {
    label: "תאריך לידה",
    name: "birthdate",
    type: "date",
    validation: {
      function: handleValidationIsAfter,
      errorComment: errorCommentAfter,
    },
  },
  {
    label: "סוג קרבה",
    name: "kindOfFamilyRelationship",
    type: "select",
  },
  {
    label: "מצב משפחתי",
    name: "maritalStatus",
    type: "select",
  },
  {
    label: "אחוז נכות",
    name: "disabilityPercentage",
    type: "number",
  },
  {
    label: "תאריך תחילת נכות",
    name: "disabilityStartDate",
    type: "date",
    validation: {
      function: handleValidationIsAfter,
      errorComment: errorCommentAfter,
    },
  },
  {
    label: "תאריך הגבלת נכות",
    name: "disabilityEndDate",
    type: "date",
    validation: {
      function: handleValidationIsAfter,
      errorComment: (status: boolean) => {
        return "";
      },
    },
  },
  {
    label: `תאריך תחילת שרות סדיר בצה"ל`,
    name: "militaryServiceStartDate",
    type: "date",
    validation: {
      function: handleValidationIsAfter,
      errorComment: errorCommentAfter,
    },
  },
  {
    label: `תאריך סיום שרות סדיר בצה"ל`,
    name: "militaryServiceEndDate",
    type: "date",
    validation: {
      function: handleValidationIsAfter,
      errorComment: (status: boolean) => {
        return "";
      },
    },
  },
];

const dates = [
  "birthdate",
  "disabilityStartDate",
  "disabilityEndDate",
  "militaryServiceStartDate",
];

interface EditNismachProps {
  nismachDetails: INismach | null;
  formValues?: any;
  changeFormValues?: (e: ChangeEvent<HTMLInputElement>) => void;
  changeState: (key: any, value?: any) => void;
}
export default function EditNismach({
  nismachDetails,
  formValues,
  changeFormValues,
  changeState,
}: EditNismachProps) {
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
              {dates.includes(tenant.name) ? (
                <BasicDatePicker
                  label={tenant.label}
                  currentValue={
                    formValues && formValues[`${tenant.name}`]
                      ? `${formValues[`${tenant.name}`]}`
                      : nismachDetails
                      ? `${nismachDetails[tenant.name as keyof INismach]}`
                      : ""
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
                    formValues[`${tenant.name}`]
                      ? `${formValues[`${tenant.name}`]}`
                      : nismachDetails
                      ? `${nismachDetails[tenant.name as keyof INismach]}`
                      : ""
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
