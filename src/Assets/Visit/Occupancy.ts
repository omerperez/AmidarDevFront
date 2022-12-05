import { ITenantInfoFields } from "../../Data/Interfaces/Visit";
import { isIdPropper } from "../../Features/FormatsFunctions";
import { validationService } from "../../Services/Validation/GlobalValidations";

const handleValidation = (date: string) => {
    return validationService.isDatePropperValidation.function(date, false);
};

const errorComment = (status: boolean) => {
    return validationService.isDatePropperValidation.errorComment(status, false);
};

const tenantInfoFields: ITenantInfoFields[] = [
    {
        label: "תעודת זהות",
        name: "id",
        isShowOnlyInEdit: false,
        validation: {
            function: isIdPropper,
            errorComment: "תעודת זהות אינה תקינה",
        },
    },
    {
        label: "תעודת זהות חדשה",
        name: "newId",
        isShowOnlyInEdit: true,
        validation: {
            function: isIdPropper,
            errorComment: "תעודת זהות אינה תקינה",
        },
    },
    {
        label: "שם מלא",
        name: "firstName",
        isShowOnlyInEdit: false,
    },
    {
        label: "מין",
        name: "gender",
        isShowOnlyInEdit: false,
    },
    {
        label: "תאריך לידה",
        name: "birthdate",
        isShowOnlyInEdit: false,
        validation: {
            function: handleValidation,
            errorComment: errorComment,
        },
    },
    {
        label: "מצב משפחתי",
        name: "maritalStatus",
        isShowOnlyInEdit: false,
    },
];

export { tenantInfoFields };
