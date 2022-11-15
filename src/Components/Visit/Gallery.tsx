import { useState, useContext, useEffect } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { Grid, IconButton } from "@mui/material";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import Loading from "../../Layouts/Loading";
import { IPhoto } from "../../Interfaces/Visit";

export default function Gallery() {
  const { visitState, visitDispatch } = useContext(contexts.Visit);
  const [images, setImages] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const removeImage = (index: number) => {
    if (images.length > 0) {
      let tempImagesArray: IPhoto[] = [];
      for (let i = 0; i < images.length; i++) {
        if (i !== index) tempImagesArray.push(images[i]);
      }
      visitDispatch({ type: "setImages", images: tempImagesArray });
    }
  };

  useEffect(() => {
    setImages(visitState.images);
    setLoading(false);
  }, [visitState.images]);

  if (loading) {
    return <Loading />;
  }

  if (!images || images.length === 0) {
    return (
      <div className="d-flex jc-center">
        <h1 className="text-center">לא צולמו תמונות עד כה בביקור</h1>
      </div>
    );
  }

  return (
    <div className="padding-layout">
      <Grid container spacing={3}>
        {images.length > 0 &&
          images.map((img, index) => (
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
