import React, { useState } from "react";
import TodayIcon from "@mui/icons-material/Today";
import { IconButton, Tooltip } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ThemeStyleRTL from "../../Assets/Style/ThemeStyleRTL";
import dayjs from "dayjs";
import he from "dayjs/locale/he";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CreateMeetingDialog({ currentTenant }) {
  const [dateWithInitialValue, setDateWithInitialValue] = useState(null);

  if (currentTenant.hour && currentTenant.coordinationDate) {
    setDateWithInitialValue(
      dayjs(`${currentTenant.coordinationDate}T${currentTenant.hour}`).locale(
        he
      )
    );
  }

  return (
    <ThemeStyleRTL>
      <LocalizationProvider adapterLocale={he} dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker
          value={dateWithInitialValue ?? dayjs().locale("he")}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue.locale(he));
          }}
          showToolbar={true}
          minDate={dayjs().locale(he)}
          inputFormat="DD/MM/YYYY hh:mm"
          mask="____/__/__ __:__ _M"
          leftArrowIcon={<TodayIcon />}
          renderInput={(params) => {
            return (
              <Tooltip title="תאם פגישה">
                <IconButton
                  aria-label="create-meeting"
                  color="primary"
                  size="large"
                  onClick={params.inputProps.onClick}
                >
                  <AddCircleOutlineIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            );
          }}
        />
      </LocalizationProvider>
    </ThemeStyleRTL>
  );
}
