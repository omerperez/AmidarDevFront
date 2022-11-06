import React, { useState, useRef, createRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";
import { VisitsPagePanels } from "./VisitAssets";
import "./VisitsStyle.css";

export default function Panels({ currentApartment }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const elementsRef = useRef(VisitsPagePanels.map(() => createRef()));

  const PanelsStyle = {
    "& .MuiCollapse-vertical": { marginBottom: "30px" },
  };

  return (
    <div className="sections-main">
      {VisitsPagePanels.map((panel, index) => {
        return (
          <Accordion
            ref={elementsRef.current[index]}
            sx={PanelsStyle}
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
              <div className="d-flex">
                <div className="panel-icon">
                  {panel.icon(expanded === `panel${index}`)}
                </div>
                <span className="panel-title">
                  {panel.title}
                  <span className="panel-subtitle">{panel.subTitle ?? ""}</span>
                </span>
              </div>
              <div className="left-side-pannel">{panel.leftText ?? ""}</div>
            </AccordionSummary>
            <AccordionDetails sx={PanelsStyle}>
              {panel.title === "פרטי זיהוי"
                ? panel.page(currentApartment)
                : panel.page}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
