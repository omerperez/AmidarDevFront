import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Grid } from "@mui/material";
import { identifyingInformationInputs } from "../../../Assets/Visit";
import Input from "../../Global/Input";
import "../../../Layouts/Style/Visit.css";
import { ApartmentGeneralDetails } from "../../../Builders/Visit";

interface EditGeneralDetailsProps {
  apartment: ApartmentGeneralDetails;
}

export default function EditGeneralDetails({
  apartment,
}: EditGeneralDetailsProps) {
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
                  item.name === "firstName"
                    ? `${apartment?.firstName} ${apartment?.lastName}`
                    : (apartment[item.name] as string)
                }
                onChange={() => console.log("omer")}
                variant={item.isEdit ? "outlined" : "filled"}
                readOnly={!item.isEdit}
                name={item.name}
                isShowLabel={true}
                style={{ marginBottom: 20 }}
                sx={{ height: 35 }}
              />
            </Grid>
          );
        })}
      </Grid>
    </ThemeRightToLeft>
  );
}
