import React, { useReducer, createContext } from "react";

const initialState = {
  images: [],
};

export const ImageContext = createContext(initialState);

const reducer = (imagesState, action) => {
  switch (action.type) {
    case "addNewImage":
      return (imagesState.images = [...initialState.images, action.newImage]);
    default:
      return imagesState;
  }
};

export default function ImageProvider({ children }) {
  const [imageState, dispatch] = useReducer(reducer, initialState);

  function addNewImage(newImage) {
    dispatch({ type: "addNewImage", newImage: newImage });
  }

  const value = {
    imageState,
    initialState,
    addNewImage,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
