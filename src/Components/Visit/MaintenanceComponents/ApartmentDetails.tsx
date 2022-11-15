import { ChangeEvent, useState } from "react";
import Select from "../../Global/Select";
import Input from "../../Global/Input";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";
import { Card, Grid, SelectChangeEvent } from "@mui/material";
import { apartmentDetails } from "../../../Assets/Visit/Maintenance";

export default function ApartmentDetails() {
  const [genericState, setGenericState] = useState<string | null>(null);

  return (
    <ThemeRightToLeft>
      <Card className="apartment-details-box">
        <div className="pl-20">
          <h3 className="mb-none qr-title">פרטי הנכס</h3>
          <Grid container spacing={2} className="mtb-10">
            {apartmentDetails.map((item, index) => (
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
                      variant={item.values.variant}
                      value={item.values.value}
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
