function hebrewLettersOnly(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] < "א" || name[i] > "ת") {
      if (name[i] !== " ") {
        return false;
      }
    }
  }
  return true;
}

function numbersRange(start, end, value) {
  return value >= start && value <= end;
}

function isRangeProperErrorComment(start, end) {
  const genericError = `בבקשה הזן מספרים בין`;
  return `${genericError} ${start}-${end}`;
}

function isPhoneNumberProper(phoneNumber, phoneNumerType) {
  if (phoneNumerType === "home") {
    return phoneNumber.length >= 9 && phoneNumber.length <= 10;
  }
  return phoneNumber.length === 10;
}

function isEmailAddressProper(email) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
}

function employeeNumberValidation(employeeNumber) {
  if (employeeNumber === undefined) {
    return false;
  }
  return employeeNumber?.length === 4;
}

function employeeMobileValidation(employeeMobile) {
  if (employeeMobile === undefined) {
    return false;
  }
  return employeeMobile?.length === 10;
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
