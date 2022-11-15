import { useEffect, useState, useContext } from "react";
import {
  DataGrid,
  GridColumns,
  GridEventListener,
  MuiEvent,
} from "@mui/x-data-grid";
import { boxStyle } from "../Components/Home/Assets";
import BasicSearch from "../Components/Home/BasicSearch";
import AdvanceSearch from "../Components/Home/AdvanceSearch";
import Loading from "../Layouts/Loading";
import { getDiaryVisitData } from "../Services/Home";
import { TableColumns } from "../Builders/Home";
import { Box } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { contexts } from "../Contexts/ContextsExports";
import { IMainTenantTableDetails } from "../Interfaces/Visit";

export default function Main() {
  const tableProperties = new TableColumns()
    .columns as unknown as GridColumns<any>;
  const { homeState, homeDispatch } = useContext(contexts.Home);
  const navigate = useNavigate();
  const [countOfPages, setCountOfPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const diaryVisitData = await getDiaryVisitData();
      homeDispatch({ type: "changeTableData", tableData: diaryVisitData });
      homeDispatch({
        type: "getEmployeeOriginalTableData",
        employeeOriginalTableData: diaryVisitData,
      });
      setCountOfPages(
        diaryVisitData?.length > 0 ? diaryVisitData.length / 100 : 1,
      );
      homeDispatch({ type: "changeLoadingStatus", loadingStatus: false });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOnApartment = (event: MuiEvent<any>) => {
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

  if (homeState.loading) {
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
      {homeState.showAdvanceSearch && <AdvanceSearch />}
      <div className="mb-50">
        <div className="table-search">
          <BasicSearch />
        </div>
        <Box sx={boxStyle}>
          <DataGrid
            rows={homeState.tableData}
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
