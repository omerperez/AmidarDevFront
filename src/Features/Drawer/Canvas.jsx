import React, { useEffect, forwardRef } from "react";
import { useCanvas } from "./CanvasContext";

function Canvas({ children, style, isRefOk }, ref) {
  const {
    canvasRef,
    prepareCanvas,
    prepareCanvasForVideo,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    if (style) {
      prepareCanvasForVideo();
    } else {
      prepareCanvas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={
        style ?? {
          width: 200,
          boxShadow:
            "0 1px 4px rgb(0 0 0 / 27%), 0 0 40px rgb(0 0 0 / 8%) inset",
        }
      }
    >
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={isRefOk ? ref : canvasRef}
      />
      {children ?? null}
    </div>
  );
}

const forwaredCanvas = forwardRef(Canvas);

export default forwaredCanvas;
