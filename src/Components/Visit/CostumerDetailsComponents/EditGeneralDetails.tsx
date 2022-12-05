import { Grid } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { generalDetailsFields } from "../../../Assets/Visit/CostumerDetails";
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

  const getCurrentValue = (name: string) => {
    if (formValues[name]) {
      return formValues[name];
    }
    return mainTenantDetails[name as keyof MainTenantDetails] as string;
  };

  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {generalDetailsFields.map((item, index) => {
          return (
            <Grid
              item
              sm={item.editGridSize}
              key={`identifyingInformationInputs-label-${index}`}
            >
              {item.type === "autocomplete" ? (
                <AutocompleteInput
                  list={autocompleteStreetList}
                  name={item.name}
                  value={getCurrentValue(item.name)}
                  label={item.label}
                  cancelLabel={true}
                />
              ) : (
                <Input
                  label={item.label}
                  value={getCurrentValue(item.name)}
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
