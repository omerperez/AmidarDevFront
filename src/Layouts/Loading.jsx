import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import "./Layout.css";

export default function Loading({ loadingTitle }) {
  return (
    <div className="loading-position">
      <Typography className="loading-text">
        {loadingTitle ?? "טוען נתונים..."}
      </Typography>
      <div className="loading-style">
        <CircularProgress size={80} />
      </div>
    </div>
  );
}
