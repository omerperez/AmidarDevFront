import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function MoreActionsButton({
  title,
  isOpen,
  onClickFunction,
  className,
}) {
  return (
    <ListItem disablePadding onClick={onClickFunction} className={className}>
      <ListItemButton className="text-start">
        <ListItemText primary={title} />
        <ListItemIcon>{isOpen ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}
