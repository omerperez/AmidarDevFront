import React from "react";
import Card from "@mui/material/Card";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";
import { Fab, Grid } from "@mui/material";
import "../../Visit.css";
import { contactInfoLabels } from "../../Assets";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";
import { TextAreaInput } from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import { Edit } from "@mui/icons-material";

export default function ContactInformation({ apartment }) {
  return (
    <ThemeStyleRTL>
      <div className="section-general">
        <SectionTitle title={`פרטי התקשרות`} />
        <Card className="white-box">
          <Grid container spacing={1}>
            {contactInfoLabels.map((occupancyItem, index) => (
              <>
                <Grid item sm={index === 2 ? 2.5 : 4} key={index}>
                  <b className="card-body-text-label">{occupancyItem.label}</b>
                  <br />
                  <b className="card-body-text-value">{occupancyItem.value}</b>
                </Grid>
                {index === 2 ? (
                  <Grid
                    item
                    md={1.5}
                    key={`label-${index}`}
                    className="text-end"
                  >
                    <Fab className="edit-fab" aria-label="edit">
                      <Edit />
                    </Fab>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
          <Grid container spacing={0}>
            <Grid item sm={9.3} className="mb-10">
              <div className="mt-10">
                <b className="card-body-text-label">פרטי התקשרות נוספים</b>
                <TextAreaInput minRow={3} />
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </ThemeStyleRTL>
  );
}
