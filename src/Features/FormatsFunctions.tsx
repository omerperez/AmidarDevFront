import { INismachKeys } from "../Assets/Visit/Maintenance";
import { INismach } from "../Data/Interfaces/Visit";
import {
  heMonthArray,
  kindOfFamilyRelationshipOptions,
  maritalStatusOptions,
} from "../Data/Types/Visit";
import dayjs from "dayjs";
import { ChangeEvent } from "react";

const nismachObjFromStringFormat = (currentNismach: string[]) => {
  let createNismach: any = {};
  INismachKeys.map((key, index) => {
    return (createNismach = {
      ...createNismach,
      [key]: key.toLowerCase().includes("date")
        ? changeHebrewMonthToEnglisMonth(
            currentNismach[index].replaceAll(" ", "")
          )
        : currentNismach[index] ?? "-",
    });
  });

  const newNismach: INismach = (createNismach = {
    ...createNismach,
    fullName: `${currentNismach[1]} ${currentNismach[2]}`,
    kindOfFamilyRelationship:
      kindOfFamilyRelationshipOptions[
        createNismach["kindOfFamilyRelationship"] - 1
      ],
    maritalStatus: maritalStatusOptions[createNismach["maritalStatus"] - 1],
  });
  return newNismach;
};

const getDateFormat = (date: Date) => {
  if (date) {
    const currentDate = new Date(date);
    const day = `0${currentDate.getDate()}`;
    const month = `0${currentDate.getMonth() + 1}`;
    const year = `${currentDate.getFullYear()}`;
    return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
  }
  return "תאריך לא זמין";
};

const indexMonth = 1;
const changeHebrewMonthToEnglisMonth = (hebrewFormatDate: string) => {
  const splitDateFormat = hebrewFormatDate?.split("-");
  if (splitDateFormat) {
    const indexOfHeMonth =
      heMonthArray.indexOf(splitDateFormat[indexMonth]) + 1;
    if (indexOfHeMonth !== 0) {
      const enDateFormat = `${splitDateFormat[0]}/${
        indexOfHeMonth < 10 ? "0" + indexOfHeMonth : indexOfHeMonth
      }/${splitDateFormat[2]}`;
      return enDateFormat;
    }
  }
  return "-";
};

const getDefaultStringValueIfEmpty = (value: string, defaultValue?: string) => {
  if (value === undefined || value.trim().length === 0)
    return defaultValue ?? "-";
  return value;
};
const getDefaultNumberValueIfEmpty = (value: any) => {
  if (value) return value;
  return "-";
};

const genderArray: ("זכר" | "נקבה")[] = ["זכר", "נקבה"];

const getGender = (index: number): "זכר" | "נקבה" | "-" => {
  if (index) {
    return genderArray[index - 1];
  }
  return "-";
};

const getMobileFormat = (phoneNumber: string) => {
  if (phoneNumber) {
    const sectionIndex: number =
      phoneNumber.length === 9 ? 2 : phoneNumber.length === 10 ? 3 : 0;
    if (sectionIndex !== 9) {
      return `${phoneNumber.slice(0, sectionIndex)}-${phoneNumber.slice(
        sectionIndex,
        phoneNumber.length
      )}`;
    }
    return phoneNumber;
  }
  return "-";
};

const getStatus = (booleanStatus: string) => {
  return booleanStatus === "1" ?? false;
};

const convertDateFormatToDayJS = (date: string) => {
  if (date) {
    const splitDate = date.split("/");
    return dayjs(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`);
  }
  return null;
};

const isStringIncludesNumbersOnly = (e: ChangeEvent<any>) => {
  const pattern = /^\d+$/;
  const value = e.target.value;
  return !(pattern.test(value) || value === "" || value === "-");
};

const isIdPropper = (id: string) => {
  const arrayChars = id.split("");
  let digitsSum = 0;
  for (let i = 0; i < arrayChars.length - 1; i++) {
    if (i % 2 === 1) {
      const temp = parseInt(arrayChars[i]) * 2;
      if (temp >= 10) {
        digitsSum += 1 + (temp - 10);
      } else {
        digitsSum += temp;
      }
    } else {
      digitsSum += parseInt(arrayChars[i]);
    }
  }
  const checkDigit = 10 - (digitsSum % 10);
  return (
    (checkDigit === 10 ? 0 : checkDigit) ===
    parseInt(arrayChars[arrayChars.length - 1])
  );
};

export {
  getDateFormat,
  changeHebrewMonthToEnglisMonth,
  getDefaultStringValueIfEmpty,
  getDefaultNumberValueIfEmpty,
  getGender,
  getMobileFormat,
  getStatus,
  nismachObjFromStringFormat,
  convertDateFormatToDayJS,
  isStringIncludesNumbersOnly,
  isIdPropper,
};
