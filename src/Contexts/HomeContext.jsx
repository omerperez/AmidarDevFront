import React, { useReducer, createContext } from "react";

const initialState = {
  employeeOriginalTableData: [],
  tableData: [],
  loading: true,
  showAdvanceSearch: false,
};

export const HomeContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "changeAdvanceSearchValue":
      return (state = {
        ...state,
        showAdvanceSearch: !state.showAdvanceSearch,
      });

    case "getEmployeeOriginalTableData":
      return (state = {
        ...state,
        employeeOriginalTableData: action.employeeOriginalTableData,
      });

    case "changeTableData":
      return (state = {
        ...state,
        tableData: action.tableData,
      });

    case "changeLoadingStatus":
      return (state = {
        ...state,
        loading: action.loadingStatus,
      });

    default:
      return state;
  }
};

export default function HomeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeTableData(tableData) {
    dispatch({ type: "changeTableData", tableData: tableData });
  }

  function getEmployeeOriginalTableData(employeeOriginalTableData) {
    dispatch({
      type: "getEmployeeOriginalTableData",
      employeeOriginalTableData: employeeOriginalTableData,
    });
  }

  function handleClickAdvanceSearch() {
    dispatch({ type: "changeAdvanceSearchValue" });
  }

  function changeLoadingStatus(loadingStatus) {
    dispatch({ type: "changeLoadingStatus", loadingStatus: loadingStatus });
  }

  const value = {
    state,
    initialState,
    changeTableData,
    handleClickAdvanceSearch,
    getEmployeeOriginalTableData,
    changeLoadingStatus,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
