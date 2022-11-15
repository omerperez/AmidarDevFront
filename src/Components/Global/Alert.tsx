import Alert, { AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface AlertProps {
  title: string;
  text?: string;
  severity: AlertColor | undefined;
}
export default function AlertForm({ title, text, severity }: AlertProps) {
  return (
    <Alert severity={severity} className="global-font ml-2p mb-10">
      <AlertTitle sx={{ marginRight: 1 }}>
        <b>{title}</b>
      </AlertTitle>
      <b>{text}</b>
    </Alert>
  );
}
