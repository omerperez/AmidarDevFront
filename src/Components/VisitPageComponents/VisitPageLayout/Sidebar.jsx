import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../../Hooks/CustomizedHooks";
import { useResponsiveLayout } from "../../../Layouts/useResponsiveLayout";
import PrinterWrapper from "../../../Features/PDF/PrinterWrapper";
import OptionMobileMenu from "./OptionMobileMenu";
import { htmlForms } from "../../../Features/HtmlForms/ExportHtmlForms";
import VideoClass from "../../../Features/Video/VideoClass";
import {
  sidebarDrawerStyle,
  diaryVisitMenu,
  actionsOptions,
  formsOptions,
} from "../VisitPageAssets";
import { Toolbar, Drawer, Box, List } from "@mui/material";
import MoreActionsButton from "./MoreActionsButton";
import SidebarListOptions from "./SidebarListOptions";

export default function Sidebar({ children }) {
  const [activeSection, setActiveSection] = useLocalStorage(0);
  const generalOptionsMenu = 3;
  const countOfActionsOptions = 4;
  const totalCountOfActions = generalOptionsMenu + countOfActionsOptions;

  const [isOpenActions, setIsOpenActions] = useState(false);
  const [isOpenForms, setIsOpenForms] = useState(false);

  const handleClickOnActionsMoreOptions = () => {
    setIsOpenActions(!isOpenActions);
  };

  const handleClickOnFormsMoreOptions = () => {
    setIsOpenForms(!isOpenForms);
  };

  const onSelectFunction = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  const handleChangeSection = (value) => {
    setActiveSection(value);
  };

  return (
    <>
      <Box className="d-flex jc-center">
        {useResponsiveLayout(600) ? (
          <Drawer anchor="right" variant="permanent" sx={sidebarDrawerStyle}>
            <Toolbar />
            <Box className="auto-overflow mt-20">
              <List className="d-rtl">
                <SidebarListOptions
                  activeSection={activeSection}
                  changeActiveSection={handleChangeSection}
                  addDefaultValueToChangeSection={0}
                  itemsList={diaryVisitMenu}
                  isHide={false}
                  activeClassName={"blue-bg menu-active-broder"}
                  notActiveClassName={null}
                />

                <MoreActionsButton
                  title={"פעלות נוספות"}
                  isOpen={isOpenActions}
                  onClickFunction={handleClickOnActionsMoreOptions}
                  className={
                    isOpenForms && isOpenActions
                      ? "black-border-top"
                      : "black-border-top-bottom"
                  }
                />

                <SidebarListOptions
                  activeSection={activeSection}
                  changeActiveSection={handleChangeSection}
                  addDefaultValueToChangeSection={generalOptionsMenu}
                  itemsList={actionsOptions}
                  isHide={isOpenActions}
                  activeClassName={"blue-bg menu-active-broder"}
                  notActiveClassName={"actions-bg pr-5"}
                />

                <MoreActionsButton
                  title={"הצג טפסים"}
                  isOpen={isOpenForms}
                  onClickFunction={handleClickOnFormsMoreOptions}
                  className={"black-border-top-bottom"}
                />

                <SidebarListOptions
                  activeSection={activeSection}
                  changeActiveSection={handleChangeSection}
                  addDefaultValueToChangeSection={totalCountOfActions}
                  itemsList={formsOptions}
                  isHide={isOpenForms}
                  activeClassName={"blue-bg menu-active-broder"}
                  notActiveClassName={"actions-bg pr-5"}
                />
              </List>
            </Box>
          </Drawer>
        ) : (
          <div className="mb-20">
            <OptionMobileMenu onSelectFunction={onSelectFunction} />
          </div>
        )}
        {activeSection === 14 ? (
          <VideoClass />
        ) : (
          <Box component="main" sx={{ flexGrow: 1, padding: 0 }}>
            {activeSection < totalCountOfActions ? (
              children[activeSection]
            ) : (
              <PrinterWrapper
                children={htmlForms[activeSection - totalCountOfActions]}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
