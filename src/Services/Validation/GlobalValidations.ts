import dayjs from "dayjs";
import { VALIDATION } from "../../Assets/Constants/Constants";
import { convertDateFormatToDayJS } from "../../Features/FormatsFunctions";

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

function numbersRange(start: number, end: number, value: number) {
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

function isPhoneNumberProper(phoneNumber: string, phoneNumberType: string) {
  if (phoneNumberType === "home") {
    return phoneNumber.length >= 9 && phoneNumber.length <= 10;
  }
  return phoneNumber.length === 10;
}

function isEmailAddressProper(email: string) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex) ? true : false;
}

function employeeNumberValidation(employeeId: string) {
  if (employeeId && employeeId.length === 5) {
    return VALIDATION.EN_LETTERS.test(employeeId);
  }
  return false;
}

function isPasswordPropper(password: string) {
  console.log(VALIDATION.EN_LETTERS.test(password));
  return password.length > 5 && VALIDATION.EN_LETTERS.test(password);
}

function employeeMobileValidation(mobile: string) {
  if (mobile === undefined) {
    return false;
  }
  return mobile?.length === 10;
}

function isDatePropperValidation(date: string, isAfterToday: boolean) {
  if (date) {
    const currentDate = dayjs(new Date());
    const compareDate = convertDateFormatToDayJS(date);
    if (compareDate) {
      if (isAfterToday) {
        return compareDate.isAfter(currentDate);
      } else {
        return compareDate.isBefore(currentDate);
      }
    }
    return false;
  }
  return false;
}

function isDatePropperComment(isPropper: boolean, isAfterToday: boolean) {
  if (isPropper) {
    return "";
  }
  if (isAfterToday) {
    return "התאריך שהוזן אינו יכול להיות גדול מהתאריך של היום";
  }
  return "התאריך שהוזן אינו יכול להיות קטן מהתאריך של היום";
}

const validationService = {
  isHebrewLettersOnly: {
    function: hebrewLettersOnly,
    errorComment: VALIDATION.HEBREW_ONLY,
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
    errorComment: VALIDATION.FIXED_AUTH,
  },
  isEmailAddressProper: {
    function: isEmailAddressProper,
    errorComment: VALIDATION.FIXED_EMAIL,
  },
  isEmployeeNumberProper: {
    function: employeeNumberValidation,
    errorComment: VALIDATION.FIXED_AUTH,
  },
  isEmployeeMobileProper: {
    function: employeeMobileValidation,
    errorComment: VALIDATION.FIXED_AUTH,
  },
  isUserPasswordPropper: {
    function: isPasswordPropper,
    errorComment: VALIDATION.FIXED_AUTH,
  },
  isDatePropperValidation: {
    function: isDatePropperValidation,
    errorComment: isDatePropperComment,
  },
};
export { validationService };
