import { useReducer, createContext, Dispatch } from "react";
import { IMainTenantTableDetails } from "../Interfaces/Visit";

interface IHome {
  employeeOriginalTableData: IMainTenantTableDetails[] | [];
  tableData: IMainTenantTableDetails[] | [];
  loading: Boolean;
  showAdvanceSearch: Boolean;
}

const initialState: IHome = {
  employeeOriginalTableData: [],
  tableData: [],
  loading: true,
  showAdvanceSearch: false,
};

type HomeAction =
  | { type: "changeAdvanceSearchValue"; showAdvanceSearch: Boolean }
  | {
      type: "getEmployeeOriginalTableData";
      employeeOriginalTableData: IMainTenantTableDetails[];
    }
  | { type: "changeTableData"; tableData: IMainTenantTableDetails[] }
  | { type: "changeLoadingStatus"; loadingStatus: Boolean };

const homeReducer = (homeState: IHome, action: HomeAction) => {
  switch (action.type) {
    case "changeAdvanceSearchValue":
      return (homeState = {
        ...homeState,
        showAdvanceSearch: !homeState.showAdvanceSearch,
      });

    case "getEmployeeOriginalTableData":
      return (homeState = {
        ...homeState,
        employeeOriginalTableData: action.employeeOriginalTableData,
      });

    case "changeTableData":
      return (homeState = {
        ...homeState,
        tableData: action.tableData,
      });

    case "changeLoadingStatus":
      return (homeState = {
        ...homeState,
        loading: action.loadingStatus,
      });

    default:
      return homeState;
  }
};

export const HomeContext = createContext<{
  homeState: IHome;
  homeDispatch: Dispatch<HomeAction>;
}>({ homeState: initialState, homeDispatch: () => null });

interface HomeProviderProps {
  children: JSX.Element;
}
export default function HomeProvider({ children }: HomeProviderProps) {
  const [homeState, dispatch] = useReducer(homeReducer, initialState);

  const value = {
    homeState: homeState,
    homeDispatch: dispatch,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
