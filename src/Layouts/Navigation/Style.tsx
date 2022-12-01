import { EventRepeat, Logout, Search } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";
import {
  ADVANCE_SEARCH,
  HOMEPAGE,
  SEARCH,
  VISIT_LOG,
} from "../../Assets/Constants/Constants";

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

const usernameTopBarMui = {
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
    title: VISIT_LOG,
    icon: <EventRepeat sx={whiteColor} fontSize="large" />,
    navigate: HOMEPAGE,
  },
  {
    title: ADVANCE_SEARCH,
    icon: <Search sx={whiteColor} fontSize="large" />,
    onClick: SEARCH,
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
  usernameTopBarMui,
};
