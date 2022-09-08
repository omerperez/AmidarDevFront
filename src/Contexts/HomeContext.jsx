import React, {useReducer, createContext} from "react";

const initialState = {
    employeeOriginalTableData: [],
    tableData: [],
    loading: false,
    showAdvanceSearch: false
}

export const HomeContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
      case "changeAdvanceSearchValue":
        return state = {
            ...state,
            showAdvanceSearch: !state.showAdvanceSearch
         }

    case "getEmployeeOriginalTableData":
        return state = {
            ...state,
            employeeOriginalTableData: action.employeeOriginalTableData
        }
        
    case "changeTableData":
        return state = {
            ...state,
            tableData: action.tableData
        }

    default:
        return state;
    }
  };
  
export default function HomeProvider( { children } ){
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    function changeTableData(tableData){
        dispatch({ type: "changeTableData", tableData: tableData })
    }

    function getEmployeeOriginalTableData(employeeOriginalTableData){
        dispatch({ type: "getEmployeeOriginalTableData", employeeOriginalTableData: employeeOriginalTableData })
    }

    function handleClickAdvanceSearch(){
        dispatch({ type: "changeAdvanceSearchValue" })
    }
    
    const value = {
        state,
        initialState,
        changeTableData,
        handleClickAdvanceSearch,
        getEmployeeOriginalTableData
    }; 

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}