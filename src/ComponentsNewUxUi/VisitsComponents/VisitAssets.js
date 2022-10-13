import {
  Person,
  ReportGmailerrorred,
  TextSnippetSharp,
  ManageHistorySharp,
  Article,
} from "@mui/icons-material";
import "./VisitsStyle.css";
import Badge from "@mui/material/Badge";
import Menu from "./Actions/ActionsMenu";
import { ReportProblem, Build, Home, ExitToApp } from "@mui/icons-material";

const panelsIconStyle = {
  fontSize: 70,
  background: "#d5d3d3",
  borderRadius: "50%",
};

const VisitsPagePanels = [
  {
    icon: <Person sx={panelsIconStyle} className="icon-pad" />,
    title: "פרטי זיהוי",
    page: "עומר פרץ",
    leftText: (
      <div>
        <div>עומר פרץ</div>
        <div>052-252-0484</div>
      </div>
    ),
  },
  {
    icon: <ReportGmailerrorred sx={panelsIconStyle} className="icon-pad" />,
    title: "מצב חשבון",
    page: "עומר פרץ",
    leftText: (
      <div>
        <div>סה״כ חוב</div>
        <div>99,999 -</div>
      </div>
    ),
  },
  {
    icon: <TextSnippetSharp sx={panelsIconStyle} className="icon-pad" />,
    title: "מסמכים",
    subTitle: "(ללקוח זה כבר נוצר מסמך לאיזור האישי)",
    page: "עומר פרץ",
    leftText: (
      <Badge badgeContent={4} color="primary">
        <Article color="action" />
      </Badge>
    ),
  },
  {
    icon: <ManageHistorySharp sx={panelsIconStyle} className="icon-pad" />,
    title: "פעולות",
    page: <Menu />,
  },
];

const bottomNavigationStyle = {
  "& .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root": {
    maxWidth: "25%",
    height: "70px",

    border: "solid 1px black",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: 18,
    fontFamily: "Tahoma",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
    fontFamily: "Tahoma",
  },
  "& .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected":
    {
      color: "white",
      background: "black",
    },
};

const actionsMenuBtns = [
    {
        label: "ביקור אחזקה",
        icon: <Build />
    },{
        label: "ביקור אכלוס",
        icon: <Home />
    },{
        label: "נטישה",
        icon: <ExitToApp />
    },{
        label: "פלישה",
        icon: <ReportProblem />
    },
]

export { VisitsPagePanels, bottomNavigationStyle, actionsMenuBtns };