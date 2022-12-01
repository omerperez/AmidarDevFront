import { Add } from "@mui/icons-material";
import { Chip, Grid } from "@mui/material";
import { forwardRef, Ref, useContext, useEffect, useState } from "react";
import { MaintenanceVisit } from "../../../Data/Builders/Visit";
import { contexts } from "../../../Contexts/ContextsExports";
import useForm from "../../../Hooks/useForm";
import { IDefect, IMaintenanceItem } from "../../../Data/Interfaces/Visit";
import TextArea from "../../Global/TextArea";
import RatingInput from "./RatingInput";
import { VisitContextType } from "../../../Data/Types/Visit";

interface QualityRatingProps {
  item: IMaintenanceItem;
  defaultValue: IDefect;
}
function QualityRating(
  { item, defaultValue }: QualityRatingProps,
  ref: Ref<any>
) {
  const [values, handleChange] = useForm();
  const { visitState, setMaintenance } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [deficienciesText, setDeficienciesText] = useState<string>(
    defaultValue.defectDescription ?? ""
  );
  const handleChangeValue = (e: any) => {
    handleChange(e);
  };
  const handleClickDef = (label: string) => {
    const currentDeficienciesText = `${deficienciesText} ${label}`;
    setDeficienciesText(currentDeficienciesText.replace(/  +/g, " "));
  };
  const isTextAreaRequired = (value: number) => {
    return value < 4;
  };

  useEffect(() => {
    if (values[item.name]) {
      const updateMaintenanceVisit = {
        ...visitState.maintenanceVisit,
        [item.name]: {
          rate: values[item.name],
          defectDescription: deficienciesText,
        },
      };
      setMaintenance(updateMaintenanceVisit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <div className="qr-layout">
      <h3 className="mb-none qr-title">{item.title}</h3>
      <Grid container spacing={0} className="mt-20">
        <Grid item xs={12}>
          <RatingInput
            value={
              (
                visitState.maintenanceVisit[
                  item.name as keyof MaintenanceVisit
                ] as IDefect
              ).rate
            }
            onChange={handleChangeValue}
            name={item.name}
          />
        </Grid>
        <Grid item xs={12} className="mt-10">
          <TextArea
            title="הערות"
            required={isTextAreaRequired(values[item.name])}
            name={item.areaName}
            value={deficienciesText}
            setValue={setDeficienciesText}
            minRow={5}
            ref={ref}
          />
        </Grid>
        <Grid item xs={12} className="mt-10">
          <div className="chips-pos">
            {item.deficienciesList.map((def, index: number) => (
              <Chip
                key={`deficienciesList-chip-${index}`}
                label={def}
                className="chip-margin"
                onClick={() => handleClickDef(def)}
                deleteIcon={<Add />}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(QualityRating);

export default forwaredQualityRating;
