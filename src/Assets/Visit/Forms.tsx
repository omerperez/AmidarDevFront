import { IForm } from "../../Data/Interfaces/Visit";
import LiveAlone from "../../Components/Visit/Forms/LiveAlone";
import MainTenant from "../../Components/Visit/Forms/MainTenant";

const formsFields: IForm[] = [
  {
    title: "גר בגפו",
    name: "liveAlone",
  },
  {
    title: "הצהרת דייר ראשי",
    name: "mainTenants",
  },
  {
    title: "הצהרת בן/בת זוג",
    name: "partner",
  },
  {
    title: "הרשאה לחיוב חשבון",
    name: "bankDebitAccount",
  },
  {
    title: "הסדר חוב",
    name: "debtSettlement",
  },
  {
    title: "שכירות מעבר",
    name: "transitionalRent",
  },
  {
    title: "מבנה טרומי",
    name: "prefabricatedStructure",
  },
];

const formsArray: JSX.Element[] = [
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
  <MainTenant />,
  <LiveAlone />,
];

export { formsFields, formsArray };
