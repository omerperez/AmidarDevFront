import { IAccountFields } from "../../Data/Interfaces/Visit";

const accountFields: IAccountFields[] = [
    {
        label: "מספר חשבון",
        name: "accountNumber",
        gridSize: 3
    },
    {
        label: "שם הלקוח",
        name: "accountFullName",
        gridSize: 9
    },
    {
        label: "שכ״ד נטו",
        name: "netRent",
        gridSize: 3
    },
    {
        label: "ברוטו",
        name: "grossRent",
        gridSize: 3
    },
    {
        label: "סוג שכ״ד",
        name: "rentType",
        gridSize: 6
    },
    {
        label: "סוג הנחה ראשי",
        name: "discountType",
        gridSize: 3
    },
    {
        label: "תאריך סיום",
        name: "finishDate",
        gridSize: 3
    },
    {
        label: "אמצעי גביה",
        name: "collectionMeans",
        gridSize: 6
    },
    {
        label: "סה״כ חוב",
        name: "debt",
        gridSize: 3
    },
    {
        label: "יתרת חוב בהסדר",
        name: "balaceDebt",
        gridSize: 3
    },
    {
        label: "חוב בתביעה",
        name: "lawsuitDebt",
        gridSize: 3
    },
];

export { accountFields };