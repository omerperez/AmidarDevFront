import React, { useEffect, useState, useContext } from "react";
import Loading from "../Layouts/Loading";
import Sidebar from "../Components/VisitPageComponents/VisitPageLayout/Sidebar";
import {
  getApartment,
  formStatusRequest,
} from "../Components/HomePageComponents/HomePageService";
import { apartmentVisitId } from "../Data/Builders/Apartment";
import { useSearchParams } from "react-router-dom";
import { getVisitPageSections } from "../Components/VisitPageComponents/VisitPageSections";
import { VisitContext } from "../Contexts/VisitContext";
import Panels from "../ComponentsNewUxUi/VisitsComponents/Panels";

export default function VisitPage() {
  // const [searchParams] = useSearchParams();
  const [apartmentId, setApartmentId] = useState();
  const [loading, setLoading] = useState(true);
  const { visitContextFunction } = useContext(VisitContext);

  useEffect(() => {
    // const fetchData = async () => {
    //   const currentApartment = Object.fromEntries([...searchParams]);
    //   const response = await getApartment(currentApartment);
    //   const formStatusRequestData = await formStatusRequest(currentApartment);

    //   const [element] = await response;
    //   if (element) {
    //     setApartmentId(new apartmentVisitId(element));
    //   } else {
    //     setApartmentId({});
    //   }
    //   if (formStatusRequestData) {
    //     visitContextFunction.setFormsFiles(formStatusRequestData);
    //   }
      setLoading(false);
    // };
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //  [searchParams]);

  if (loading) {
    return <Loading />;
  }

  const visitPageSections = getVisitPageSections(apartmentId);

  return <Panels />;
  //<Sidebar key="sideBar-General" children={visitPageSections} />;
}
