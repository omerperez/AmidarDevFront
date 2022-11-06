import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function FormAlert({ title, text, severity }) {
  return (
    <Alert severity={severity} className="global-font ml-2p mb-10">
      <AlertTitle sx={{ marginRight: 1 }}>
        <b>{title}</b>
      </AlertTitle>
      <b>{text}</b>
    </Alert>
  );
}
