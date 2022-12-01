import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./Layout.css";

interface loadingProp {
  loadingTitle?: string;
}

export default function Loading(
  { loadingTitle }: loadingProp = { loadingTitle: "טוען נתונים" }
) {
  return (
    <div className="loading-position">
      <Typography className="loading-text">{loadingTitle}</Typography>
      <div className="loading-style">
        <CircularProgress size={80} />
      </div>
    </div>
  );
}
