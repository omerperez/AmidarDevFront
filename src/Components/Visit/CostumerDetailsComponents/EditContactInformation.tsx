import { Grid } from "@mui/material";
import { ChangeEvent, Fragment } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { editContactFields } from "../../../Assets/Visit/CostumerDetails";
import {
  ContactInformation,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import Input from "../../Global/Input";
import TextArea from "../../Global/TextArea";

interface EditContactInformationProps {
  apartment: VisitGeneralDetails;
  formValues: { [key: string]: any };
  changeFormValues: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function EditContactInformation({
  apartment,
  formValues,
  changeFormValues,
}: EditContactInformationProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (changeFormValues) {
      changeFormValues(e);
    }
  };

  const getCurrentValue = (name: string) => {
    if (formValues[name]) {
      return formValues[name];
    }
    return (
      apartment.contactInformation[name as keyof ContactInformation] ?? "-"
    );
  };

  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {editContactFields.map((item, index) => (
          <Fragment key={`EditContactInformationFragment-${index}`}>
            <Grid
              item
              sm={item.gridSize}
              key={`EditContactInformationFragmentLabel-${index}`}
            >
              {item.type === "textarea" ? (
                <TextArea
                  title={item.label}
                  value={`${
                    apartment.contactInformation[
                      item.name as keyof ContactInformation
                    ]
                  }`}
                  name={item.name}
                  minRow={5}
                  required={false}
                />
              ) : (
                <Input
                  label={item.label}
                  value={getCurrentValue(item.name)}
                  type={item.type}
                  onChange={handleChange}
                  variant={"outlined"}
                  readOnly={false}
                  name={item.name}
                  validation={item.validation}
                />
              )}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </ThemeRightToLeft>
  );
}
