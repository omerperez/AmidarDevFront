import React from "react";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import {
  Toolbar,
  Drawer,
  Box,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import {
  sidebarDrawerStyle,
  diaryVisitMenu,
  actionsOptions,
} from "../VisitPageAssets";
import { htmlForms } from "../../../Features/HtmlForms/ExportHtmlForms";
import PrinterWrapper from "../../../Features/PDF/PrinterWrapper";
import { useResponsiveLayout } from "../../../Layouts/useResponsiveLayout";
import OptionMobileMenu from "./OptionMobileMenu";

export default function Sidebar({ children }) {
  const [activeSection, setActiveSection] = useLocalStorage(0);
  const countOfSectionsUntilActions = 4;
  const totalCountOfSections = 8;

  const onSelectFunction = (sectionIndex) =>{
    setActiveSection(sectionIndex);
  }

  return (
    <>
      <Box className="d-flex jc-center">
        {useResponsiveLayout(600) ? (
          <Drawer anchor="right" variant="permanent" sx={sidebarDrawerStyle}>
            <Toolbar />
            <Box className="auto-overflow mt-20">
              <List className="d-rtl">
                {diaryVisitMenu.map((item, index) => (
                  <ListItem
                    key={`sideBar-ListItem-${item.title}+${index}`}
                    disablePadding
                    onClick={() => setActiveSection(index)}
                    className={
                      activeSection === index
                        ? "blue-bg menu-active-broder"
                        : ""
                    }
                  >
                    <ListItemButton
                      key={`sideBar-ListItemButton-${item.title}+${index}`}
                      className="text-start m-2"
                    >
                      <ListItemText
                        key={`sideBar-ListItemText-${item.title}+${index}`}
                        primary={item.title}
                      />
                      <ListItemIcon
                        key={`sideBar-ListItemIcon-${item.title}+${index}`}
                        className={activeSection === index ? "color-white" : ""}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                ))}

                {activeSection >= 3 &&
                  actionsOptions.map((action, index) => (
                    <ListItem
                      key={`sideBar-actionsOptions-${action.title}+${index}`}
                      className={
                        activeSection === index + countOfSectionsUntilActions
                          ? "blue-bg menu-active-broder"
                          : "actions-bg pr-5"
                      }
                      disablePadding
                      onClick={() =>
                        setActiveSection(countOfSectionsUntilActions + index)
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
                  ))}
              </List>
            </Box>
          </Drawer>
        ) : (
          <div className="mb-20">
            <OptionMobileMenu onSelectFunction={onSelectFunction} />
          </div>
        )}

        <Box component="main" sx={{ flexGrow: 1, padding: 0 }}>
          {activeSection < totalCountOfSections ? (
            children[activeSection]
          ) : (
            <PrinterWrapper
              children={htmlForms[activeSection - totalCountOfSections]}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
