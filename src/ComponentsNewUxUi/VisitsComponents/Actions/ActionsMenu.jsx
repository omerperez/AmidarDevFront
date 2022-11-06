import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { actionsMenuBtns, bottomNavigationStyle } from "../VisitAssets";
export default function Menu({ activeLabel, changeActiveLabel }) {
  return (
    <div>
      <Box>
        <BottomNavigation
          showLabels
          sx={bottomNavigationStyle}
          value={activeLabel}
          onChange={(event, newValue) => {
            changeActiveLabel(newValue);
          }}
        >
          {actionsMenuBtns.map((btn, index) => (
            <BottomNavigationAction
              key={`actions-menu-btn${index}`}
              label={btn.label}
              icon={btn.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
    </div>
  );
}
