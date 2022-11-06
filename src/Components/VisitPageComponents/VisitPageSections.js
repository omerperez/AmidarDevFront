import IdentifyingInformation from "./Sections/IdentifyingInformationComponents/IdentifyingInformation";
import AccountStatus from "./Sections/AccountStatus";
import PrivateAreaFiles from "./Sections/PrivateAreaFiles";
import MaintenanceVisit from "./ActionsComponents/MaintenanceComponents/MaintenanceVisit";
import OccupancyVisit from "./ActionsComponents/OccupancyVisitComponents/OccupancyVisit";
import Abandonment from "./ActionsComponents/Abandonment";
import Invasion from "./ActionsComponents/Invasion";

const getVisitPageSections = (apartmentId) => {
  return [
    <IdentifyingInformation
      key="VisitPage-GeneralProperties"
      apartmentId={apartmentId}
    />,
    <AccountStatus key="VisitPage-AccountStatus" />,
    <PrivateAreaFiles key="VisitPage-PrivateAreaFiles" />,
    <MaintenanceVisit key="VisitPage-MaintenanceVisit" />,
    <OccupancyVisit key="VisitPage-OccupancyVisit" />,
    <Abandonment key="VisitPage-Abandonment" />,
    <Invasion key="VisitPage-Invasion" />,
  ];
};
export { getVisitPageSections };
