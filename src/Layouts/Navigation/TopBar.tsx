import { useEffect, useState, useContext } from "react";
import "../Layout.css";
import {
  AppBar,
  titleStyle,
  navigationProperties,
  NavigationProps,
} from "./Style";
import {
  Box,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import { amidarLogo } from "../../Assets/ProjectImages";
import { useNavigate, useLocation } from "react-router-dom";
import { CookiesService } from "../../Services/Cookies";
import { contexts } from "../../Contexts/ContextsExports";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [navigationButtons, setNavigationButtons] = useState<NavigationProps[]>(
    []
  );
  const { homeState, homeDispatch } = useContext(contexts.Home);
  const { authDispatch } = useContext(contexts.Auth);

  const handleClickHomePage = () => {
    return navigate(`/homepage`);
  };

  const handleClickLogout = () => {
    CookiesService.removeProperties("userId");
    authDispatch({ type: "logout" });
    return navigate(`/login`);
  };

  useEffect(() => {
    if (location.pathname.includes("homepage")) {
      setNavigationButtons(
        navigationProperties.filter((navigationBtn: NavigationProps) => {
          return !navigationBtn.title.includes("יומן ביקורים");
        })
      );
    } else {
      setNavigationButtons(
        navigationProperties.filter((navigationBtn: NavigationProps) => {
          return !navigationBtn.title.includes("חיפוש מתקדם");
        })
      );
    }
  }, [location.pathname]);

  const handleClickAdvanceSearch = () => {
    homeDispatch({
      type: "changeAdvanceSearchValue",
      showAdvanceSearch: homeState.showAdvanceSearch,
    });
  };

  return (
    <Box>
      <AppBar position="static" className="nav-bg bg-app-bar h-75">
        <Toolbar>
          <div className="d-flex jc-center p-18">
            <img src={amidarLogo} width={100} alt="logo" />
          </div>
          <Typography variant="h4" component="div" noWrap sx={titleStyle}>
            ביקורי מעגל
            <span className="version-title">גרסא 1.6</span>
          </Typography>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Grid container>
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
    </Box>
  );
}
