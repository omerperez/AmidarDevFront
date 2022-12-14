import { useId, useContext } from "react";
import { Button, Divider, Grid, Stack, TextField } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";
import { contexts } from "../../Contexts/ContextsExports";
import useForm from "../../Hooks/useForm";
import { getAdvanceSearchData } from "../../Services/Home";
import {
  advanceSearchInputsProperties,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
} from "../../Assets/Home";
import { TextFieldMui } from "../../Layouts/Style/MUI/HomeStyle";
import "../../Layouts/Style/CSS/Home.css";
import { ADVANCE_SEARCH } from "../../Assets/Constants/Constants";
import { HomeContextType } from "../../Data/Types/Home";

export default function AdvanceSearch() {
  const [values, changeForm] = useForm();
  const { homeState, setLoading, setAdvanceSearch, updateData } = useContext(
    contexts.Home
  ) as HomeContextType;

  const inputsId = useId();

  const handleClickSearch = async () => {
    setLoading(true);
    const advanceSearchResponseData = await getAdvanceSearchData(values);
    updateData(advanceSearchResponseData);
    setAdvanceSearch(homeState.isShowAdvanceSearch);
    setLoading(false);
  };

  const handleClickAdvanceSearch = () => {
    setAdvanceSearch(homeState.isShowAdvanceSearch);
  };

  return (
    <>
      <div className="adv-search-title-location">
        <span className="adv-search-title">{ADVANCE_SEARCH}</span>
        <Search fontSize="large" className="adv-search-icon" />
      </div>
      <Divider className="adv-search-divider" />
      <div className="adv-search-container">
        <ThemeRightToLeft>
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
                    md={input.lable === "????????" ? 6 : 3}
                    key={`advanceSearch-Grid-${index}`}
                  >
                    <TextField
                      sx={TextFieldMui}
                      fullWidth
                      key={`advanceSearch-TextField-${index}`}
                      id={inputsId}
                      value={values[input.name] ?? ""}
                      className="m-5"
                      label={input.lable}
                      name={input.name}
                      variant="outlined"
                      onChange={(e) => {
                        changeForm(e);
                      }}
                    />
                  </Grid>
                );
              })}
            <Grid item xs={2} sm={2} md={3} className="d-flex jc-end">
              <Stack direction="row" spacing={2} sx={{ margin: "auto 0" }}>
                <Button
                  size="large"
                  sx={{ height: 50, borderRadius: "8px" }}
                  variant="contained"
                  onClick={handleClickSearch}
                  className="bg-amidar-blue"
                  fullWidth
                  startIcon={<Search />}
                >
                  <span className="adv-search-btn-text">??????????</span>
                </Button>
                <Button
                  size="large"
                  sx={{ height: 50, borderRadius: "8px" }}
                  variant="contained"
                  onClick={handleClickAdvanceSearch}
                  className="bg-amidar-cancel"
                  fullWidth
                  startIcon={<Close />}
                >
                  <span className="adv-search-btn-text">??????????</span>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </ThemeRightToLeft>
      </div>
      <Divider className="adv-search-divider" />
    </>
  );
}
