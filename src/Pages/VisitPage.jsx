import React, { useEffect, useState } from "react";
import Loading from "../Layouts/Loading";
import Sidebar from "../Components/VisitPageComponents/VisitPageLayout/Sidebar";
import { getApartment } from "../Components/HomePageComponents/HomePageService";
import { apartmentVisitId } from "../Data/Builders/Apartment";
import { useSearchParams } from "react-router-dom";
import { getVisitPageSections } from "../Components/VisitPageComponents/VisitPageSections";

export default function VisitPage() {
  // const [searchParams] = useSearchParams();
  const [apartmentId, setApartmentId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setApartmentId(null);
    setLoading(false);
  }, []);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const currentApartment = Object.fromEntries([...searchParams]);
  //     const response = await getApartment(currentApartment);
  //     const [element] = await response;
  //     if (element) {
  //       setApartmentId(new apartmentVisitId(element));
  //     } else {
  //       setApartmentId({});
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [searchParams]);

  if (loading) {
    return <Loading />;
  }

  const visitPageSections = getVisitPageSections(apartmentId);

  return <Sidebar key="sideBar-General" children={visitPageSections} />;
}
