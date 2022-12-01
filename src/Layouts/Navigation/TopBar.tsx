import {
  Box,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ADVANCE_SEARCH,
  APP_NAME,
  HOMEPAGE,
  LOGIN,
  VERSION,
  VISIT_LOG,
} from "../../Assets/Constants/Constants";
import { amidarLogo } from "../../Assets/ProjectImages";
import { contexts } from "../../Contexts/ContextsExports";
import { AuthContextType } from "../../Data/Types/Auth";
import { HomeContextType } from "../../Data/Types/Home";
import { VisitContextType } from "../../Data/Types/Visit";
import CookiesService from "../../Services/Cookies";
import "../Layout.css";
import {
  AppBar,
  navigationProperties,
  NavigationProps,
  titleStyle,
} from "./Style";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigationBtns, setNavigationBtns] = useState<NavigationProps[]>([]);
  const { homeState, setAdvanceSearch } = useContext(
    contexts.Home
  ) as HomeContextType;
  const { authState, logout } = useContext(contexts.Auth) as AuthContextType;
  const { setStep } = useContext(contexts.Visit) as VisitContextType;

  const handleClickHomePage = () => {
    return navigate(`/${HOMEPAGE}`);
  };

  const handleClickLogout = () => {
    CookiesService.removeUser();
    logout();
    return navigate(`/${LOGIN}`);
  };

  useMemo(() => {
    if (location.pathname.includes(HOMEPAGE)) {
      setNavigationBtns(
        navigationProperties.filter((navigationBtn: NavigationProps) => {
          return !navigationBtn.title.includes(VISIT_LOG);
        })
      );
    } else {
      setNavigationBtns(
        navigationProperties.filter((navigationBtn: NavigationProps) => {
          return !navigationBtn.title.includes(ADVANCE_SEARCH);
        })
      );
    }
    setStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleClickAdvanceSearch = () => {
    setAdvanceSearch(homeState.isShowAdvanceSearch);
  };

  return (
    <Box>
      <AppBar position="static" className="nav-bg bg-app-bar h-75">
        <Toolbar>
          <div className="d-flex jc-center p-18">
            <img src={amidarLogo} width={100} alt="logo" />
          </div>
          <Typography variant="h4" component="div" noWrap sx={titleStyle}>
            {APP_NAME}
            <span className="version-title">{VERSION}</span>
          </Typography>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className="username-top-bar">{authState.fullName}</div>
            <Grid container>
              {navigationBtns.map((menuProp, key) => {
                return (
                  <Grid item key={`AppMenu-Grid-${key}`}>
                    <Tooltip
                      title={menuProp.title}
                      key={`AppMenu-Tooltip-${menuProp.title}`}
                    >
                      <IconButton
                        key={`AppMenu-IconButton-${menuProp.title}`}
                        onClick={
                          menuProp.title === ADVANCE_SEARCH
                            ? handleClickAdvanceSearch
                            : menuProp.title === VISIT_LOG
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
