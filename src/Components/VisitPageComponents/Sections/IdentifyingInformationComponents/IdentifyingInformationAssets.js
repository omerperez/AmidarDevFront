import { validationService } from "../../../../Services/ValidationsService/ValidationService";
import { Chip, Divider } from "@mui/material";
import { dividerStyle } from "../../VisitPageAssets";

// eslint-disable-next-line no-sparse-arrays
const identifyingInformationInputs = [
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="left">
        <Chip label="פרטים אישיים" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "שם משפחה",
    name: "lastName",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "שם פרטי",
    name: "firstName",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "תעודת זיהוי",
    name: "tenantId",
    sm: 4,
    md: 4,
    variant: "filled",
    readOnly: true,
  },

  // {
  //   lable: 'דירה',
  //   name: 'area'
  // },{
  //   lable: 'כניסה',
  //   name: 'area'
  // },{
  //   lable: 'מבנה',
  //   name: 'area'
  // },{
  //   lable: 'שיכון',
  //   name: 'area'
  // },
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="center">
        <Chip label="פרטי מיקום" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  ,
  // {
  //   lable: "רחוב",
  //   name: "street",
  //   sm: 4,
  //   md: 4,
  //   variant: "filled",
  //   readOnly: true,
  // },
  // {
  //   lable: "בית",
  //   name: "number",
  //   sm: 2,
  //   md: 2,
  //   variant: "filled",
  //   readOnly: true,
  // },
  {
    lable: "כתובת", //"יישוב",
    name: "city",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מיקוד",
    name: "passcode",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "סטטוס חוזה",
    name: "tenantId",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "divider",
    name: (
      <Divider sx={dividerStyle} textAlign="center">
        <Chip label="אכלוס" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "מצב אכלוס",
    name: "statusDescription",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "תאריך מצב אכלוס",
    name: "tenancyStartDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "שטח",
    name: "area",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "מספר נפשות",
    name: "countOfTenants",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "ילדים עד גיל 21",
    name: "countOfKidsUnder21",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    lable: "ביקור אחרון",
    name: "coordinationDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
];

const identifyingInformationInputsWithEditOption = [
  {
    lable: "divider&button",
    name: (
      <Divider sx={dividerStyle} textAlign="right">
        <Chip label="פרטי דירה" className="chip-style" />
      </Divider>
    ),
    sm: 12,
    md: 12,
  },
  {
    lable: "שימוש בפועל",
    name: "usedCode",
    sm: 2,
    md: 3,
    variant: "outlined",
    readOnly: false,
    validation: "",
  },
  {
    lable: "מספר חדרים [1-9]",
    name: "totalRoomsNumber",
    sm: 2,
    md: 2,
    variant: "outlined",
    readOnly: false,
  },
  {
    lable: "חצאי חדרים [1-3]",
    name: "halfRoomsNumber",
    sm: 2,
    md: 2,
    variant: "outlined",
    readOnly: false,
  },
  {
    lable: "קומה [0-99]",
    name: "floor",
    sm: 2,
    md: 2,
    variant: "outlined",
    readOnly: false,
  },
  {
    lable: "מדרגות לדירה [0-120]",
    name: "countOfStairs",
    sm: 2,
    md: 3,
    variant: "outlined",
    readOnly: false,
  },
];

const identifyingInformationInputsProperties = {
  readOnlyItems: identifyingInformationInputs,
  editOptionItems: identifyingInformationInputsWithEditOption,
};

const prefixHomePhoneNumbersList = [
  "02",
  "03",
  "04",
  "08",
  "09",
  "050",
  "051",
  "052",
  "053",
  "054",
  "055",
  "056",
  "057",
  "058",
  "059",
  "072",
  "073",
  "074",
  "076",
  "077",
];

const totalRoomsCountValidation = (value) => {
  return validationService.isRangeProper.function(1, 9, value);
};

const totalHalfRoomsCountValidation = (value) => {
  return validationService.isRangeProper.function(1, 3, value);
};

const floorNumberValidation = (value) => {
  return validationService.isRangeProper.function(0, 99, value);
};

const stairsCountValidation = (value) => {
  return validationService.isRangeProper.function(0, 120, value);
};

const identifyingInformationValidation = {
  usedCode: validationService.isHebrewLettersOnly,
  totalRoomsNumber: {
    function: totalRoomsCountValidation,
    errorComment: validationService.isRangeProper.errorComment(1, 9),
  },
  halfRoomsNumber: {
    function: totalHalfRoomsCountValidation,
    errorComment: validationService.isRangeProper.errorComment(1, 3),
  },
  floor: {
    function: floorNumberValidation,
    errorComment: validationService.isRangeProper.errorComment(0, 99),
  },
  countOfStairs: {
    function: stairsCountValidation,
    errorComment: validationService.isRangeProper.errorComment(0, 120),
  },
};

export {
  identifyingInformationInputsProperties,
  identifyingInformationValidation,
  prefixHomePhoneNumbersList,
};
