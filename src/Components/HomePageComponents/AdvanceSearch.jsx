import React, { useId, useContext } from "react";
import { Button, Divider, Grid, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { HomeContext } from "../../Contexts/HomeContext";
import useForm from "../../Hooks/useForm";
import { getAdvanceSearchData } from "./HomePageService";
import {
  advanceSearchInputsProperties,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  TextFieldStyle,
} from "./HomePageAssets";
import ThemeStyleRTL from "../../Assets/Style/ThemeStyleRTL";
import "./Style/HomePage.css";

export default function AdvanceSearch() {
  const [values, changeForm] = useForm();
  const { changeTableData, handleClickAdvanceSearch, changeLoadingStatus } =
    useContext(HomeContext);
  const inputsId = useId();

  const handleClickSearch = async () => {
    changeLoadingStatus(true);
    const advanceSearchResponseData = await getAdvanceSearchData(values);
    changeTableData(advanceSearchResponseData);
    handleClickAdvanceSearch();
    changeLoadingStatus(false);
  };

  return (
    <>
      <div className="adv-search-title-location">
        <span className="adv-search-title">חיפוש מתקדם</span>
        <SearchIcon fontSize="large" className="adv-search-icon" />
      </div>
      <Divider className="adv-search-divider" />
      <div className="adv-search-container">
        <ThemeStyleRTL>
          <Grid
            container
            spacing={advanceSearchGridSpacing}
            columns={advanceSearchGridColumns}
          >
            {advanceSearchInputsProperties &&
              advanceSearchInputsProperties.map((input, index) => {
                return (
                  <Grid
                    item
                    xs={2}
                    md={input.lable === "רחוב" ? 6 : 3}
                    key={`advanceSearch-Grid-${index}`}
                  >
                    <TextField
                      sx={TextFieldStyle}
                      fullWidth
                      key={`advanceSearch-TextField-${index}`}
                      id={inputsId}
                      value={values[input.name] ?? ""}
                      className="m-5"
                      label={input.lable}
                      name={input.name}
                      ariant="outlined"
                      onChange={(e) => {
                        changeForm(e);
                      }}
                    />
                  </Grid>
                );
              })}
            <Grid item xs={2} sm={2} md={3} className="d-flex jc-end">
              <Stack direction="row" spacing={5}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={handleClickSearch}
                  className="bg-amidar-blue"
                  fullWidth
                  startIcon={<SearchIcon />}
                >
                  <span className="adv-search-btn-text">חיפוש</span>
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  onClick={handleClickAdvanceSearch}
                  className="bg-amidar-red"
                  fullWidth
                  startIcon={<CloseIcon />}
                >
                  <span className="adv-search-btn-text">ביטול</span>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </ThemeStyleRTL>
      </div>
      <Divider className="adv-search-divider" />
    </>
  );
}
