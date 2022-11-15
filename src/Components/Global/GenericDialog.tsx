import { forwardRef, Ref, ReactElement, useState, cloneElement } from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Button,
  DialogActions,
  Dialog,
  DialogContent,
  Slide,
} from "@mui/material";
import SubPagesTitle from "../Visit/SubPageTitle";
import { dialogStyle, dialogFullSizeStyle } from "../../Assets/Global";

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
}

export default function GenericDialog({
  children,
  title,
  content,
  fullSize,
  closeBtn,
}: GenericDialogProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {cloneElement(children, { onClick: handleClickOpen })}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className={fullSize ? "" : "mh-800"}
        sx={fullSize ? dialogFullSizeStyle : dialogStyle}
        aria-describedby="alert-dialog-slide-description"
      >
        {content && (
          <DialogContent className="mb-20">
            {title && <SubPagesTitle title={title} fontSize={"32"} />}
            {content}
          </DialogContent>
        )}
        {closeBtn !== false ? (
          <DialogActions>
            <Button className="dialog-action-btn" onClick={handleClose}>
              סגור
            </Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  );
}
