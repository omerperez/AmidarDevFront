import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import { contexts } from "../../Contexts/ContextsExports";
import { VisitContextType } from "../../Data/Types/Visit";
import { WarningDialog } from "../../Layouts/Style/MUI/GlobalStyle";

interface WarningAlertPopupProp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  newStep: number;
}
export default function WarningAlertPopup({
  isOpen,
  setIsOpen,
  newStep,
}: WarningAlertPopupProp) {
  const { setStep } = useContext(contexts.Visit) as VisitContextType;

  const handleClose = () => {
    setIsOpen(false);
  };

  const moveToStepIndex = () => {
    setStep(newStep);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={WarningDialog}
    >
      <DialogTitle id="alert-dialog-title" className="warning-alert">
        {"ביקור אחזקה אינו מלא כנדרש, האם הינך בטוח/ה שברצונך להמשיך ?"}
      </DialogTitle>
      <DialogActions>
        <div className="pos-edit-btns">
          <Stack direction={"row"} onClick={handleClose}>
            <Button
              className="warning-dialog-btn-cancel"
              variant="contained"
              onClick={handleClose}
            >
              רוצה להישאר
            </Button>
            <Button
              onClick={moveToStepIndex}
              className="warning-dialog-btn-next"
              variant="contained"
            >
              רוצה להמשיך
            </Button>
          </Stack>
        </div>
      </DialogActions>
    </Dialog>
  );
}
