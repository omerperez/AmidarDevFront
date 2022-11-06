import GenericInputForm from "../../../Global/FieldsTypes/GenericInputForm";
import SelectInput from "../../../Global/FieldsTypes/SelectInput";

const defaultValueWaterHeating = {
  label: "חימום על גז",
  value: "Gas",
};

const waterHeating = [
  //   {
  //     defaultValue: {
  //       label: "חימום על גז",
  //       value: "Gas",
  //     },
  //   },
  //   {
  //     optionsList: [
  {
    label: "חימום על גז",
    value: "Gas",
  },
  {
    label: "הסקה מרכזית",
    value: "Central heating",
  },
  {
    label: "דוד שמש מרכזי",
    value: "Central solar heater",
  },
  {
    label: "דוד שמש דירתי",
    value: "Apartment solar heater",
  },
  {
    label: "דוד חשמל",
    value: "Electric heater",
  },
  {
    label: "מכשיר אטמור",
    value: "Atmor device",
  },
  {
    label: "הסקה מרכזית ודוד שמש",
    value: "Central heating and solar heater",
  },
  {
    label: "הסקה מרכזית ודוד חשמלי",
    value: "Central heating and electric heater",
  },
  //     ],
  //   },
];

const securityRoom = [
  {
    label: "חדר ביטחוני",
    value: "Security room",
  },
  {
    label: `ממ"ד`,
    value: "dimension",
  },
  {
    label: `ממ"ק`,
    value: "Multi-storey dimension",
  },
  {
    label: "מקלט עילי לבניין",
    value: "Upper dimension for the building",
  },
  {
    label: "מקלט תת קרקעי לבניין",
    value: "Underground dimension for the building",
  },
  {
    label: "מקלט אזורי",
    value: "Area dimension",
  },
  {
    label: "מחסה בלבד - לא תקני",
    value: "Shelter only",
  },
];

const accountStatusProperties = [
  {
    label: "מספר חשבון",
    value: "2055546845",
  },
  {
    label: "שכ״ד נטו",
    value: "133.485",
  },
  {
    label: "ברוטו",
    value: "780.23",
  },
  {
    label: "סוג הנחה ראשי",
    value: "מדרוג",
  },
  {
    label: "תאריך סיום",
    value: "30/11/2022",
  },
  {
    label: "אמצעי גביה",
    value: "שובר",
  },
  {
    label: "סה״כ חוב",
    value: "61.252",
  },
  {
    label: "יתרת חוב בהסדר",
    value: "0.00",
  },
  {
    label: "סוג שכ״ד",
    value: "מסובסד",
  },
  {
    label: "חוב בתביעה",
    value: "",
  },
];

const sx = {
  "& .muirtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "12px",
  },
};

const apartmentDetails = [
  {
    label: "חימום מים",
    value: (
      <SelectInput
        sx={{ maxHeight: 44 }}
        // label={"חימום מים"}
        // onChange={handleChange}
        name={"waterHeating"}
        // value={defaultValueWaterHeating}
        // defaultValue={defaultValueWaterHeating}
        list={waterHeating}
      />
    ),
    gridSize: 3,
  },
  {
    label: "חדר ביטחון",
    value: (
      <SelectInput
        sx={{ maxHeight: 44 }}
        // label={"חימום מים"}
        // onChange={handleChange}
        name={"waterHeating"}
        // value={values.waterHeating}
        // defaultValue={waterHeating?.defaultValue}
        list={securityRoom}
      />
    ),
    gridSize: 3,
  },
  {
    label: `תמ"א`,
    value: (
      <SelectInput
        sx={{ maxHeight: 44 }}
        // label={"חימום מים"}
        // onChange={handleChange}
        name={"waterHeating"}
        // value={values.waterHeating}
        // defaultValue={waterHeating?.defaultValue}
        // list={waterHeating?.optionsList}
      />
    ),
    gridSize: 3,
  },
  {
    label: "שימוש בפועל",
    value: (
      <SelectInput
        sx={{ maxHeight: 44 }}
        // label={"חימום מים"}
        // onChange={handleChange}
        name={"waterHeating"}
        // value={values.waterHeating}
        // defaultValue={waterHeating?.defaultValue}
        // list={waterHeating?.optionsList}
      />
    ),
    gridSize: 3,
  },
  {
    label: "שטח",
    value: (
      <GenericInputForm
        isShowLabel={false}
        // label={"תמא"}
        readOnly={true}
        sx={sx}
        variant="outlined"
        value={`76 מ"ר`}
      />
    ),
    gridSize: 2.4,
  },
  {
    label: "חדרים [1-9]",
    value: (
      <GenericInputForm
        isShowLabel={false}
        // label={"תמא"}
        readOnly={false}
        sx={sx}
        variant="outlined"
        value={1}
      />
    ),
    gridSize: 2.4,
  },
  {
    label: "חצאי חדרים [1-3]",
    value: (
      <GenericInputForm
        isShowLabel={false}
        // label={"תמא"}
        readOnly={false}
        sx={sx}
        variant="outlined"
        value={0}
      />
    ),
    gridSize: 2.4,
  },
  {
    label: "קומה [1-99]",
    value: (
      <GenericInputForm
        isShowLabel={false}
        // label={"תמא"}
        readOnly={false}
        sx={sx}
        variant="outlined"
        value={1}
      />
    ),
    gridSize: 2.4,
  },
  {
    label: "מדרגות לדירה [1-120]",
    value: (
      <GenericInputForm
        isShowLabel={false}
        // label={"תמא"}
        readOnly={false}
        sx={sx}
        variant="outlined"
        value={1}
      />
    ),
    gridSize: 2.4,
  },
];

export { accountStatusProperties, apartmentDetails };
