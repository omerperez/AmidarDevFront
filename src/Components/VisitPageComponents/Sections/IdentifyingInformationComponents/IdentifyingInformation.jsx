import React, { useEffect, useState } from "react";
import useForm from "../../../../Hooks/useForm";
import { Button, Grid } from "@mui/material";
import {
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
} from "../../VisitPageAssets";
import "../../VisitPage.css";
import { GenericInputForm } from "../../../GlobalComponents/ProjectFieldsTypes";
import {
  identifyingInformationInputsProperties,
  identifyingInformationValidation,
} from "./IdentifyingInformationAssets";

export default function IdentifyingInformation({ apartmentId }) {
  const [values, changeForm] = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [changes, setChanges] = useState();
  const [isClickEditFirstTime, setIsClickEditFirstTime] = useState(true);

  const handleClickEdit = () => {
    if (isClickEditFirstTime) {
      setIsClickEditFirstTime(false);
      setIsEdit(!isEdit);
    } else {
      setChanges(values);
      setIsEdit(!isEdit);
    }
  };

  useEffect(() => {
    // Object.keys(apartmentId).forEach(function (key) {
    //   values[key] = apartmentId[key];
    // });
    setChanges(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCancelChanges = () => {
    Object.keys(changes).forEach(function (key) {
      values[key] = changes[key];
    });
    setIsEdit(!isEdit);
  };

  if (!apartmentId) {
    return;
  }

  return (
    <div className="global-font">
      <div className="d-flex jc-center mr-2p padding-form mb-40">
        <Grid
          container
          spacing={advanceSearchGridSpacing}
          columns={advanceSearchGridColumns}
        >
          {identifyingInformationInputsProperties.readOnlyItems &&
            identifyingInformationInputsProperties.readOnlyItems.map(
              (item, index) => {
                return (
                  <Grid
                    item
                    xs={item.lable === "divider" ? 12 : 6}
                    sm={item.sm}
                    md={item.md}
                    key={`GeneralProperties-Grid-${item.lable}-${index}`}
                  >
                    {item.lable === "divider" ? (
                      item.name
                    ) : (
                      <GenericInputForm
                        title={item.lable}
                        key={`GeneralProperties-TextField-${item.lable}-${index}`}
                        fullWidth
                        id={index.toString()}
                        value={values[item.name] ?? apartmentId[item.name]}
                        name={item.name}
                        variant={item.variant}
                        readOnly={item.readOnly}
                        onChangeFunction={changeForm}
                        cancelLabel={true}
                      />
                    )}
                  </Grid>
                );
              }
            )}

          {identifyingInformationInputsProperties.editOptionItems &&
            identifyingInformationInputsProperties.editOptionItems.map(
              (item, index) => {
                return (
                  <Grid
                    item
                    xs={index === 0 ? 12 : 6}
                    sm={item.sm}
                    md={item.md}
                    key={`GeneralProperties-Grid-EditOptions${item.lable}-${index}`}
                  >
                    {item.lable === "divider&button" ? (
                      <>
                        {item.name}
                        {isEdit ? (
                          <div>
                            <Button
                              onClick={handleClickEdit}
                              variant="contained"
                              className="general-properties-btn-save-changes"
                            >
                              שמור שינויים
                            </Button>
                            <Button
                              className="general-properties-btn-cancel-changes"
                              onClick={handleClickCancelChanges}
                              variant="contained"
                            >
                              בטל שינויים
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="general-properties-edit-btn"
                            onClick={handleClickEdit}
                            variant="contained"
                          >
                            ערוך פרטים
                          </Button>
                        )}
                      </>
                    ) : (
                      <GenericInputForm
                        title={item.lable}
                        key={`GeneralProperties-TextField-EditOptions-${item.lable}-${index}`}
                        fullWidth
                        id={index.toString()}
                        value={values[item.name] ?? apartmentId[item.name]}
                        name={item.name}
                        variant={!isEdit ? "filled" : item.variant}
                        readOnly={!isEdit}
                        onChangeFunction={changeForm}
                        cancelLabel={true}
                        validation={identifyingInformationValidation[item.name]}
                      />
                    )}
                  </Grid>
                );
              }
            )}
        </Grid>
      </div>
    </div>
  );
}
