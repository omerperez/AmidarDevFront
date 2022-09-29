import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { actionsOptions, diaryVisitMenu } from "../VisitPageAssets";

const ITEM_HEIGHT = 50;

export default function OptionMobileMenu({ onSelectFunction }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (sectionIndex) => {
    onSelectFunction(sectionIndex);
    setAnchorEl(null);
  };

  const optionsMenu = diaryVisitMenu.concat(actionsOptions);

  if (!optionsMenu || optionsMenu.length < 1) return null;

  return (
    <div>
      <Button
        variant="contained"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "demo-customized-menu'" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="global-font"
      >
        אפשרויות נוספות
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "16ch",
          },
        }}
      >
        {optionsMenu.map((option, index) => (
          <MenuItem
            key={`${option.title}-index${index}`}
            selected={option.title === "Pyxis"}
            onClick={(e) => {
              handleSelectItem(index);
            }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
