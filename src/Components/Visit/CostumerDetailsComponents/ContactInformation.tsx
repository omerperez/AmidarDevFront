import { Fragment } from "react";
import SubPagesTitle from "../SubPageTitle";
import { contactInfoLabels } from "../../../Assets/Visit";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Fab, Grid, Card } from "@mui/material";
import { Edit } from "@mui/icons-material";
import "../../../Layouts/Style/Visit.css";
import GenericDialog from "../../Global/GenericDialog";
import EditContactInformation from "./EditContactInformation";

export default function ContactInformation() {
  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPagesTitle title={`פרטי התקשרות`} />
        <Card className="white-box">
          <Grid container spacing={2.5}>
            {contactInfoLabels.map((occupancyItem, index) => (
              <Fragment key={`ContactInformationFragment-${index}`}>
                <Grid
                  item
                  sm={
                    index === 2
                      ? 2.5
                      : index === contactInfoLabels.length - 1
                      ? 9
                      : 4
                  }
                  key={`ContactInformationGrid-${index}`}
                  className={
                    index === contactInfoLabels.length - 1 ? "mb-10" : ""
                  }
                >
                  <div className="label-pos">
                    <span className="card-body-text-label">
                      {occupancyItem.label}
                    </span>
                  </div>
                  <span
                    className={
                      index === contactInfoLabels.length - 1
                        ? "contact-details-text-value"
                        : "card-body-text-value"
                    }
                  >
                    {occupancyItem.value}
                  </span>
                </Grid>
                {index === 2 && (
                  <Grid
                    item
                    md={1.5}
                    key={`ContactInformationDialog-${index}`}
                    className="text-end"
                  >
                    <GenericDialog
                      children={
                        <Fab className="edit-fab" aria-label="edit">
                          <Edit />
                        </Fab>
                      }
                      closeBtn={false}
                      title={`פרטי התקשרות`}
                      content={<EditContactInformation />}
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
