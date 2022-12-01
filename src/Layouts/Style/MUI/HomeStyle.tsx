import { SxProps, Theme } from "@mui/material";
const TableBoxMui: SxProps<Theme> = {
  boxShadow: "rgba(0, 0, 0, 0.35) 10px 15px 40px",
  height: 1200,
  width: "97%",
  margin: "auto",
  textAlign: "center",
  "& .super-app-theme--header": {
    backgroundColor: "rgb(75 134 197)",
    color: "white",
    fontSize: 18,
    fontFamily: `Noto Sans Hebrew`,
  },
  "& .super-app-theme--cell": {
    fontWeight: "100",
    backgroundColor: "white",
    justifyContent: "center",
    borderTop: "solid 1px rgb(235, 245, 255) !important",
    borderBottom: "solid 1px rgb(235, 245, 255) !important",
    cursor: "pointer",
  },
  "& .bg-green": {
    fontSize: 16,
    backgroundColor: "#ddfff8",
  },
  "& .bg-red": {
    fontSize: 16,
    backgroundColor: "#f9ecff",
  },
  "& .bg-white": {
    fontSize: 16,
    backgroundColor: "white",
  },
  "& .MuiDataGrid-cellContent": {
    width: "100%",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: 0,
  },
};

const TextFieldMui: SxProps<Theme> = {
  "& .MuiFormLabel-root": {
    fontWeight: "bolder",
    fontFamily: `Noto Sans Hebrew`,
  },
};

const BasicSearchTextFieldMui: SxProps<Theme> = {
  "& .MuiFormLabel-root": {
    fontWeight: "bolder",
    fontFamily: "Tahoma",
  },
};

export { TableBoxMui, TextFieldMui, BasicSearchTextFieldMui };
