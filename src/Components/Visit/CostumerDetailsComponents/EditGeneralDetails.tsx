import { Grid } from "@mui/material";
import { ChangeEvent } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { identifyingInformationInputs } from "../../../Assets/Visit";
import { MainTenantDetails } from "../../../Data/Builders/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import Input from "../../Global/Input";

interface EditGeneralDetailsProps {
  mainTenantDetails: MainTenantDetails;
  formValues?: any;
  changeFormValues?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function EditGeneralDetails({
  mainTenantDetails,
  formValues,
  changeFormValues,
}: EditGeneralDetailsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (changeFormValues) {
      changeFormValues(e);
    }
  };
  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {identifyingInformationInputs.map((item, index) => {
          return (
            <Grid
              item
              md={index < 2 ? 6 : 3}
              key={`identifyingInformationInputs-label-${index}`}
            >
              <Input
                label={item.label}
                value={
                  formValues[`${item.name}`] ??
                  `${mainTenantDetails[item.name as keyof MainTenantDetails]}`
                }
                onChange={handleChange}
                variant={item.isEdit ? "outlined" : "filled"}
                readOnly={!item.isEdit}
                name={item.name}
                type={item.type}
                isShowLabel={false}
                validation={item.validation}
              />
            </Grid>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
