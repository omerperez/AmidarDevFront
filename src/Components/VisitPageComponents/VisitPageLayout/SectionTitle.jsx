import React from "react";
import { Divider } from "@mui/material";

export default function SectionTitle({ title }) {
  return (
    <>
      <div className="d-flex jc-start">
        <span className="fs-24 fw-100 ml-10 mb-10">{title}</span>
      </div>
      <Divider className="ml-2p mb-20" />
    </>
  );
}
