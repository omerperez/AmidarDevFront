import { Button, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ThemeStyleRTL from "../../Assets/ThemeRightToLeft";
import { contexts } from "../../Contexts/ContextsExports";
import { HomeContextType } from "../../Data/Types/Home";
import { BasicSearchTextFieldMui } from "../../Layouts/Style/MUI/HomeStyle";

export default function BasicSearch() {
  const [search, setSearch] = useState("");
  const { homeState, updateData } = useContext(
    contexts.Home
  ) as HomeContextType;

  useEffect(() => {
    if (search !== "") {
      const filteredData =
        homeState.originalData && homeState.originalData.length
          ? homeState.originalData.filter((obj: any) => {
              return Object.values(obj).find((val: any) =>
                val.includes(search)
              );
            })
          : [];
      updateData(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const initSearch = () => {
    setSearch("");
    updateData(homeState.originalData);
  };

  return (
    <div dir="rtl">
      <ThemeStyleRTL>
        <Stack direction="row">
          <TextField
            sx={BasicSearchTextFieldMui}
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
