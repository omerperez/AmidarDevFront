import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";
import { Grid } from "@mui/material";
import "../../Visit.css";
import { occupancyInformationLabels } from "../../Assets";
import SectionTitle from "../../../../Components/VisitPageComponents/VisitPageLayout/SectionTitle";

export default function OccupancyDetails({ apartment }) {
  return (
    <ThemeStyleRTL>
      <div className="section-general">
        <SectionTitle title={`פרטי אכלוס`} />
        <Card className="white-box">
          <Grid container spacing={3}>
            {occupancyInformationLabels.map(
              (occupancyItem, index) =>
                occupancyItem.name !== "area" && (
                  <Grid item sm={4} key={index}>
                    <div className="label-pos">
                      <b className="card-body-text-label">
                        {occupancyItem.label}
                      </b>
                    </div>
                    <b className="card-body-text-value">
                      {apartment[occupancyItem.name]}
                      {occupancyItem.name === "area" && <span> מ"ר</span>}
                    </b>
                  </Grid>
                ),
            )}
          </Grid>
          <CardActions></CardActions>
        </Card>
      </div>
    </ThemeStyleRTL>
  );
}
