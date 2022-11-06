import React, { forwardRef, useState, useEffect } from "react";
import { Chip, FormLabel, Grid, Stack } from "@mui/material";
import {
  TextAreaInput,
  MultipleSelectInput,
  DiscreteSlider,
} from "../../../../Components/GlobalComponents/ProjectFieldsTypes";
import RatingInput from "../../../Global/FieldsTypes/RatingInput";
import { Add, Delete, Done } from "@mui/icons-material";
import ThemeStyleRTL from "../../../../Assets/Style/ThemeStyleRTL";

function QualityRating({ item, onChange, options }, ref) {
  const [deficiencies, setDeficiencies] = useState([]);
  const [deficienciesText, setDeficienciesText] = useState("");

  const handleInputTextOfDeficiencies = (e) => {
    setDeficienciesText(e.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const currentValues = typeof value === "string" ? value.split(",") : value;
    setDeficiencies(currentValues);
  };

  useEffect(() => {
    let tempDeficiencies = [];

    deficiencies &&
      deficiencies.forEach((defect) => {
        if (deficienciesText.indexOf(defect) === -1) {
          tempDeficiencies.push(defect);
        }
      });

    let tempCurrentText = deficienciesText;

    item.deficienciesList &&
      item.deficienciesList.forEach((defectItem) => {
        if (
          tempCurrentText.indexOf(defectItem.value) !== -1 &&
          !deficiencies.includes(defectItem.value)
        ) {
          tempCurrentText = tempCurrentText.replaceAll(defectItem.value, "");
        }
      });

    const currentDeficienciesText = `${tempCurrentText} ${tempDeficiencies
      .toString()
      .replaceAll("[")
      .replaceAll("]")}`;

    setDeficienciesText(currentDeficienciesText.replace(/  +/g, " "));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deficiencies]);

  const handleChangeValue = (e) => {
    onChange(e);
  };

  const [activeDef, setActiveDef] = useState(-1);

  const handleClickDef = (index) => {
    if (activeDef !== index) {
      setActiveDef(index);
    } else {
      setActiveDef(-1);
    }
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
          {/* <MultipleSelectInput
              title={"ליקויים +"}
              required={options[item.name] < 75 && !options[item.areaName]}
              inputWidth={220}
              selectList={item.deficienciesList}
              name={`deficiencies-${item.title}`}
              value={deficiencies}
              handleChange={handleChange}
            /> */}

          <div className="mt-10">
            <TextAreaInput
              title={"הערות"}
              required={
                options[item.name] < 4 &&
                (!options[item.areaName] || !options[item.areaName] === "")
              }
              name={item.areaName}
              value={deficienciesText}
              onChange={handleInputTextOfDeficiencies}
              minRow={5}
              ref={ref}
            />
          </div>
          <div className="chips-pos">
            {item.deficienciesList.map((def, index) => (
              <ThemeStyleRTL>
                <Chip
                  className={
                    activeDef === index ? "active-chip" : "chip-margin"
                  }
                  label={def.label}
                  onClick={() => handleClickDef(index)}
                  onDelete={() => ""}
                  name={`deficiencies-${def.title}`}
                  deleteIcon={activeDef === index ? <Done /> : <Add />}
                />
              </ThemeStyleRTL>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(QualityRating);

export default forwaredQualityRating;
