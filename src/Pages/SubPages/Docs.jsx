import React, { useState, useContext } from "react";
import TopBar from "../../ComponentsNewUxUi/VisitsComponents/Docs/TopBar";
import { htmlForms } from "../../Features/HtmlForms/ExportHtmlForms";
import PrinterWrapper from "../../Features/PDF/PrinterWrapper";

export default function Docs() {
  const [activeLabel, setActiveLabel] = useState(0);

  const onChangeActiveLabel = (labelIndex) => {
    setActiveLabel(labelIndex);
  };

  return (
    <>
      <TopBar
        activeLabel={activeLabel}
        changeActiveLabel={onChangeActiveLabel}
      />
      <div className="docs-layout">
        <PrinterWrapper children={htmlForms[activeLabel]} />
      </div>
    </>
  );
}
