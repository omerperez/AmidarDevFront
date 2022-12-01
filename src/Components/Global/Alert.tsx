import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ErrorAlertMui } from "../../Layouts/Style/MUI/GlobalStyle";

interface AlertProps {
  title: string;
  text?: string;
}
export default function AlertForm({ title, text }: AlertProps) {
  return (
    <Alert variant="filled" className="alert-layout" sx={ErrorAlertMui}>
      <AlertTitle sx={{ marginRight: 1 }}>
        <b>{title}</b>
      </AlertTitle>
      <b>{text}</b>
    </Alert>
  );
}
