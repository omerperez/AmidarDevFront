import { ChangeEvent, useState } from "react";
import Select from "../../Global/Select";
import Input from "../../Global/Input";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Card, Grid, SelectChangeEvent } from "@mui/material";
import { apartmentDetailsLabels } from "../../../Assets/Visit/Maintenance";
import { ApartmentDetails } from "../../../Types/Visit";

interface ApartmentDetailsProps {
  apartmentMaintenanceDetails: ApartmentDetails;
}
export default function ApartmentDetail({
  apartmentMaintenanceDetails,
}: ApartmentDetailsProps) {
  const [genericState, setGenericState] = useState<string | number | undefined>(
    apartmentMaintenanceDetails.area,
  );

  return (
    <ThemeRightToLeft>
      <Card className="apartment-details-box">
        <div className="pl-20">
          <h3 className="mb-none qr-title">פרטי הנכס</h3>
          <Grid container spacing={2} className="mtb-10">
            {apartmentDetailsLabels.map((item, index) => (
              <Grid
                item
                sm={item.gridSize}
                key={`ApartmentDetails-Grid-${index}`}
              >
                <span className="card-body-text-label">{item.label}</span>
                <br />
                <span className="card-body-text-value">
                  {item.type === "select" ? (
                    <Select
                      list={item.values.list}
                      sx={item.values.sx}
                      name={item.values.name}
                      value={genericState}
                      defaultValue={`${
                        apartmentMaintenanceDetails[item.values.name]
                      }`}
                      onChange={(e: SelectChangeEvent<any>) =>
                        setGenericState(e.target.value)
                      }
                    />
                  ) : (
                    <Input
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setGenericState(e.target.value)
                      }
                      isShowLabel={item.values.isShowLabel}
                      readOnly={item.values.readOnly}
                      sx={item.values.sx}
                      name={item.values.name}
                      variant={item.values.variant}
                      value={apartmentMaintenanceDetails[item.values.name]}
                    />
                  )}
                </span>
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </ThemeRightToLeft>
  );
}
