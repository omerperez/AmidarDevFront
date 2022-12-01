import { validationService } from "./GlobalValidations";

const areaValidation = (value: number) => {
  return validationService.isRangeProper.function(1, 400, value);
};

const roomsValidation = (value: number) => {
  return validationService.isRangeProper.function(1, 9, value);
};

const halfRoomsValidation = (value: number) => {
  return validationService.isRangeProper.function(1, 3, value);
};

const floorsValidation = (value: number) => {
  return validationService.isRangeProper.function(1, 99, value);
};

const stairsValidation = (value: number) => {
  return validationService.isRangeProper.function(1, 120, value);
};

const streetValidation = (street: string) => {
  return validationService.isHebrewLettersOnly.function(street);
};

const mobileValidation = (mobile: string) => {
  let currentMobile = mobile.replace("-", "");
  return validationService.isMobileNumberProper.function(
    currentMobile,
    "mobile"
  );
};

const mobileOrHomePhoneValidation = (number: string) => {
  const status = mobileValidation(number);
  if (!status) {
    return validationService.isHomePhoneNumberProper.function(number, "home");
  }
  return status;
};

const homePhoneNumberValidation = (mobile: string) => {
  let currentMobile = mobile.replace("-", "");
  return validationService.isMobileNumberProper.function(currentMobile, "home");
};

export {
  areaValidation,
  roomsValidation,
  halfRoomsValidation,
  floorsValidation,
  stairsValidation,
  streetValidation,
  mobileValidation,
  homePhoneNumberValidation,
  mobileOrHomePhoneValidation,
};
