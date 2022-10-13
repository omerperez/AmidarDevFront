import { Grid } from '@mui/material';
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { ExpandMore, Height } from "@mui/icons-material";
import { VisitsPagePanels } from "./VisitAssets";
import "./VisitsStyle.css";

export default function Panels() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const d = {
    // "& .MuiCollapse-root": { height: 500 },
    "& .MuiCollapse-vertical": { marginBottom: "30px" },
  };
  return (
    <div className="sections-main">
      {VisitsPagePanels.map((panel, index) => {
        return (
          <Accordion
          sx={d}
            className="mb-20"
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              className={expanded === `panel${index}` && "active-panel-bg"}
              expandIcon={<ExpandMore sx={{ fontSize: 60 }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              key={`panel${index}bh-key`}
            >
              {/* <Typography sx={{ width: "20%", flexShrink: 0 }}> */}
              <div className="d-flex">
                <div className="panel-icon">{panel.icon}</div>
                <span className="panel-title">
                  {panel.title}
                  <span className="panel-subtitle">{panel.subTitle ?? ""}</span>
                </span>
              </div>
              <div className="left-side-pannel">{panel.leftText ?? ""}</div>
              {/* </Typography> */}
            </AccordionSummary>
            <AccordionDetails sx={d}>{panel.page}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}