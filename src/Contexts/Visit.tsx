import { createContext, useReducer } from "react";
import {
  FormStatus,
  MaintenanceVisit,
  PaymentAccount,
  Summary,
  TenantsOccupancyDetails,
  VisitGeneralDetails,
} from "../Data/Builders/Visit";
import { IVisitContext, VisitProviderProps } from "../Data/Interfaces/Visit";
import { VisitContextType } from "../Data/Types/Visit";
import visitReducer from "../Reducers/VisitReducer";

const initialState: IVisitContext = {
  identifyingInformation: new VisitGeneralDetails(null),
  paymentDetails: new PaymentAccount(null),
  maintenanceVisit: new MaintenanceVisit(null),
  occupancyVisit: new TenantsOccupancyDetails(null),
  formsFiles: new FormStatus(null),
  summary: new Summary(null),
  images: [],
  activeStep: 0,
  tableCode: new Map(),
};

export const VisitContext = createContext<VisitContextType | null>(null);

export default function VisitProvider({ children }: VisitProviderProps) {
  const [visitState, dispatch] = useReducer(visitReducer, initialState);

  function initVisit(visit: IVisitContext) {
    dispatch({ type: "initializationVisit", visitState: visit });
  }
  function setIdentifyingInfo(generalDetails: VisitGeneralDetails) {
    dispatch({
      type: "setIdentifyingInformation",
      identifyingInformation: generalDetails,
    });
  }
  function setPayment(account: PaymentAccount) {
    dispatch({ type: "setPaymentDetails", paymentDetails: account });
  }
  function setMaintenance(maintenance: MaintenanceVisit) {
    dispatch({ type: "setMaintenanceVisit", maintenanceVisit: maintenance });
  }
  function setOccupancy(occupancyDetails: TenantsOccupancyDetails) {
    dispatch({ type: "setOccupancyVisit", occupancyVisit: occupancyDetails });
  }
  function setForms(key: any, value: boolean) {
    dispatch({ type: "setFormsFiles", formKey: key, value: value });
  }
  function setImages(images: any[]) {
    dispatch({ type: "setImages", images: images });
  }
  function setStep(step: number) {
    dispatch({ type: "setActiveStep", step: step });
  }
  function setTableCode(codes: Map<any, any>) {
    dispatch({ type: "setTableCode", tableCode: codes });
  }

  const value = {
    visitState: visitState,
    // visitDispatch: dispatch,
    initVisit: initVisit,
    setIdentifyingInfo: setIdentifyingInfo,
    setPayment: setPayment,
    setMaintenance: setMaintenance,
    setOccupancy: setOccupancy,
    setForms: setForms,
    setImages: setImages,
    setStep: setStep,
    setTableCode: setTableCode,
  };

  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
}
