import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { boxStyle } from "../Components/HomePageComponents/HomePageAssets";
import Box from "@mui/material/Box";
import MainTableSearch from "../Components/HomePageComponents/MainTableSearch";
import Loading from "../Layouts/Loading";
import { getDiaryVisitData } from "../Components/HomePageComponents/HomePageService";
import AdvanceSearch from "../Components/HomePageComponents/AdvanceSearch/AdvanceSearch";
import { HomeContext } from "../Contexts/HomeContext";
import { createSearchParams, useNavigate } from "react-router-dom";
import { TableColumns } from "../Data/Builders/MainTable";

export default function Main() {
  const tableProperties = new TableColumns().columns;
  const { state, changeTableData, getEmployeeOriginalTableData } =
    useContext(HomeContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countOfPages, setCountOfPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const diaryVisitData = await getDiaryVisitData();
      changeTableData(diaryVisitData);
      getEmployeeOriginalTableData(diaryVisitData);
      setCountOfPages(
        diaryVisitData && diaryVisitData.length > 0
          ? diaryVisitData.length / 100
          : 1
      );
      setLoading(false);
    };
    fetchData();
  }, [changeTableData, getEmployeeOriginalTableData]);

  const handleClickOnApartment = (row) => {
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {state.showAdvanceSearch ? <AdvanceSearch /> : null}
      <div className="mb-50">
        <div className="d-flex jc-start mr-2p ml-2p mb-20">
          <MainTableSearch />
        </div>
        <Box sx={boxStyle}>
          <DataGrid
            rows={state.tableData}
            getRowId={(row) =>
              row.V_YOMAN_BIKUR_MIS_ZIHUY_0 + row.V_YOMAN_BIKUR_DIRA_0
            }
            onRowClick={(e) => handleClickOnApartment(e.row)}
            columns={tableProperties}
            pageSize={100}
            getCellClassName={(e) => {
              return e.row.GREEN === "1"
                ? "bg-green"
                : e.row.PINK === "1"
                ? "bg-red"
                : null;
            }}
            rowsPerPageOptions={[countOfPages]}
          />
        </Box>
      </div>
    </>
  );
}
