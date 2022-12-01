import { Collections } from "@mui/icons-material";
import { Button, Fab, Grid } from "@mui/material";
import * as markerjs2 from "markerjs2";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import GenericDialog from "../Components/Global/GenericDialog";
import Gallery from "../Components/Visit/Gallery";
import { contexts } from "../Contexts/ContextsExports";
import { VisitContextType } from "../Data/Types/Visit";
import { FileSaver } from "../Utils/SaveFile";

interface CameraProp {
  closeCameraState: Dispatch<SetStateAction<Boolean>>;
}

export default function Camera({ closeCameraState }: CameraProp) {
  let videoRef = useRef<HTMLVideoElement | null>(null);
  let photoRef = useRef<HTMLCanvasElement | null>(null);
  let imgRef = useRef<HTMLImageElement | null>(null);

  const [isTakeImage, setIsTakeImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { visitState, setImages } = useContext(
    contexts.Visit
  ) as VisitContextType;

  const showMarkerArea = () => {
    if (imgRef.current) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });
      markerArea.show();
    }
  };

  const clearImage = () => {
    if (photoRef.current) {
      let photo = photoRef.current;
      let ctx = photo.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, photo.width, photo.height);
        setIsTakeImage(false);
      }
    }
  };

  const saveImage = () => {
    let width = 640;
    let height = 480;
    let photo = photoRef.current;
    let photo1 = imgRef.current;
    if (photo && photo1) {
      photo.width = width;
      photo.height = height;
      let ctx = photo.getContext("2d");
      if (ctx) {
        ctx.drawImage(photo1, 0, 0, photo.width, photo.height);
        const url = ctx.canvas.toDataURL();
        if (url) {
          const imagesObj = {
            png: url,
            base64: url?.replace(/^data:image\/(png|jpg);base64,/, ""),
          };
          if (visitState.images && imagesObj) {
            const tempImages = visitState.images?.concat(imagesObj);
            setImages(tempImages);
            FileSaver(
              "png",
              ctx.canvas.toDataURL(),
              `image-number-${visitState.images ? visitState.images.length : 0}`
            );
          }
        }
      }
    }
  };

  const takeImage = () => {
    let width = 640;
    let height = 480;
    if (photoRef.current && videoRef.current) {
      let photo = photoRef.current;
      let video = videoRef.current;
      photo.width = width;
      photo.height = height;
      let ctx = photo.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, photo.width, photo.height);
        setIsTakeImage(true);
        setImageUrl(ctx.canvas.toDataURL());
      }
    }
  };

  useEffect(() => {
    const getUserCamera = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          if (videoRef.current) {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUserCamera();
  }, [videoRef]);

  return (
    <>
      <Grid container spacing={0} className="mt-40">
        <Grid item xs={12}>
          {isTakeImage && (
            <div className="d-flex jc-center">
              <img
                className="camera-size"
                ref={imgRef}
                src={imageUrl}
                alt="sample"
                onClick={() => showMarkerArea()}
              />
            </div>
          )}
          <div className="d-flex jc-center">
            <video
              className="camera-size"
              ref={videoRef}
              hidden={isTakeImage}
            ></video>
          </div>
          <canvas ref={photoRef} hidden={true} />
        </Grid>
        <div className="m-auto">
          <Grid container className="camera-size mt-2">
            <Grid item sm={6} className="d-flex jc-center">
              {isTakeImage ? (
                <Button
                  fullWidth
                  onClick={clearImage}
                  className="take-image-btn"
                >
                  צלם מחדש
                </Button>
              ) : (
                <Button
                  fullWidth
                  onClick={takeImage}
                  className="take-image-btn"
                >
                  צלם
                </Button>
              )}
            </Grid>

            <Grid item sm={6} className="d-flex jc-center">
              {isTakeImage ? (
                <Button
                  fullWidth
                  onClick={saveImage}
                  className="save-image-btn"
                >
                  שמור תמונה
                </Button>
              ) : (
                <Button
                  fullWidth
                  onClick={() => closeCameraState(false)}
                  className="retake-image-btn"
                >
                  סגור מצלמה
                </Button>
              )}
            </Grid>
          </Grid>
        </div>
      </Grid>
      <div className="floating-gallery-btn-camera">
        <GenericDialog
          children={
            <Fab
              color="primary"
              aria-label="gallery"
              className="fab-btn-camera"
            >
              <Collections className="gallery-icon-btn" />
            </Fab>
          }
          title="גלריה"
          content={<Gallery />}
        />
      </div>
    </>
  );
}
