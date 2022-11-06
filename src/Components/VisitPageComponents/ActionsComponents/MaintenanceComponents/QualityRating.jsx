import React, { forwardRef, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  TextAreaInput,
  MultipleSelectInput,
  DiscreteSlider,
} from "../../../GlobalComponents/ProjectFieldsTypes";

function QualityRating(
  {
    item,
    onChangeFunction,
    values,
    allDefectsAreNormal,
    changeStatusOfAllDefects,
  },
  ref
) {
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

  const [flag, setFlag] = useState(allDefectsAreNormal);

  const handleChangeValue = (e) => {
    onChangeFunction(e);
    setFlag(false);
    if (allDefectsAreNormal) {
      changeStatusOfAllDefects();
    }
  };

  useEffect(() => {
    if (allDefectsAreNormal) {
      setFlag(true);
    }
  }, [allDefectsAreNormal]);

  return (
    <div className="rtl">
      <h3 className="mb-none qr-title">{item.title}</h3>
      <Grid container spacing={0}>
        <Grid item xs={12} className="pl-pr-15">
          <DiscreteSlider
            value={flag ? 100 : values[item.name]}
            name={item.name}
            onChangeFunction={handleChangeValue}
          />
        </Grid>
        {values[item.name] < 75 && !values[item.areaName] ? (
          <Grid item xs={12} md={10}>
            <MultipleSelectInput
              title={"ליקויים +"}
              required={values[item.name] < 75 && !values[item.areaName]}
              inputWidth={220}
              selectList={item.deficienciesList}
              name={`deficiencies-${item.title}`}
              value={deficiencies}
              handleChange={handleChange}
            />
            <TextAreaInput
              title={"תיאור הליקוי"}
              required={
                values[item.name] < 75 &&
                (!values[item.areaName] || !values[item.areaName] === "")
              }
              name={item.areaName}
              value={deficienciesText}
              onChangeFunction={handleInputTextOfDeficiencies}
              minRow={5}
              ref={ref}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

const forwaredQualityRating = forwardRef(QualityRating);

export default forwaredQualityRating;
