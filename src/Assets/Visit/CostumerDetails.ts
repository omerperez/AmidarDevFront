import { ICardFields, IContactFields, IEditContact, ILabel } from "../../Data/Interfaces/Visit";
import { validationService } from "../../Services/Validation/GlobalValidations";
import { homePhoneNumberValidation, mobileOrHomePhoneValidation, mobileValidation } from "../../Services/Validation/VisitValidation";
import { ERRORS, TITLES } from "../Constants/VisitConstants";

const generalDetailsFields: ICardFields[] = [
    {
        label: "שם מלא",
        name: "fullName",
        gridSize: 3,
        editGridSize: 6,
        isEdit: false,
        type: "text"
    },
    {
        label: "תעודת זיהוי",
        name: "tenantId",
        gridSize: 7.5,
        editGridSize: 6,
        isEdit: false,
        type: "number"
    },
    {
        label: "רחוב",
        name: "street",
        gridSize: 3,
        editGridSize: 3,
        isEdit: true,
        validation: {
            function: validationService.isHebrewLettersOnly.function,
            errorComment: ERRORS.HEBREW,
        },
        type: "autocomplete"
    },
    {
        label: "בית",
        name: "number",
        gridSize: 3,
        editGridSize: 3,
        isEdit: true,
        type: "number",
    },
    {
        label: "יישוב",
        name: "city",
        gridSize: 3,
        editGridSize: 3,
        isEdit: false,
        type: "text"
    },
    {
        label: "מיקוד",
        name: "passcode",
        gridSize: 3,
        editGridSize: 3,
        isEdit: false,
        type: "number"
    },
];

const occupancyDetailFields: ILabel[] = [
    {
        label: "מצב אכלוס",
        name: "occupancyStatus",
    },
    {
        label: "תאריך אכלוס",
        name: "occupancyDate",
    },
    {
        label: "ביקור אחרון",
        name: "lastVisitDate",
    },
    {
        label: "מספר נפשות",
        name: "totalTenantsCount",
    },
    {
        label: "ילדים עד גיל 21",
        name: "kidsUnder21",
    },
    {
        label: "סטטוס חוזה",
        name: "contractStatus",
    },
];


const contactFields: IContactFields[] = [
    {
        label: "נייד מוביל",
        name: "mainPhoneNumber",
        gridSize: 4,
        isDynamic: false,
    },
    {
        label: "טלפון דירה",
        name: "apartmentPhoneNumber",
        gridSize: 4,
        isDynamic: false,
    },
    {
        label: "טלפון עבודה",
        name: "workPhoneNumber",
        gridSize: 2.5,
        isDynamic: false,
    },
    {
        label: `דוא"ל`,
        name: "email",
        gridSize: 4,
        isDynamic: false,
    },
    {
        label: "firstContactName",
        name: "firstContactPhoneNumber",
        gridSize: 4,
        isDynamic: true,
        defaultLabel: "איש קשר נוסף",
    },
    {
        label: "secondContactName",
        name: "secondContactPhoneNumber",
        gridSize: 4,
        isDynamic: true,
        defaultLabel: "איש קשר נוסף 2",
    },
    {
        label: TITLES.OTHER_CONTACT_DETAILS,
        name: "otherContactDetailsComment",
        gridSize: 9,
        isDynamic: false,
    },
];

const editContactFields: IEditContact[] = [
    {
        label: "נייד מוביל",
        name: "mainPhoneNumber",
        type: "mobile",
        gridSize: 3,
        validation: {
            function: mobileValidation,
            errorComment: validationService.isHomePhoneNumberProper.errorComment,
        },
    },
    {
        label: "טלפון דירה",
        name: "apartmentPhoneNumber",
        type: "mobile",
        gridSize: 3,
        validation: {
            function: homePhoneNumberValidation,
            errorComment: validationService.isHomePhoneNumberProper.errorComment,
        },
    },
    {
        label: "טלפון עבודה",
        name: "workPhoneNumber",
        type: "mobile",
        gridSize: 3,
        validation: {
            function: homePhoneNumberValidation,
            errorComment: validationService.isHomePhoneNumberProper.errorComment,
        },
    },
    {
        label: `דוא"ל`,
        name: "email",
        type: "email",
        gridSize: 3,
        validation: {
            function: validationService.isEmailAddressProper.function,
            errorComment: validationService.isEmailAddressProper.errorComment,
        },
    },
    {
        label: "שם איש קשר 1",
        name: "firstContactName",
        type: "text",
        gridSize: 3,
        validation: {
            function: validationService.isHebrewLettersOnly.function,
            errorComment: ERRORS.HEBREW,
        },
    },
    {
        label: "מספר איש קשר 1",
        name: "firstContactPhoneNumber",
        type: "mobile",
        gridSize: 3,
        validation: {
            function: mobileOrHomePhoneValidation,
            errorComment: validationService.isHomePhoneNumberProper.errorComment,
        },
    },
    {
        label: "שם איש קשר 2",
        name: "secondContactName",
        type: "text",
        gridSize: 3,
        validation: {
            function: validationService.isHebrewLettersOnly.function,
            errorComment: ERRORS.HEBREW,
        },
    },
    {
        label: "מספר איש קשר 2",
        name: "secondContactPhoneNumber",
        type: "mobile",
        gridSize: 3,
        validation: {
            function: mobileOrHomePhoneValidation,
            errorComment: validationService.isHomePhoneNumberProper.errorComment,
        },
    },
    {
        label: TITLES.OTHER_CONTACT_DETAILS,
        name: "otherContactDetailsComment",
        type: "textarea",
        gridSize: 9,
    },
];

export { generalDetailsFields, occupancyDetailFields, contactFields, editContactFields };

