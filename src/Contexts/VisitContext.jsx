import React, { useReducer, createContext } from "react";

const initialState = {
  apartment: null,
};

export const VisitContext = createContext(initialState);

const reducer = (visitState, action) => {
  switch (action.type) {
    case "changeApartment":
      return (visitState.apartment = action.apartment);
    default:
      return visitState;
  }
};

export default function VisitProvider({ children }) {
  const [visitState, dispatch] = useReducer(reducer, initialState);

  function changeApartment(apartment) {
    dispatch({ type: "changeApartment", apartment: apartment });
  }

  const value = {
    visitState,
    initialState,
    changeApartment,
  };

  console.log(value);
  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
}
