const BASE_API = process.env.REACT_APP_BASE_URL;
const JSON_CONTENT = {
  headers: {
    "Content-Type": "application/json",
  },
};
const ROLE = "מנהל תיק לקוחות";
const NICE_WORK = "עבודה נעימה !";
const INDEX_DB_VISIT = "Visits";
const HOMEPAGE = "homepage";
const LOGIN = "login";
const LOGOUT = "logout";
const USERID = "userId";
const VISIT_LOG = "יומן ביקורים";
const ADVANCE_SEARCH = "חיפוש מתקדם";
const APP_NAME = "ביקורי מעגל";
const VERSION = "גרסא 1.6";
const APARTMENTS = "apartments";
const SEARCH = "search";
const SAVE_CHANGES = "שמור שינויים";
const CANCEL_CHANGES = "בטל שינויים";
const ERRORS_TITLE = {
  NO_COMMENTS: "בבקשה מלא/י הערות בליקויים שאינם תקינים",
  MISSING_FIELDS: "אנא מלא/י את כל השדות",
};

const USERNAME = "מספר עובד";
const PASSWORD = "סיסמא";
const LOGIN_BTN_TEXT = "התחבר/י";

const VALIDATION = {
  FIXED_EMAIL: "אנא הזמן כתובת מייל חוקית",
  FIXED_AUTH: "מספר עובד או סיסמא אינם נכונים, אנא נסה שנית",
  HEBREW_ONLY: "עברית בלבד",
  EN_LETTERS: /[a-zA-Z]/,
};

export {
  HOMEPAGE,
  ROLE,
  LOGIN,
  JSON_CONTENT,
  LOGOUT,
  VISIT_LOG,
  USERID,
  ADVANCE_SEARCH,
  APP_NAME,
  VERSION,
  APARTMENTS,
  SEARCH,
  SAVE_CHANGES,
  CANCEL_CHANGES,
  ERRORS_TITLE,
  USERNAME,
  PASSWORD,
  LOGIN_BTN_TEXT,
  VALIDATION,
  INDEX_DB_VISIT,
  BASE_API,
  NICE_WORK,
};
