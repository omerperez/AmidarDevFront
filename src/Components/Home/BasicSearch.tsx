import { useEffect, useState, useContext } from "react";
import { Stack, TextField, Button } from "@mui/material";
import ThemeStyleRTL from "../../Assets/ThemeRightToLeft";
import { contexts } from "../../Contexts/ContextsExports";

const TextFieldStyle = {
  "& .MuiFormLabel-root": {
    fontWeight: "bolder",
    fontFamily: "Tahoma",
  },
};

export default function BasicSearch() {
  const [search, setSearch] = useState("");
  const { homeState, homeDispatch } = useContext(contexts.Home);

  useEffect(() => {
    if (search !== "") {
      const filteredData =
        homeState.employeeOriginalTableData &&
        homeState.employeeOriginalTableData.length
          ? homeState.employeeOriginalTableData.filter((obj: any) => {
              return Object.values(obj).find((val: any) =>
                val.includes(search)
              );
            })
          : [];

      homeDispatch({ type: "changeTableData", tableData: filteredData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const initSearch = () => {
    setSearch("");
    homeDispatch({
      type: "changeTableData",
      tableData: homeState.employeeOriginalTableData,
    });
  };

  return (
    <div dir="rtl">
      <ThemeStyleRTL>
        <Stack direction="row">
          <TextField
            sx={TextFieldStyle}
            id="outlined-basic"
            value={search ?? ""}
            onChange={(e) => setSearch(e.target.value)}
            className="m-5"
            label="חפש"
            variant="outlined"
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
