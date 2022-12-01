import { Grid, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { identifyingInformationInputs } from "../../../Assets/Visit";
import { contexts } from "../../../Contexts/ContextsExports";
import { MainTenantDetails } from "../../../Data/Builders/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import { convertTableCodeToSelectListFormat } from "../../../Services/Visit";
import AutocompleteInput from "../../Global/Autocomplete";
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
  const { visitState } = useContext(contexts.Visit) as VisitContextType;

  const autocompleteStreetList = convertTableCodeToSelectListFormat(
    visitState.tableCode.get("streets"),
  );

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
              {item.name === "street" ? (
                <AutocompleteInput
                  list={autocompleteStreetList}
                  name={item.name}
                  value={
                    formValues[`${item.name}`] ??
                    `${mainTenantDetails[item.name as keyof MainTenantDetails]}`
                  }
                  onChange={(e: SelectChangeEvent<any>) => {
                    console.log(e.target.value);
                  }}
                  label={item.label}
                  cancelLabel={true}
                />
              ) : (
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
              )}
            </Grid>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
