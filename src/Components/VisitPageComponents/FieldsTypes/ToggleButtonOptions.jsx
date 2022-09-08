import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const toggleWidth = { width: 80 };
export default function ToggleButtonOptions({
  valueOfItemStatus,
  handleChangeValue,
}) {
  return (
    <div className="d-flex jc-center mt-10 mr-30">
      <ToggleButtonGroup
        color="primary"
        value={valueOfItemStatus}
        exclusive
        onChange={handleChangeValue}
      >
        <ToggleButton
          sx={toggleWidth}
          className={valueOfItemStatus === "there is" ? "toggle-green" : null}
          value="there is"
        >
          יש
        </ToggleButton>
        <ToggleButton
          sx={toggleWidth}
          className={valueOfItemStatus === "nothing" ? "toggle-red" : null}
          value="nothing"
        >
          אין
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
