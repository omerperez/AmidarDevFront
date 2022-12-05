import { Avatar, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { qualityRatingOptionsList } from "../../../Assets/Visit/Maintenance";
import { IRating } from "../../../Data/Interfaces/Visit";
import "../../../Layouts/Forms/FieldsTypesStyle.css";

interface RatingInputProp {
  name: string;
  value: string | number;
  onChange: (value: IRating) => void;
}

export default function RatingInput({
  name,
  value,
  onChange,
}: RatingInputProp) {
  const gridItemSize = 12 / qualityRatingOptionsList.length;
  const [rate, setRate] = useState<IRating>();

  useEffect(() => {
    if (rate) {
      onChange(rate);
    }
  }, [rate]);

  const handleClick = (value: number, name: string) => {
    setRate({
      target: { value: value, name: name },
    });
  };

  const isButtonActiveStyle = (btnValue: number | string) => {
    if (value === btnValue) {
      return `active-rating-bg-${btnValue} btn-rating`;
    }
    return "non-active-rating-bg btn-rating";
  };

  return (
    <Grid container spacing={4}>
      {qualityRatingOptionsList.map((option, index) => (
        <Grid
          item
          sm={gridItemSize}
          className="rating-item-layout"
          key={`rating-item-${index}`}
        >
          <Button
            fullWidth
            onClick={() => handleClick(option.value, name)}
            className={isButtonActiveStyle(option.value)}
          >
            <Grid container spacing={0}>
              <Grid item sm={3}>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  className="avatar-design"
                >
                  {option.value}
                </Avatar>
              </Grid>
              <Grid item sm={9} className="label-grid">
                <span
                  className={value === option.value ? option.textActive : ""}
                >
                  {option.label}
                </span>
              </Grid>
            </Grid>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
