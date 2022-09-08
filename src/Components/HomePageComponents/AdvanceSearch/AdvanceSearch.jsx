import React, { useId, useContext } from "react";
import { Button, Divider, Grid, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { HomeContext } from "../../../Contexts/HomeContext";
import useForm from "../../../Hooks/useForm";
import { getAdvanceSearchData } from "../HomePageService";
import {
  advanceSearchInputsProperties,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
} from "../HomePageAssets";
import ThemeStyleRTL from "../Style/ThemeStyleRTL";
import "../Style/HomePage.css";

export default function AdvanceSearch() {
  const [values, changeForm] = useForm();
  const { changeTableData, handleClickAdvanceSearch } = useContext(HomeContext);
  const inputsId = useId();

  const handleClickSearch = async () => {
    const advanceSearchResponseData = await getAdvanceSearchData(values);
    changeTableData(advanceSearchResponseData);
    handleClickAdvanceSearch();
  };

  return (
    <>
      <div className="mr-2p d-flex jc-start">
        <span className="global-font fs-24 fw-100 ml-10">חיפוש מתקדם</span>
        <SearchIcon fontSize="large" className="adv-search-style" />
      </div>
      <Divider className="ml-2p mr-2p mb-20" />
      <div className="d-flex jc-center ml-2p mr-2p">
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
                    sm={2}
                    md={input.lable === "רחוב" ? 6 : 3}
                    key={`advanceSearch-Grid-${index}`}
                  >
                    <TextField
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
                  <span className="global-font fs-20">חיפוש</span>
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  onClick={handleClickAdvanceSearch}
                  className="bg-amidar-red"
                  fullWidth
                  startIcon={<CloseIcon />}
                >
                  <span className="global-font fs-20">ביטול</span>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </ThemeStyleRTL>
      </div>
      <Divider className="ml-2p mr-2p mb-20 mt-20" />
    </>
  );
}
