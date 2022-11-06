import React, { useState } from "react";
import Abandonment from "../../Components/VisitPageComponents/ActionsComponents/Abandonment";
import Invasion from "../../Components/VisitPageComponents/ActionsComponents/Invasion";
import MaintenanceForm from "../../ComponentsNewUxUi/VisitsComponents/Actions/MaintenanceVisit/MaintenanceForm";
import OccupancyVisit from "../../Components/VisitPageComponents/ActionsComponents/OccupancyVisitComponents/OccupancyVisit";
import Menu from "../../ComponentsNewUxUi/VisitsComponents/Actions/ActionsMenu";

export default function Actions() {
  const [activeLabel, setActiveLabel] = useState(0);

  const onChangeActiveLabel = (labelIndex) => {
    setActiveLabel(labelIndex);
  };

  const actionsViews = [
    <MaintenanceForm key="VisitPage-MaintenanceVisit" />,
    <OccupancyVisit key="VisitPage-OccupancyVisit" />,
    <Abandonment key="VisitPage-Abandonment" />,
    <Invasion key="VisitPage-Invasion" />,
  ];

  return (
    <>
      <Menu activeLabel={activeLabel} changeActiveLabel={onChangeActiveLabel} />
      <div style={{ paddingTop: "30px" }}>{actionsViews[activeLabel]}</div>
    </>
  );
}
