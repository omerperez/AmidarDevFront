import { Card, Grid } from "@mui/material";
import { TITLES } from "../../../Assets/Constants/VisitConstants";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { occupancyDetailFields } from "../../../Assets/Visit/CostumerDetails";
import {
  OccupancyDetails,
  VisitGeneralDetails,
} from "../../../Data/Builders/Visit";
import "../../../Layouts/Style/CSS/Visit.css";
import FieldValue from "../FiledValue";
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
            {occupancyDetailFields.map((item, index) => (
              <Grid item sm={4} key={index}>
                <FieldValue
                  label={item.label}
                  value={
                    apartment.occupancyDetails[
                      item.name as keyof OccupancyDetails
                    ] as string
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Card>
      </div>
    </ThemeRightToLeft>
  );
}
