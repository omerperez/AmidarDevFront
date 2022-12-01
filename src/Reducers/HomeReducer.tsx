import { IHome } from "../Data/Interfaces/Home";
import { HomeAction } from "../Data/Types/Home";

export default function homeReducer(homeState: IHome, action: HomeAction) {
  switch (action.type) {
    case "setAdvanceSearch":
      return (homeState = {
        ...homeState,
        isShowAdvanceSearch: !homeState.isShowAdvanceSearch,
      });

    case "getOriginalData":
      return (homeState = {
        ...homeState,
        originalData: action.originalData,
      });

    case "setCurrentData":
      return (homeState = {
        ...homeState,
        currentData: action.currentData,
      });

    case "setLoading":
      return (homeState = {
        ...homeState,
        isLoading: action.isLoading,
      });

    default:
      return homeState;
  }
}
