import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { boxStyle } from "../Components/HomePageComponents/HomePageAssets";
import Box from "@mui/material/Box";
import MainTableSearch from "../Components/HomePageComponents/MainTableSearch";
import Loading from "../Layouts/Loading";
import { getDiaryVisitData } from "../Components/HomePageComponents/HomePageService";
import AdvanceSearch from "../Components/HomePageComponents/AdvanceSearch";
import { HomeContext } from "../Contexts/HomeContext";
import { createSearchParams, useNavigate } from "react-router-dom";
import { TableColumns } from "../Data/Builders/MainTable";

export default function Main() {
  const tableProperties = new TableColumns().columns;
  const {
    state,
    changeTableData,
    getEmployeeOriginalTableData,
    changeLoadingStatus,
  } = useContext(HomeContext);
  const navigate = useNavigate();
  const [countOfPages, setCountOfPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const diaryVisitData = await getDiaryVisitData();
      changeTableData(diaryVisitData);
      getEmployeeOriginalTableData(diaryVisitData);
      setCountOfPages(
        diaryVisitData?.length > 0 ? diaryVisitData.length / 100 : 1
      );
      changeLoadingStatus(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOnApartment = (event) => {
    const row = event.row;
    navigate({
      pathname: "/apartments",
      search: createSearchParams({
        blockId: row.V_YOMAN_BIKUR_SHIKUN_0,
        buildingNumber: row.V_YOMAN_BIKUR_MIVNE_0,
        entrance: row.V_YOMAN_BIKUR_KNISA_0,
        flatId: row.V_YOMAN_BIKUR_DIRA_0,
        personId: row.V_YOMAN_BIKUR_MIS_ZIHUY_0,
      }).toString(),
    });
  };

  if (state.loading) {
    return <Loading />;
  }

  const tableGetRowId = (row) => {
    return `${row.V_YOMAN_BIKUR_MIS_ZIHUY_0} ${row.V_YOMAN_BIKUR_DIRA_0}`;
  };

  const getRowStyle = (event) => {
    const row = event.row;
    return row.GREEN === "1" ? "bg-green" : row.PINK === "1" ? "bg-red" : null;
  };
  return (
    <>
      {state.showAdvanceSearch ? <AdvanceSearch /> : null}
      <div className="mb-50">
        <div className="table-search">
          <MainTableSearch />
        </div>
        <Box sx={boxStyle}>
          <DataGrid
            rows={state.tableData}
            getRowId={tableGetRowId}
            onRowClick={handleClickOnApartment}
            columns={tableProperties}
            pageSize={100}
            getCellClassName={getRowStyle}
            rowsPerPageOptions={[countOfPages]}
          />
        </Box>
      </div>
    </>
  );
}
