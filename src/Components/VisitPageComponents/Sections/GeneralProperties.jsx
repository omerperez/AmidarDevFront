import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  advanceSearchInputsProperties,
  textFieldGeneralPropertiesFormStyle,
} from "../VisitPageAssets";
import "../VisitPage.css";

export default function GeneralProperties({ apartmentId }) {
  return (
    <div className="global-font">
      <div className="d-flex jc-center mr-2p padding-form mb-40">
        <Grid
          container
          spacing={advanceSearchGridSpacing}
          columns={advanceSearchGridColumns}
        >
          {advanceSearchInputsProperties &&
            advanceSearchInputsProperties.map((item, index) => {
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
                    <>
                      <h5 className="label-title">{item.lable}</h5>
                      <TextField
                        key={`GeneralProperties-TextField-${item.lable}-${index}`}
                        fullWidth
                        sx={textFieldGeneralPropertiesFormStyle}
                        id={index.toString()}
                        // value={apartmentId[item.name]}
                        value={"עומר פרץ בדיקה"}
                        name={item.name}
                        variant={item.variant}
                        InputProps={{
                          readOnly: item.readOnly,
                        }}
                      />
                    </>
                  )}
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
}
