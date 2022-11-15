import { ChangeEvent, forwardRef, Ref, useState } from "react";
import { Avatar, Button, Grid } from "@mui/material";
import TextArea from "../../Global/TextArea";

interface IsExistInputProps {
  item: { title: string; name: string; areaName: string };
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  options?: any;
}

function IsExistInput(
  { item, onChange, options }: IsExistInputProps,
  ref: Ref<any>
) {
  const [value, setValue] = useState<Boolean>(false);
  const isTextAreaRequired = (value: number) => {
    return value < 4;
  };
  return (
    <div className="qr-layout">
      <div className="mt-20">
        <h3 className="mb-none qr-title">{item.title}</h3>
      </div>
      <Grid container spacing={0} className="mt-20">
        <Grid item xs={12} className="">
          <Grid container spacing={4}>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setValue(true)}
                className={
                  value
                    ? "active-rating-bg-5 btn-rating"
                    : "non-active-rating-bg btn-rating"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design"
                    >
                      1
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <span className={value ? "col-white fw-500" : "fw-500"}>
                      יש
                    </span>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setValue(false)}
                className={
                  value
                    ? "btn-rating non-active-rating-bg"
                    : "btn-rating active-rating-bg-1"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design"
                    >
                      2
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <span className={value ? "fw-500" : "col-white fw-500"}>
                      אין
                    </span>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <div className="mt-10">
            <TextArea
              title={"הערות"}
              required={isTextAreaRequired(options[item.name])}
              name={item.areaName}
              minRow={5}
              ref={ref}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(IsExistInput);

export default forwaredQualityRating;
