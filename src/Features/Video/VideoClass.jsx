import React, { useEffect, useRef, useState } from "react";
import * as markerjs2 from "markerjs2";
import { Button, Grid } from "@mui/material";
import { saveFile } from "../../Services/Files/FileService";

export default function VideoClass() {
  let videoRef = useRef();
  let photoRef = useRef();
  let imgRef = useRef();

  const [isTakeImage, setIsTakeImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);

  const showMarkerArea = () => {
    if (imgRef.current !== null) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });
      markerArea.show();
    }
  };
  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearImage = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
    setIsTakeImage(false);
  };

  const saveImage = () => {
    let width = 640;
    let height = 480;
    let photo = photoRef.current;
    let photo1 = imgRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(photo1, 0, 0, photo.width, photo.height);
    const url = ctx.canvas.toDataURL();
    const imagesObj = {
      png: url,
      base64: url.replace(/^data:image\/(png|jpg);base64,/, ""),
    };
    const tempImages =
      images && images.length > 0
        ? images.concat(imagesObj)
        : [].concat(imagesObj);
    setImages(tempImages);
    saveFile(
      "png",
      ctx.canvas.toDataURL(),
      `image-number-${images ? images.length : 0}`
    );
  };

  const takeImage = () => {
    let width = 640;
    let height = 480;
    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
    setIsTakeImage(true);
    setImageUrl(ctx.canvas.toDataURL());
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <>
      <Grid container spacing={0}>
        {images && images.length > 0 && (
          <Grid item xs={12}>
            <Grid container spacing={0}>
              {images.map((img, index) => (
                <Grid item xs={2}>
                  <img src={img.png} alt={`img-${index}`} width={200} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        <Grid item xs={12}>
          {isTakeImage && (
            <div className="d-flex jc-center">
              <img
                ref={imgRef}
                src={imageUrl}
                alt="sample"
                onClick={() => showMarkerArea()}
              />
            </div>
          )}
          <div className="d-flex jc-center">
            <video ref={videoRef} hidden={isTakeImage}></video>
          </div>
          <canvas ref={photoRef} hidden={true} />
        </Grid>
        <div className="m-auto d-flex jc-center mt-40">
          <Grid item xs={6}>
            {isTakeImage ? (
              <Button onClick={saveImage} className="take-image-btn">
                שמור תמונה
              </Button>
            ) : (
              <Button onClick={takeImage} className="take-image-btn">
                צלם
              </Button>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button onClick={clearImage} className="retake-image-btn">
              צלם מחדש
            </Button>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
