import React, { useEffect, useState, useContext } from "react";
import { Stack, TextField, Button } from "@mui/material";
import ThemeStyleRTL from "../../Assets/Style/ThemeStyleRTL";
import { HomeContext } from "../../Contexts/HomeContext";

export default function MainTableSearch() {
  const [search, setSearch] = useState("");
  const { state, changeTableData } = useContext(HomeContext);

  useEffect(() => {
    if (search !== "") {
      const filteredData =
        state.employeeOriginalTableData &&
        state.employeeOriginalTableData.length
          ? state.employeeOriginalTableData.filter((obj) => {
              return Object.values(obj).find((val) => val.includes(search));
            })
          : [];
      changeTableData(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const initSearch = () => {
    setSearch("");
    changeTableData(state.employeeOriginalTableData);
  };

  return (
    <div dir="rtl">
      <ThemeStyleRTL>
        <Stack direction="row">
          <TextField
            id="outlined-basic"
            value={search ?? ""}
            onChange={(e) => setSearch(e.target.value)}
            className="m-5"
            label="חפש"
            ariant="outlined"
          />
          <Button
            className="search-init-btn"
            variant="text"
            onClick={initSearch}
          >
            איפוס
          </Button>
        </Stack>
      </ThemeStyleRTL>
    </div>
  );
}
