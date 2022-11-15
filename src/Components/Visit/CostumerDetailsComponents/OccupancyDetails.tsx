import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { occupancyInformationLabels } from "../../../Assets/Visit";
import SubPagesTitle from "../SubPageTitle";
import { Card, Grid } from "@mui/material";
import { ApartmentGeneralDetails } from "../../../Builders/Visit";
import "../../../Layouts/Style/Visit.css";

interface OccupancyDetailsProps {
  apartment: ApartmentGeneralDetails;
}

export default function OccupancyDetails({ apartment }: OccupancyDetailsProps) {
  return (
    <ThemeRightToLeft>
      <div className="section-general">
        <SubPagesTitle title={`פרטי אכלוס`} />
        <Card className="white-box">
          <Grid container spacing={2.5} className="mb-10">
            {occupancyInformationLabels.map(
              (occupancyItem, index) =>
                occupancyItem.name !== "area" && (
                  <Grid item sm={4} key={index}>
                    <div className="label-pos">
                      <span className="card-body-text-label">
                        {occupancyItem.label}
                      </span>
                    </div>
                    <span className="card-body-text-value">
                      {apartment[occupancyItem.name] as string}
                      {(occupancyItem.name as string) === "area" && (
                        <span> מ"ר</span>
                      )}
                    </span>
                  </Grid>
                )
            )}
          </Grid>
        </Card>
      </div>
    </ThemeRightToLeft>
  );
}
