import { createContext, useReducer } from "react";
import { HomeProviderProps, IHome } from "../Data/Interfaces/Home";
import homeReducer from "../Reducers/HomeReducer";
import { IMainTenantTableDetails } from "../Data/Interfaces/Visit";
import { HomeContextType } from "../Data/Types/Home";

const initialState: IHome = {
  originalData: [],
  currentData: [],
  isLoading: true,
  isShowAdvanceSearch: false,
};

export const HomeContext = createContext<HomeContextType | null>(null);

export default function HomeProvider({ children }: HomeProviderProps) {
  const [homeState, dispatch] = useReducer(homeReducer, initialState);

  function setAdvanceSearch(isShowAdvanceSearch: boolean) {
    dispatch({
      type: "setAdvanceSearch",
      isShowAdvanceSearch: isShowAdvanceSearch,
    });
  }

  function getOriginalData(originalData: IMainTenantTableDetails[]) {
    dispatch({
      type: "getOriginalData",
      originalData: originalData,
    });
  }

  function updateData(currentData: IMainTenantTableDetails[]) {
    dispatch({
      type: "setCurrentData",
      currentData: currentData,
    });
  }

  function setLoading(isLoading: boolean) {
    dispatch({
      type: "setLoading",
      isLoading: isLoading,
    });
  }

  const value = {
    homeState: homeState,
    // homeDispatch: dispatch,
    setAdvanceSearch: setAdvanceSearch,
    getOriginalData: getOriginalData,
    updateData: updateData,
    setLoading: setLoading,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
