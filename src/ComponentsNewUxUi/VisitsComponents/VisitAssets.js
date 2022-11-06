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
import IdentifyingInformation from "../../Components/VisitPageComponents/Sections/IdentifyingInformationComponents/IdentifyingInformation";
import AccountStatus from "../../Components/VisitPageComponents/Sections/AccountStatus";
import Docs from "../../Pages/SubPages/Docs";
import Actions from "../../Pages/SubPages/Actions";

const panelsIconStyle = {
  fontSize: 70,
  color: "#EB1911",
  border: "solid 2px #EB1911",
  borderRadius: "50%",
};

const panelsIconActiveStyle = {
  fontSize: 70,
  background: "#EB1911",
  color: "white",
  border: "solid 2px #EB1911",
  borderRadius: "50%",
};

const getApartmentDetails = (apartmentId) => {
  return (
    <IdentifyingInformation
      key="VisitPage-GeneralProperties"
      apartmentId={apartmentId}
    />
  );
};

const VisitsPagePanels = [
  {
    icon: (isActive) => {
      return (
        <Person
          sx={isActive ? panelsIconActiveStyle : panelsIconStyle}
          className="icon-pad"
        />
      );
    },
    title: "פרטי זיהוי",
    page: getApartmentDetails,
    leftText: (
      <div>
        <div>עומר פרץ</div>
        <div>052-252-0484</div>
      </div>
    ),
  },
  {
    icon: (isActive) => {
      return (
        <ReportGmailerrorred
          sx={isActive ? panelsIconActiveStyle : panelsIconStyle}
          className="icon-pad"
        />
      );
    },
    title: "מצב חשבון",
    page: <AccountStatus key="VisitPage-AccountStatus" />,
    leftText: (
      <div>
        <div>סה״כ חוב</div>
        <div>99,999 -</div>
      </div>
    ),
  },
  {
    icon: (isActive) => {
      return (
        <TextSnippetSharp
          sx={isActive ? panelsIconActiveStyle : panelsIconStyle}
          className="icon-pad"
        />
      );
    },
    title: "מסמכים",
    subTitle: "(ללקוח זה כבר נוצר מסמך לאיזור האישי)",
    page: <Docs />,
    leftText: (
      <Badge badgeContent={4} color="primary">
        <Article color="action" />
      </Badge>
    ),
  },
  {
    icon: (isActive) => {
      return (
        <ManageHistorySharp
          sx={isActive ? panelsIconActiveStyle : panelsIconStyle}
          className="icon-pad"
        />
      );
    },
    title: "פעולות",
    page: <Actions />,
  },
];

const bottomNavigationStyle = {
  "& .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root": {
    maxWidth: "25%",
    height: "70px",
    border: "solid 1px black",
  },
  "& .css-7uwnjw-MuiBottomNavigation-root .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected":
    {
      fontFamily: "Tahoma",
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
      background: "#0087C7",
    },
};

const actionsMenuBtns = [
  {
    label: "ביקור אחזקה",
    icon: <Build />,
  },
  {
    label: "ביקור אכלוס",
    icon: <Home />,
  },
  {
    label: "נטישה",
    icon: <ExitToApp />,
  },
  {
    label: "פלישה",
    icon: <ReportProblem />,
  },
];

export { VisitsPagePanels, bottomNavigationStyle, actionsMenuBtns };
