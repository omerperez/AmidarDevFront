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
};
export { validationService };
