import { Box } from "@mui/material";
import { DataGrid, GridColumns, MuiEvent } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { APARTMENTS } from "../Assets/Constants/Constants";
import AdvanceSearch from "../Components/Home/AdvanceSearch";
import BasicSearch from "../Components/Home/BasicSearch";
import { contexts } from "../Contexts/ContextsExports";
import { TableColumns } from "../Data/Builders/Home";
import { IMainTenantTableDetails } from "../Data/Interfaces/Visit";
import { HomeContextType } from "../Data/Types/Home";
import Loading from "../Layouts/Loading";
import { TableBoxMui } from "../Layouts/Style/MUI/HomeStyle";
import { getDiaryVisitData } from "../Services/Home";

export default function Main() {
  const tableProperties = new TableColumns()
    .columns as unknown as GridColumns<any>;
  const { homeState, updateData, getOriginalData, setLoading } = useContext(
    contexts.Home
  ) as HomeContextType;
  const navigate = useNavigate();
  const [countOfPages, setCountOfPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const diaryVisitData = await getDiaryVisitData();
      updateData(diaryVisitData);
      getOriginalData(diaryVisitData);
      setCountOfPages(
        diaryVisitData?.length > 0 ? diaryVisitData.length / 100 : 1
      );
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOnApartment = (event: MuiEvent<any>) => {
    const row = event.row;
    navigate({
      pathname: `/${APARTMENTS}`,
      search: createSearchParams({
        blockId: row.V_YOMAN_BIKUR_SHIKUN_0,
        buildingNumber: row.V_YOMAN_BIKUR_MIVNE_0,
        entrance: row.V_YOMAN_BIKUR_KNISA_0,
        flatId: row.V_YOMAN_BIKUR_DIRA_0,
        personId: row.V_YOMAN_BIKUR_MIS_ZIHUY_0,
      }).toString(),
    });
  };

  if (homeState.isLoading) {
    return <Loading loadingTitle={"טוען נתונים..."} />;
  }

  const tableGetRowId = (row: IMainTenantTableDetails) => {
    return `${row.V_YOMAN_BIKUR_MIS_ZIHUY_0} ${row.V_YOMAN_BIKUR_DIRA_0}`;
  };

  const getRowStyle = (event: MuiEvent<any>) => {
    const row = event.row;
    return row.GREEN === "1"
      ? "bg-green"
      : row.PINK === "1"
      ? "bg-red"
      : "bg-white";
  };

  return (
    <div className="mt-20">
      {homeState.isShowAdvanceSearch && <AdvanceSearch />}
      <div className="mb-50">
        <div className="table-search">
          <BasicSearch />
        </div>
        <Box sx={TableBoxMui}>
          <DataGrid
            rows={homeState.currentData}
            getRowId={tableGetRowId}
            onRowClick={handleClickOnApartment}
            columns={tableProperties}
            pageSize={100}
            getCellClassName={getRowStyle}
            rowsPerPageOptions={[countOfPages]}
          />
        </Box>
      </div>
    </div>
  );
}
