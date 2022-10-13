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
    case "setAbandonment":
      return (visitState = {
        ...visitState,
        abandonment: action.abandonment,
      });
    case "setInvasion":
      return (visitState = {
        ...visitState,
        invasion: action.invasion,
      });
    case "setFormsFiles":
      return (visitState = {
        ...visitState,
        formsFiles: action.formsFiles,
      });
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
    setFormsFiles: setFormsFiles,
    // setLiveAlones: setLiveAlones,
    // setMainTenantss: setMainTenantss,
    // setPartners: setPartners,
    // setTransitionalRents: setTransitionalRents,
    // setPublicHoustings: setPublicHoustings,
    // setPrefabricatedStructures: setPrefabricatedStructures,
  };

  function setIdentifyingInformations(identifyingInformations) {
    dispatch({
      type: "setIdentifyingInformations",
      identifyingInformations: identifyingInformations,
    });
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
  // function setLiveAlones(liveAlones) {
  //   dispatch({
  //     type: "setLiveAlones",
  //     liveAlones: liveAlones,
  //   });
  // }
  // function setMainTenantss(mainTenantss) {
  //   dispatch({
  //     type: "setMainTenantss",
  //     mainTenantss: mainTenantss,
  //   });
  // }
  // function setPartners(partners) {
  //   dispatch({
  //     type: "setPartners",
  //     partners: partners,
  //   });
  // }
  // function setTransitionalRents(transitionalRents) {
  //   dispatch({
  //     type: "setTransitionalRents",
  //     transitionalRents: transitionalRents,
  //   });
  // }

  // function setPublicHoustings(publicHoustings) {
  //   dispatch({
  //     type: "setPublicHoustings",
  //     publicHoustings: publicHoustings,
  //   });
  // }
  function setFormsFiles(formsFiles) {
    dispatch({
      type: "setFormsFiles",
      formsFiles: formsFiles,
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
