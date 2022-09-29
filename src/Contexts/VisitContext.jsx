import React, { useReducer, createContext } from "react";

const initialState = {
  identifyingInformation: null,
  maintenanceVisit: null,
  occupancyVisit: null,
  abandonment: null,
  invasion: null,
  formsFiles: {
    liveAlone: null,
    mainTenants: null,
    partner: null,
    transitionalRent: null,
    publicHousting: null,
    prefabricatedStructure: null, 
  },
};

export const VisitContext = createContext(initialState);

const reducer = (visitState, action) => {
  switch (action.type) {
    case "setIdentifyingInformation":
      console.log(action.identifyingInformation);
      return (visitState.identifyingInformation =
        action.identifyingInformation);
    case "setMaintenanceVisit":
      console.log("action.maintenanceVisit");
      console.log(action.maintenanceVisit);
      return (visitState.maintenanceVisit = action.maintenanceVisit);
    case "setOccupancyVisit":
      return (visitState.occupancyVisit = action.occupancyVisit);
    case "setAbandonment":
      return (visitState.abandonment = action.abandonment);
    case "setInvasion":
      return (visitState.invasion = action.invasion);
    case "setLiveAlone":
      return (visitState.formsFiles.liveAlone = action.liveAlone);
    case "setMainTenants":
      return (visitState.formsFiles.mainTenants = action.mainTenants);
    case "setPartner":
      return (visitState.formsFiles.partner = action.partner);
    case "setTransitionalRent":
      return (visitState.formsFiles.transitionalRent = action.transitionalRent);
    case "setPublicHousting":
      return (visitState.formsFiles.publicHousting = action.publicHousting);
    case "setPrefabricatedStructure":
      return (visitState.formsFiles.prefabricatedStructure =
        action.prefabricatedStructure);
    default:
      return visitState;
  }
};

export default function VisitProvider({ children }) {
  const [visitState, dispatch] = useReducer(reducer, initialState);

  const visitContextFunction = {
    setIdentifyingInformations: setIdentifyingInformations,
    setMaintenanceVisits: setMaintenanceVisits,
    setOccupancyVisits: setOccupancyVisits,
    setAbandonments: setAbandonments,
    setInvasions: setInvasions,
    setLiveAlones: setLiveAlones,
    setMainTenantss: setMainTenantss,
    setPartners: setPartners,
    setTransitionalRents: setTransitionalRents,
    setPublicHoustings: setPublicHoustings,
    setPrefabricatedStructures: setPrefabricatedStructures,
  };

  function setIdentifyingInformations(identifyingInformations) {
    dispatch({ type: "setIdentifyingInformations", identifyingInformations: identifyingInformations });
  }
  function setMaintenanceVisits(maintenanceVisits) {
    dispatch({
      type: "setMaintenanceVisits",
      maintenanceVisits: maintenanceVisits,
    });
  }
  function setOccupancyVisits(occupancyVisits) {
    dispatch({
      type: "setOccupancyVisits",
      occupancyVisits: occupancyVisits,
    });
  }
  function setAbandonments(abandonments) {
    dispatch({
      type: "setAbandonments",
      abandonments: abandonments,
    });
  }
  function setInvasions(invasions) {
    dispatch({
      type: "setInvasions",
      invasions: invasions,
    });
  }
  function setLiveAlones(liveAlones) {
    dispatch({
      type: "setLiveAlones",
      liveAlones: liveAlones,
    });
  }
  function setMainTenantss(mainTenantss) {
    dispatch({
      type: "setMainTenantss",
      mainTenantss: mainTenantss,
    });
  }
  function setPartners(partners) {
    dispatch({
      type: "setPartners",
      partners: partners,
    });
  }
  function setTransitionalRents(transitionalRents) {
    dispatch({
      type: "setTransitionalRents",
      transitionalRents: transitionalRents,
    });
  }
  function setTransitionalRents(transitionalRents) {
    dispatch({
      type: "setTransitionalRents",
      transitionalRents: transitionalRents,
    });
  }
  function setPublicHoustings(publicHoustings) {
    dispatch({
      type: "setPublicHoustings",
      publicHoustings: publicHoustings,
    });
  }
  function setPrefabricatedStructures(prefabricatedStructures) {
    dispatch({
      type: "setPrefabricatedStructures",
      prefabricatedStructures: prefabricatedStructures,
    });
  }

  const value = {
    visitState,
    initialState,
    visitContextFunction,
  };

  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
}
