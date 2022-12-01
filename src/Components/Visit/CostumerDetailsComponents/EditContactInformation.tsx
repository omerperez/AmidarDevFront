import { Grid } from "@mui/material";
import { ChangeEvent, Fragment } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { editContactInfoLabels } from "../../../Assets/Visit";
import {
  ContactInformation,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import Input from "../../Global/Input";
import TextArea from "../../Global/TextArea";

interface EditContactInformationProps {
  apartment: VisitGeneralDetails;
  formValues: any;
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

  return (
    <ThemeRightToLeft>
      <Grid container spacing={3}>
        {editContactInfoLabels.map((item, index) => {
          return (
            <Fragment key={`EditContactInformationFragment-${index}`}>
              {index === editContactInfoLabels.length - 1 ? (
                <Grid
                  item
                  md={12}
                  key={`EditContactInformationFragmentLabel-${index}`}
                >
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
                </Grid>
              ) : (
                <Grid item md={3} key={`EditContactInformationLabel-${index}`}>
                  <Input
                    label={item.label}
                    value={
                      formValues[`${item.name}`] ??
                      `${
                        apartment.contactInformation[
                          item.name as keyof ContactInformation
                        ] ?? "-"
                      }`
                    }
                    type={item.type}
                    onChange={handleChange}
                    variant={"outlined"}
                    readOnly={false}
                    name={item.name}
                    validation={item.validation}
                  />
                </Grid>
              )}
            </Fragment>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
