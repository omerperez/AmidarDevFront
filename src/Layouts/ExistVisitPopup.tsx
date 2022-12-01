import { Info } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../Assets/Constants/Constants";
import { contexts } from "../Contexts/ContextsExports";
import { VisitContextType } from "../Data/Types/Visit";
import { IsExistVisitDialogMui } from "./Style/MUI/GlobalStyle";
export default function ExistVisitPopup() {
  const { visitState, setIdentifyingInfo } = useContext(
    contexts.Visit
  ) as VisitContextType;
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isExist =
      visitState.identifyingInformation.mainTenantDetails.isExistVisit;
    setOpen(isExist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = () => {
    return navigate(`/${HOMEPAGE}`);
  };

  const handleApply = () => {
    const update = visitState.identifyingInformation;
    if (update.mainTenantDetails.isExistVisit && open) {
      update.mainTenantDetails.isExistVisit = false;
      setIdentifyingInfo(update);
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleApply}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={IsExistVisitDialogMui}
    >
      <DialogTitle id="alert-dialog-title" className="warning-alert">
        <Info className="info-icon" />
        <div className="info-title">שים לב</div>
        <div className="info-text">כבר בוצע ביקור השנה</div>
      </DialogTitle>
      {/* <DialogContent id="alert-content"></DialogContent> */}
      <DialogActions className="flex-center">
        {/* <Stack direction={"row"}> */}
        <Button
          fullWidth
          className="info-dialog-cancel-btn"
          variant="contained"
          onClick={handleCancel}
        >
          חזור לעמוד הבית
        </Button>
        <Button
          fullWidth
          onClick={handleApply}
          className="info-dialog-next-btn"
          variant="contained"
        >
          המשך ביקור
        </Button>
        {/* </Stack> */}
      </DialogActions>
    </Dialog>
  );
}
