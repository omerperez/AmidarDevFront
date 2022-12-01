import { IVisitContext } from "../Data/Interfaces/Visit";
import { VisitAction } from "../Data/Types/Visit";

export default function visitReducer(
  visitState: IVisitContext,
  action: VisitAction,
) {
  switch (action.type) {
    case "initializationVisit":
      return (visitState = action.visitState);
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
    case "setActiveStep":
      return (visitState = {
        ...visitState,
        activeStep: action.step,
      });
    case "setTableCode":
      return (visitState = {
        ...visitState,
        tableCode: action.tableCode,
      });
    default:
      return visitState;
  }
}
