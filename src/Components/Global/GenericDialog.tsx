import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  cloneElement,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  Ref,
  useState,
} from "react";
import { CANCEL_CHANGES, SAVE_CHANGES } from "../../Assets/Constants/Constants";
import { DialogFullSize, DialogMui } from "../../Layouts/Style/MUI/GlobalStyle";
import SubPagesTitle from "../Visit/SubPageTitle";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface GenericDialogProps {
  children: JSX.Element;
  title?: string;
  content?: JSX.Element;
  fullSize?: Boolean;
  closeBtn?: Boolean;
  isEditBtn?: Boolean;
  cancelEdit?: () => void;
  saveEdit?: () => void;
}

export default function GenericDialog({
  children,
  title,
  content,
  fullSize,
  closeBtn,
  isEditBtn,
  cancelEdit,
  saveEdit,
}: GenericDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePressESC = (e: KeyboardEvent<any>) => {
    if (e.key === "Escape") {
      return cancel();
    }
  };
  const save = () => {
    saveEdit && saveEdit();
    setOpen(false);
  };
  const cancel = () => {
    cancelEdit && cancelEdit();
    setOpen(false);
  };

  return (
    <div>
      {cloneElement(children, { onClick: handleClickOpen })}
      <Dialog
        onKeyDown={handlePressESC}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        className={fullSize ? "" : "mh-800"}
        sx={fullSize ? DialogFullSize : DialogMui}
        aria-describedby="alert-dialog-slide-description"
      >
        {content && (
          <DialogContent className="mb-20">
            {title && <SubPagesTitle title={title} fontSize={"32"} />}
            {content}
            {isEditBtn && (
              <div className="pos-edit-btns">
                <Stack direction={"row"} spacing={3}>
                  <Button
                    className="save-edit-btn"
                    variant="contained"
                    onClick={save}
                  >
                    {SAVE_CHANGES}
                  </Button>
                  <Button
                    className="cancel-edit-btn"
                    variant="contained"
                    onClick={cancel}
                  >
                    {CANCEL_CHANGES}
                  </Button>
                </Stack>
              </div>
            )}
          </DialogContent>
        )}
        {closeBtn !== false ? (
          <DialogActions>
            <Button className="dialog-action-btn" onClick={cancel}>
              סגור
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  );
}
