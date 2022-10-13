import React, { useEffect, useState, useContext } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import usePath from "../../Hooks/usePath";
import { amidarLogo } from "../../Assets/projectImages";
import { useNavigate } from "react-router-dom";
import { useResponsiveLayout } from "../useResponsiveLayout";
import "../Layout.css";
import {
  AppBar,
  Main,
  DrawerHeader,
  displayFlex,
  titleStyle,
  navigationProperties,
} from "./NavigationStyle";
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import { applicationCookie } from "../../Services/CookieService/CookieService";
import { AuthContext } from "../../Contexts/AuthContext";

export default function AppMenu() {
  const navigate = useNavigate();

  const [navigationButtons, setNavigationButtons] = useState([]);
  const { handleClickAdvanceSearch } = useContext(HomeContext);
  const locationPath = usePath();
  const { logout } = useContext(AuthContext);

  const handleClickHomePage = () => {
    return navigate(`/homepage`);
  };

  const handleClickLogout = () => {
    applicationCookie.removeProperties("userId");
    logout();
    return navigate(`/login`);
  };

  useEffect(() => {
    if (locationPath.indexOf("homepage") === -1) {
      setNavigationButtons(
        navigationProperties.filter((prop) => {
          return prop.title !== "חיפוש מתקדם";
        })
      );
    } else {
      setNavigationButtons(
        navigationProperties.filter((prop) => {
          return prop.title !== "יומן ביקורים";
        })
      );
    }
  }, [locationPath]);

  return (
    <Box sx={displayFlex}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="nav-bg bg-app-bar h-75">
          <div className="d-flex jc-center p-18">
            <img src={amidarLogo} width={100} alt="logo" />
          </div>
          {useResponsiveLayout(600) && (
            <Typography variant="h4" sx={titleStyle} noWrap component="div">
              ביקורי מעגל
              <span className="version-title">גרסא 1.6</span>
            </Typography>
          )}
          <div style={{ marginRight: "auto" }}>
            <Grid container justifyContent="center">
              {navigationButtons.map((menuProp, key) => {
                return (
                  <Grid item key={`AppMenu-Grid-${key}`}>
                    <Tooltip
                      title={menuProp.title}
                      key={`AppMenu-Tooltip-${menuProp.title}`}
                    >
                      <IconButton
                        key={`AppMenu-IconButton-${menuProp.title}`}
                        onClick={
                          menuProp.title === "חיפוש מתקדם"
                            ? handleClickAdvanceSearch
                            : menuProp.title === "יומן ביקורים"
                            ? handleClickHomePage
                            : handleClickLogout
                        }
                      >
                        {menuProp.icon}
                      </IconButton>
                    </Tooltip>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Main>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
