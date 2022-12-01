import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import { Avatar, Button, Grid } from "@mui/material";
import { forwardRef, Ref, useContext, useEffect, useState } from "react";
import { contexts } from "../../../Contexts/ContextsExports";
import { IOtherDefect } from "../../../Data/Interfaces/Visit";
import { VisitContextType } from "../../../Data/Types/Visit";
import TextArea from "../../Global/TextArea";

interface IsExistInputProps {
  item: { title: string; name: string; areaName: string };
  otherDefect: IOtherDefect;
}

function IsExistInput({ item, otherDefect }: IsExistInputProps, ref: Ref<any>) {
  const { visitState, setMaintenance } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [deficienciesText, setDeficienciesText] = useState<string>(
    otherDefect?.defectDescription ?? ""
  );
  const [currentValue, setCurrentValue] = useState<Boolean | null>(
    otherDefect?.rate === false || otherDefect?.rate === true
      ? otherDefect.rate
      : null
  );
  const isTextAreaRequired = (value: Boolean) => {
    return value;
  };
  useEffect(() => {
    if (currentValue !== null) {
      const otherMaintenanceVisitDetails = {
        ...visitState.maintenanceVisit.otherMaintenanceVisitDetails,
        [item.name]: {
          rate: currentValue,
          defectDescription: deficienciesText,
        },
      };
      const maintenanceVisit = {
        ...visitState.maintenanceVisit,
        otherMaintenanceVisitDetails: otherMaintenanceVisitDetails,
      };
      setMaintenance(maintenanceVisit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  return (
    <div className="qr-layout">
      <div className="mt-20">
        <h3 className="mb-none qr-title">{item.title}</h3>
      </div>
      <Grid container spacing={0} className="mt-20">
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setCurrentValue(false)}
                className={
                  currentValue === false
                    ? "active-rating-bg-5 btn-rating"
                    : "btn-rating non-active-rating-bg"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design "
                    >
                      <ThumbUpAlt fontSize="small" />
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <span
                      className={
                        currentValue === false ? "col-white fw-500" : "fw-500"
                      }
                    >
                      אין
                    </span>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item sm={2} className="rating-item-layout">
              <Button
                fullWidth
                onClick={() => setCurrentValue(true)}
                className={
                  currentValue === true
                    ? "btn-rating active-rating-bg-1"
                    : "non-active-rating-bg btn-rating"
                }
              >
                <Grid container spacing={0}>
                  <Grid item sm={3}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      className="avatar-design"
                    >
                      <ThumbDownAlt fontSize="small" />
                    </Avatar>
                  </Grid>
                  <Grid item sm={9} className="label-grid">
                    <span
                      className={
                        currentValue === true ? "col-white fw-500" : "fw-500"
                      }
                    >
                      יש
                    </span>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="mt-10">
            <TextArea
              title={"הערות"}
              required={isTextAreaRequired(currentValue === true ?? false)}
              value={deficienciesText}
              setValue={setDeficienciesText}
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
