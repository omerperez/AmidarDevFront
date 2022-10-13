import React from "react";
import { useCanvas } from "./CanvasContext";
import { Button } from "@mui/material";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <Button fullWidth className="clear-canvsa-btn" onClick={clearCanvas}>
      נקה חתימה
    </Button>
  );
};
