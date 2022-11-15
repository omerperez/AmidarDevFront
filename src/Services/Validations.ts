function hebrewLettersOnly(name: string) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] < "א" || name[i] > "ת") {
      if (name[i] !== " ") {
        return false;
      }
    }
  }
  return true;
}

interface numberRangeInputs {
  start: number;
  end: number;
  value: number;
}

function numbersRange({ start, end, value }: numberRangeInputs) {
  return value >= start && value <= end;
}

interface rangeErrorInputs {
  start: number;
  end: number;
}

function isRangeProperErrorComment({ start, end }: rangeErrorInputs) {
  const genericError = `בבקשה הזן מספרים בין`;
  return `${genericError} ${start}-${end}`;
}

interface phoneNumberInputs {
  phoneNumber: string;
  phoneNumberType: string;
}
function isPhoneNumberProper({
  phoneNumber,
  phoneNumberType,
}: phoneNumberInputs) {
  if (phoneNumberType === "home") {
    return phoneNumber.length >= 9 && phoneNumber.length <= 10;
  }
  return phoneNumber.length === 10;
}

function isEmailAddressProper(email: string) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
}

function employeeNumberValidation(employeeId: string) {
  if (employeeId === undefined) {
    return false;
  }
  return employeeId?.length === 4;
}

function employeeMobileValidation(mobile: string) {
  if (mobile === undefined) {
    return false;
  }
  return mobile?.length === 10;
}

const validationService = {
  isHebrewLettersOnly: {
    function: hebrewLettersOnly,
    errorComment: "עברית בלבד",
  },
  isRangeProper: {
    function: numbersRange,
    errorComment: isRangeProperErrorComment,
  },
  isHomePhoneNumberProper: {
    function: isPhoneNumberProper,
    errorComment: "בבקשה הכנס מספר בעל 9-10 ספרות",
  },
  isMobileNumberProper: {
    function: isPhoneNumberProper,
    errorComment: "בבקשה הכנס מספר בעל 10 ספרות",
  },
  isEmailAddressProper: {
    function: isEmailAddressProper,
    errorComment: "אנא הזמן כתובת מייל חוקית",
  },
  isEmployeeNumberProper: {
    function: employeeNumberValidation,
    errorComment: "מספר עובד לא חוקי, אנא הזן בשנית",
  },
  isEmployeeMobileProper: {
    function: employeeMobileValidation,
    errorComment: "מספר נייד לא חוקי, אנא הזן בשנית",
  },
};
export { validationService };
