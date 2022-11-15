import { Fragment } from "react";
import SubPageTitle from "../SubPageTitle";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Card, Fab, Grid } from "@mui/material";
import { identifyingInformationInputs } from "../../../Assets/Visit";
import { Edit } from "@mui/icons-material";
import GenericDialog from "../../Global/GenericDialog";
import EditGeneralDetails from "./EditGeneralDetails";
import "../../../Layouts/Style/Visit.css";
import { ApartmentGeneralDetails } from "../../../Builders/Visit";

interface TenantGeneralDetailsProps {
  apartment: ApartmentGeneralDetails;
}

export default function TenantGeneralDetails({
  apartment,
}: TenantGeneralDetailsProps) {
  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPageTitle title="פרטי הלקוח" />
        <Card className="white-box">
          <Grid container spacing={2.5} className="mb-10">
            {identifyingInformationInputs.map((item, index) => (
              <Fragment key={`tenant-general-details-${index}`}>
                <Grid
                  item
                  md={item.md}
                  key={`TenantGeneralDetailsLabel-${index}`}
                >
                  <div className="label-pos">
                    <span className="card-body-text-label">{item.label}</span>
                  </div>
                  <span className="card-body-text-value">
                    {item.name === "firstName"
                      ? `${apartment.firstName} ${apartment.lastName}`
                      : (apartment[item.name] as string)}
                  </span>
                </Grid>
                {index === 1 && (
                  <Grid
                    item
                    md={1.5}
                    key={`label-dialog-${index}`}
                    className="text-end"
                  >
                    <GenericDialog
                      children={
                        <Fab className="edit-fab" aria-label="edit">
                          <Edit />
                        </Fab>
                      }
                      closeBtn={false}
                      title={apartment.firstName + " " + apartment.lastName}
                      content={<EditGeneralDetails apartment={apartment} />}
                    />
                  </Grid>
                )}
              </Fragment>
            ))}
          </Grid>
        </Card>
      </div>
    </ThemeRightToLeft>
  );
}
