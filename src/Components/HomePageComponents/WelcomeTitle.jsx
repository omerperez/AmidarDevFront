import React from "react";
import dayjs from "dayjs";
import he from "dayjs/locale/he";

export default function WelcomeTitle({ firstName, lastName }) {
  const getCurrentDatePartTitle = () => {
    const currentDate = dayjs().locale(he);

    return currentDate.hour() >= 3 && currentDate.hour() < 12
      ? "בוקר טוב"
      : currentDate.hour() >= 12 && currentDate.hour() < 16
      ? "צהריים טובים"
      : currentDate.hour() >= 16 && currentDate.hour() < 21
      ? "ערב טוב"
      : "לילה טוב";
  };

  return (
    <div className="welcome-title">
      {`${getCurrentDatePartTitle()} ${firstName ?? ""} ${lastName ?? ""},`}
    </div>
  );
}
