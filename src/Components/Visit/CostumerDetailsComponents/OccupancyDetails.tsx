import { Card, Grid } from "@mui/material";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { occupancyInformationLabels } from "../../../Assets/Visit";
import {
  OccupancyDetails,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import SubPagesTitle from "../SubPageTitle";

interface OccupancyDetailsProps {
  apartment: VisitGeneralDetails;
}

export default function OccupancyDetail({ apartment }: OccupancyDetailsProps) {
  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPagesTitle title={TITLES.OCCUPANCY_DETAILS} />
        <Card className="white-box">
          <Grid container spacing={2.5} className="mb-10">
            {occupancyInformationLabels.map((occupancyItem, index) => (
              <Grid item sm={4} key={index}>
                <div className="label-pos">
                  <span className="card-body-text-label">
                    {occupancyItem.label}
                  </span>
                </div>
                <span className="card-body-text-value">
                  {`${
                    apartment.occupancyDetails[
                      occupancyItem.name as keyof OccupancyDetails
                    ]
                  }`}
                </span>
              </Grid>
            ))}
          </Grid>
        </Card>
      </div>
    </ThemeRightToLeft>
  );
}
