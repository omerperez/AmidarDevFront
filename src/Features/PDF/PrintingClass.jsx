/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import ReactToPrint from "react-to-print";
import "./PrintingClass.scss";

function PrintingClass() {
  useEffect(() => {}, []);

  let componentRef = useRef(null);

  return (
    <div>
      <Container>
        <ReactToPrint
          trigger={() => (
            <div className="printing-component-container">
              <div className="printint-component-header">
                Printing Component
              </div>
              <div className="printing-component-sub-header">Generator</div>
              <a className="printing-component-a">
                <button
                  style={{ background: "red", color: "white", marginTop: 40 }}
                >
                  Print Now
                </button>
              </a>
            </div>
          )}
          content={() => componentRef}
        />
        <Paper ref={(el) => componentRef} />
      </Container>
    </div>
  );
}

export default PrintingClass;
