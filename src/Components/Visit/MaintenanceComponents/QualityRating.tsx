import { ChangeEvent, forwardRef, Ref, useState } from "react";
import RatingInput from "./RatingInput";
import { Chip, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import TextArea from "../../Global/TextArea";
import { IMaintenanceItem, ISelectListItem } from "../../../Interfaces/Visit";

interface QualityRatingProps {
  item: IMaintenanceItem;
  onChange: (e: ChangeEvent) => void;
  options?: any;
}
function QualityRating(
  { item, onChange, options }: QualityRatingProps,
  ref: Ref<any>
) {
  const [deficienciesText, setDeficienciesText] = useState<string>("");

  const handleChangeValue = (e: any) => {
    onChange(e);
  };

  const handleClickDef = (label: string) => {
    const currentDeficienciesText = `${deficienciesText} ${label}`;
    setDeficienciesText(currentDeficienciesText.replace(/  +/g, " "));
  };

  const isTextAreaRequired = (value: number) => {
    return value < 4;
  };

  return (
    <div className="qr-layout">
      <h3 className="mb-none qr-title">{item.title}</h3>
      <Grid container spacing={0} className="mt-20">
        <Grid item xs={12} className="">
          <RatingInput
            value={options[item.name]}
            onChange={handleChangeValue}
            name={item.name}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <div className="mt-10">
            <TextArea
              title={"הערות"}
              required={isTextAreaRequired(options[item.name])}
              name={item.areaName}
              value={deficienciesText}
              setValue={setDeficienciesText}
              minRow={5}
              ref={ref}
            />
          </div>
          <div className="chips-pos">
            {item.deficienciesList.map(
              (def: ISelectListItem, index: number) => (
                <Chip
                  key={`deficienciesList-chip-${index}`}
                  label={def.label}
                  className={"chip-margin"}
                  onClick={() => handleClickDef(def.label)}
                  deleteIcon={<Add />}
                />
              )
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(QualityRating);

export default forwaredQualityRating;
