import React, { useEffect, useRef } from "react";

export default function VideoClass() {
  let videoRef = useRef();
  let photoRef = useRef();

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
  };

  const takeImage = () => {
    let width = 500;
    let height = width / (16 / 9);
    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };
  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div style={{ textAlign: "center", marginTop: 40, padding: 50 }}>
      <h1>Take a image</h1>
      <video ref={videoRef}></video>
      <button onClick={takeImage}>Take Selfie</button>
      <button onClick={clearImage}>Clear</button>
      <canvas ref={photoRef}></canvas>
      {/* <PrinterWrapper children={ <canvas ref={photoRef}></canvas> } />  */}
    </div>
  );
}
