import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import { Grid, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { IPhoto } from "../../Data/Interfaces/Visit";
import { VisitContextType } from "../../Data/Types/Visit";
import Loading from "../../Layouts/Loading";

export default function Gallery() {
  const { visitState, setImages } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [currentImages, setCurrentImages] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const removeImage = (index: number) => {
    if (currentImages.length > 0) {
      let tempImagesArray: IPhoto[] = [];
      for (let i = 0; i < currentImages.length; i++) {
        if (i !== index) tempImagesArray.push(currentImages[i]);
      }
      setImages(tempImagesArray);
    }
  };

  useEffect(() => {
    setCurrentImages(visitState.images);
    setLoading(false);
  }, [visitState.images]);

  if (loading) {
    return <Loading />;
  }

  if (!currentImages || currentImages.length === 0) {
    return (
      <div className="d-flex jc-center">
        <h1 className="text-center">לא צולמו תמונות עד כה בביקור</h1>
      </div>
    );
  }

  return (
    <div className="padding-layout">
      <Grid container spacing={3}>
        {currentImages.length > 0 &&
          currentImages.map((img, index) => (
            <Grid item xs={3} key={`gallery-image-item-${index}`}>
              <div className="container-gallery">
                <img
                  src={img.png}
                  className="gallery-img"
                  alt={`img-${index}`}
                  width={200}
                />
                <IconButton
                  className="fa-download"
                  aria-label={`delete-image-${index}`}
                  size="small"
                  onClick={() => removeImage(index)}
                >
                  <ClearTwoToneIcon className="delete-img-icon" />
                </IconButton>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
