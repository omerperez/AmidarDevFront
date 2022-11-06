import React, { useState, cloneElement } from "react";
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { getDialogPaperStyle } from "./GlobalComponentsAssets";

export default function DialogComponent({
  children,
  content,
  dialogStyle,
  width,
  height,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = getDialogPaperStyle(width, height, dialogStyle);

  return (
    <div>
      {cloneElement(children, { onClick: handleClick })}
      <Dialog
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {content?.title && (
          <DialogTitle id="alert-dialog-title" className="global-font">
            {content?.title}
          </DialogTitle>
        )}
        <DialogContent className="dialog-content">
          <DialogContentText
            className="global-font"
            id="alert-dialog-description"
          >
            {content?.body}
          </DialogContentText>
        </DialogContent>
        {(content?.disagree || content?.agree) && (
          <DialogActions>
            <Button className="global-font" onClick={handleClose}>
              {content?.disagree}
            </Button>
            <Button className="global-font" onClick={handleClose} autoFocus>
              {content?.agree}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
