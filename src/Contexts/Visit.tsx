import { useReducer, createContext, Dispatch } from "react";
import { MaintenanceFormValues } from "../Builders/Visit";
import { IPhoto } from "../Interfaces/Visit";
import {
  VisitGeneralDetails,
  PaymentAccount,
  MaintenanceVisit,
  TenantsOccupancyDetails,
} from "../Types/Visit";

interface IVisit {
  identifyingInformation: VisitGeneralDetails;
  paymentDetails: PaymentAccount;
  maintenanceVisit: MaintenanceVisit;
  occupancyVisit: TenantsOccupancyDetails;
  // abandonment: PaymentAccount;
  // invasion: any;
  formsFiles: {
    liveAlone: Boolean;
    mainTenants: Boolean;
    partner: Boolean;
    transitionalRent: Boolean;
    publicHousting: Boolean;
    prefabricatedStructure: Boolean;
  };
  images: IPhoto[];
}

const initialState: IVisit = {
  identifyingInformation: new VisitGeneralDetails(null),
  paymentDetails: new PaymentAccount(null),
  maintenanceVisit: new MaintenanceVisit(null),
  occupancyVisit: new TenantsOccupancyDetails(null),
  formsFiles: {
    liveAlone: false,
    mainTenants: false,
    partner: false,
    transitionalRent: false,
    publicHousting: false,
    prefabricatedStructure: false,
  },
  images: [],
};

type VisitAction =
  | {
      type: "setIdentifyingInformation";
      identifyingInformation: VisitGeneralDetails;
    }
  | {
      type: "setPaymentDetails";
      paymentDetails: PaymentAccount;
    }
  | { type: "setMaintenanceVisit"; maintenanceVisit: MaintenanceVisit }
  | { type: "setOccupancyVisit"; occupancyVisit: TenantsOccupancyDetails }
  // | { type: "setAbandonment"; abandonment: any }
  // | { type: "setInvasion"; invasion: any }
  | { type: "setFormsFiles"; formKey: any; value: Boolean }
  | { type: "setImages"; images: any[] };

const visitReducer = (visitState: IVisit, action: VisitAction) => {
  switch (action.type) {
    case "setIdentifyingInformation":
      return (visitState = {
        ...visitState,
        identifyingInformation: action.identifyingInformation,
      });
    case "setMaintenanceVisit":
      return (visitState = {
        ...visitState,
        maintenanceVisit: action.maintenanceVisit,
      });
    case "setOccupancyVisit":
      return (visitState = {
        ...visitState,
        occupancyVisit: action.occupancyVisit,
      });
    case "setFormsFiles":
      return (visitState = {
        ...visitState,
        formsFiles: {
          ...visitState.formsFiles,
          [action.formKey]: action.value,
        },
      });
    case "setImages":
      return (visitState = {
        ...visitState,
        images: action.images,
      });
    default:
      return visitState;
  }
};

export const VisitContext = createContext<{
  visitState: IVisit;
  visitDispatch: Dispatch<VisitAction>;
}>({ visitState: initialState, visitDispatch: () => null });

export default function VisitProvider({ children }: any) {
  const [visitState, dispatch] = useReducer(visitReducer, initialState);

  const value = {
    visitState: visitState,
    visitDispatch: dispatch,
  };

  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
}
