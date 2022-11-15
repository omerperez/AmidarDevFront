import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Logout, Search, EventRepeat } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

const drawerWidth = 240;

const displayFlex = { display: "flex" };
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }: any) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
}));

const titleStyle = {
  flexGrow: 1,
  marginRight: "8%",
  fontFamily: `Noto Sans Hebrew`,
};

const whiteColor = { color: "white" };

export type NavigationProps =
  | {
      title: "יומן ביקורים";
      icon: ReactElement<SvgIconProps>;
      navigate: string;
    }
  | {
      title: "חיפוש מתקדם";
      icon: ReactElement<SvgIconProps>;
      onClick: string;
    }
  | { title: "התנתק/י"; icon: ReactElement<SvgIconProps> };

const navigationProperties: NavigationProps[] = [
  {
    title: "יומן ביקורים",
    icon: <EventRepeat sx={whiteColor} fontSize="large" />,
    navigate: "homepage",
  },
  {
    title: "חיפוש מתקדם",
    icon: <Search sx={whiteColor} fontSize="large" />,
    onClick: "search",
  },
  {
    title: "התנתק/י",
    icon: <Logout sx={whiteColor} fontSize="large" />,
  },
];

export {
  drawerWidth,
  Main,
  AppBar,
  DrawerHeader,
  whiteColor,
  titleStyle,
  navigationProperties,
  displayFlex,
};
