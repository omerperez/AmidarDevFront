import { IMainTenantTableDetails } from "./Visit";

interface IRepresentativeApartment {
  blockId: string;
  buildingNumber: string;
  entrance: string;
  flatId: string;
  personId: string;
}

interface IHome {
  originalData: IMainTenantTableDetails[] | [];
  currentData: IMainTenantTableDetails[] | [];
  isLoading: boolean;
  isShowAdvanceSearch: boolean;
}

interface HomeProviderProps {
  children: JSX.Element;
}

export type { IRepresentativeApartment, IHome, HomeProviderProps };
