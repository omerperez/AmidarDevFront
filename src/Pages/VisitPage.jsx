import React, { useEffect, useState } from "react";
import { getApartment } from "../Components/HomePageComponents/HomePageService";
import { apartmentVisitId } from "../Data/Builders/Apartment";
import Loading from "../Layouts/Loading";
import Sidebar from "../Components/VisitPageComponents/VisitPageLayout/Sidebar";
import GeneralProperties from "../Components/VisitPageComponents/Sections/GeneralProperties";
import AccountStatus from "../Components/VisitPageComponents/Sections/AccountStatus";
import PrivateAreaFiles from "../Components/VisitPageComponents/Sections/PrivateAreaFiles";
import Actions from "../Components/VisitPageComponents/Sections/Actions";
import MaintenanceVisit from "../Components/VisitPageComponents/ActionsComponents/MaintenanceComponents/MaintenanceVisit";
import OccupancyVisit from "../Components/VisitPageComponents/ActionsComponents/OccupancyVisitComponents/OccupancyVisit";
import Abandonment from "../Components/VisitPageComponents/ActionsComponents/Abandonment";
import Invasion from "../Components/VisitPageComponents/ActionsComponents/Invasion";
import { useSearchParams } from "react-router-dom";

export default function VisitPage() {
  const [searchParams] = useSearchParams();
  const [apartmentId, setApartmentId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const currentApartment = Object.fromEntries([...searchParams]);
      const response = await getApartment(currentApartment);
      const [element] = await response;
      if (element) {
        setApartmentId(new apartmentVisitId(element));
      } else {
        setApartmentId({});
      }
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  // if (loading) {
  //   return <Loading />;
  // }

  const childrensComponentsVisitPage = [
    <GeneralProperties
      key="VisitPage-GeneralProperties"
      apartmentId={apartmentId}
    />,
    <AccountStatus key="VisitPage-AccountStatus" />,
    <PrivateAreaFiles key="VisitPage-PrivateAreaFiles" />,
    <Actions key="VisitPage-Actions" />,
    <MaintenanceVisit key="VisitPage-MaintenanceVisit" />,
    <OccupancyVisit key="VisitPage-OccupancyVisit" />,
    <Abandonment key="VisitPage-Abandonment" />,
    <Invasion key="VisitPage-Invasion" />,
  ];

  return (
    <Sidebar key="sideBar-General" children={childrensComponentsVisitPage} />
  );
}
