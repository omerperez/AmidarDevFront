import React, {useState} from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { actionsMenuBtns, bottomNavigationStyle } from "../VisitAssets";
export default function Menu() {
  const [value, setValue] = useState(0);

  
  return (
    <div>
      <Box>
        <BottomNavigation
          showLabels
          sx={bottomNavigationStyle}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
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
