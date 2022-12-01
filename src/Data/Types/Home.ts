import { IHome } from "../Interfaces/Home";
import { IMainTenantTableDetails } from "../Interfaces/Visit";

type HomeAction =
  | { type: "setAdvanceSearch"; isShowAdvanceSearch: boolean }
  | {
      type: "getOriginalData";
      originalData: IMainTenantTableDetails[];
    }
  | { type: "setCurrentData"; currentData: IMainTenantTableDetails[] }
  | { type: "setLoading"; isLoading: boolean };

type HomeContextType = {
  homeState: IHome;
  setAdvanceSearch: (isShowAdvanceSearch: boolean) => void;
  getOriginalData: (originalData: IMainTenantTableDetails[]) => void;
  updateData: (data: IMainTenantTableDetails[]) => void;
  setLoading: (isLoading: boolean) => void;
};

export type { HomeAction, HomeContextType };
