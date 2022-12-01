import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { cloneElement, forwardRef, ReactElement, Ref, useState } from "react";
import ThemeRightToLeft from "../../../Assets/ThemeRightToLeft";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
  children: JSX.Element;
  title?: string;
  content?: JSX.Element;
}

export default function FullScreenDialog({
  children,
  title,
  content,
}: FullScreenDialogProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const TypographyStyle = {
    ml: 2,
    flex: 1,
    fontFamily: `Noto Sans Hebrew`,
    letterSpacing: 1,
    fontSize: 24,
  };
  return (
    <ThemeRightToLeft>
      {cloneElement(children, { onClick: handleClickOpen })}
      <Dialog
        fullScreen
        sx={{ zIndex: 1000000 }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={TypographyStyle} variant="h6" component="div">
              טופס {title}
            </Typography>
            <Button
              sx={{
                fontFamily: `Noto Sans Hebrew`,
                letterSpacing: 1,
                fontSize: 24,
              }}
              autoFocus
              color="inherit"
              onClick={handleClose}
            >
              שמור
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    </ThemeRightToLeft>
  );
}
