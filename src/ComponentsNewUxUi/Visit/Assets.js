const identifyingInformationInputs = [
  {
    label: "שם מלא",
    name: "fullName",
    sm: 4,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "תעודת זיהוי",
    name: "tenantId",
    sm: 4,
    md: 7.5,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "רחוב",
    name: "street",
    sm: 4,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "בית",
    name: "number",
    sm: 2,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "יישוב",
    name: "city",
    sm: 2,
    md: 3,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "מיקוד",
    name: "passcode",
    sm: 2,
    md: 3,
    variant: "filled",
    readOnly: true,
  },

  //   {
  //     label: "סטטוס חוזה",
  //     name: "tenantId",
  //     sm: 2,
  //     md: 2,
  //     variant: "filled",
  //     readOnly: true,
  //   },
];

const occupancyInformationLabels = [
  {
    label: "מצב אכלוס",
    name: "statusDescription",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "תאריך אכלוס",
    name: "tenancyStartDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ביקור אחרון",
    name: "coordinationDate",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "שטח",
    name: "area",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "מספר נפשות",
    name: "countOfTenants",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
  {
    label: "ילדים עד גיל 21",
    name: "countOfKidsUnder21",
    sm: 2,
    md: 2,
    variant: "filled",
    readOnly: true,
  },
];

const contactInfoLabels = [
  {
    label: "נייד מוביל",
    name: "mainMobileNumber",
    value: "0522520484",
  },
  {
    label: "טלפון דירה",
    name: "apartmentPhoneNumber",
    value: "0522520484",
  },
  {
    label: "טלפון עבודה",
    name: "workPhoneNumber",
    value: "0522520484",
  },
  {
    label: `דוא"ל`,
    name: "contactEmail",
    value: "omerperez222@gmail.com",
  },
  {
    label: "דוד השכן",
    name: "anotherPhoneNumber",
    value: "0522520484",
  },
  {
    label: "משה ועד בית",
    name: "anotherPhoneNumber2",
    value: "0522520484",
  },
];

export {
  identifyingInformationInputs,
  occupancyInformationLabels,
  contactInfoLabels,
};
