import React, { useContext } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { VisitContext } from "../../../Contexts/VisitContext";

export default function SidebarListOptions({
  activeSection,
  changeActiveSection,
  addDefaultValueToChangeSection,
  itemsList,
  isHide,
  activeClassName,
  notActiveClassName,
}) {
  const { visitState } = useContext(VisitContext);

  if (itemsList.length === 0 || isHide) {
    return;
  }

  return (
    <>
      {itemsList &&
        itemsList.map((action, index) => {
          return (
            <ListItem
              key={`sideBar-actionsOptions-${action.title}+${index}`}
              className={
                visitState.formsFiles[action.statusName] !== null &&
                visitState.formsFiles[action.statusName] === true
                  ? "bg-section-red"
                  : activeSection === index + addDefaultValueToChangeSection
                  ? activeClassName
                  : notActiveClassName
              }
              disablePadding
              onClick={() =>
                changeActiveSection(addDefaultValueToChangeSection + index)
              }
            >
              <ListItemButton
                className="text-start"
                key={`sideBar-ListItemButton-actionsOptions-${action.title}+${index}`}
              >
                <ListItemText
                  key={`sideBar-ListItemText-actionsOptions-${action.title}+${index}`}
                  primary={action.title}
                />
                <ListItemIcon
                  key={`sideBar-ListItemIcon-actionsOptions-${action.title}+${index}`}
                >
                  {action.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
    </>
  );
}
