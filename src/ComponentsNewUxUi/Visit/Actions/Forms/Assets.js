import {
  Home,
  RecordVoiceOver,
  Handshake,
  Savings,
  ManageAccounts,
  MoveUp,
  Business,
  PhotoCamera,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { htmlForms } from "../../../../Features/HtmlForms/ExportHtmlForms";

const formsOptions = [
  {
    title: "גר בגפו",
    icon: <Home />,
    statusName: "isLiveAlone",
  },
  {
    title: "הצהרת דייר ראשי",
    icon: <RecordVoiceOver />,
    statusName: "isContractStatus",
  },
  {
    title: "הצהרת בן/בת זוג",
    icon: <Handshake />,
    statusName: "isLiveAlone",
  },
  {
    title: "הרשאה לחיוב חשבון",
    icon: <Savings />,
    statusName: "isLiveAlone",
  },
  {
    title: "הסדר חוב",
    icon: <ManageAccounts />,
    statusName: "isLiveAlone",
  },
  {
    title: "שכירות מעבר",
    icon: <MoveUp />,
    statusName: "isTenantAffidavitA",
  },
  {
    title: "מבנה טרומי",
    icon: <Business />,
    statusName: "isBuilding38",
  },
  {
    title: "תמונות",
    icon: <PhotoCamera />,
    statusName: "images",
  },
];

export { formsOptions };
