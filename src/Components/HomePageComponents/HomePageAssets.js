const advanceSearchGridSpacing = { xs: 2, md: 3 };

const advanceSearchGridColumns = { xs: 4, sm: 8, md: 12 };

const advanceSearchInputsProperties = [
  {
    lable: "שיכון",
    name: "V_YOMAN_BIKUR_SHIKUN_0",
  },
  {
    lable: "מבנה",
    name: "V_YOMAN_BIKUR_MIVNE_0",
  },
  {
    lable: "כניסה",
    name: "V_YOMAN_BIKUR_KNISA_0",
  },
  {
    lable: "דירה",
    name: "V_YOMAN_BIKUR_DIRA_0",
  },
  {
    lable: "יישוב",
    name: "V_YOMAN_BIKUR_SHEM_ISHUV_0",
  },
  {
    lable: "רחוב",
    name: "V_YOMAN_BIKUR_SHEM_RECHOV_0",
  },
  {
    lable: "מספר",
    name: "V_YOMAN_BIKUR_MIS_BAIT_0",
  },
  {
    lable: "שם דייר (שם מלא)",
    name: "V_YOMAN_BIKUR_SHEM_0",
  },
  {
    lable: "תעודת זהות",
    name: "V_YOMAN_BIKUR_MIS_ZIHUY_0",
  },
  {
    lable: "רכז",
    name: "",
  },
];

const boxStyle = {
  boxShadow: "rgba(0, 0, 0, 0.35) 10px 15px 40px",
  height: 1200,
  width: "97%",
  // margin: "0 2% 0 auto",
  margin: "auto",
  textAlign: "center",
  "& .super-app-theme--header": {
    backgroundColor: "#505050",
    color: "white",
    fontSize: 18,
    fontFamily: "Tahoma",
  },
  "& .super-app-theme--cell": {
    fontWeight: "100",
    justifyContent: "center",
    fontFamily: "Tahoma",
    cursor: "pointer",
  },
  "& .bg-green": {
    fontSize: 18,
    backgroundColor: "#daf8db",
  },
  "& .bg-red": {
    fontSize: 18,
    backgroundColor: "#FFEBEE",
  },
  "& .bg-white": {
    fontSize: 18,
    backgroundColor: "white",
  },
  "& .MuiDataGrid-cellContent": {
    width: "100%",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: 0,
  },
};

const TextFieldStyle = {
  "& .MuiFormLabel-root": {
    fontWeight: "bolder",
    fontFamily: "Tahoma",
  },
};

export {
  boxStyle,
  advanceSearchGridSpacing,
  advanceSearchGridColumns,
  advanceSearchInputsProperties,
  TextFieldStyle,
};
