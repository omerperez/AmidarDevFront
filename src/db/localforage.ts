import * as localForage from "localforage";
import { VisitState } from "../Data/Builders/Visit";
import { IRepresentativeApartment } from "../Data/Interfaces/Home";

const dataStore = localForage.createInstance({
  name: "data",
});
const imageStore = localForage.createInstance({
  name: "images",
});

const convertIdToStringFormat = (id: IRepresentativeApartment) => {
  let stringId = "";
  Object.keys(id).map(
    (key) =>
      (stringId +=
        key !== "blockId"
          ? `-${id[key as keyof IRepresentativeApartment]}`
          : `${id[key as keyof IRepresentativeApartment]}`)
  );
  return stringId;
};
const storeToDataDb = (data: VisitState, id: IRepresentativeApartment) => {
  dataStore.setItem(convertIdToStringFormat(id), data);
};

const getFromDataDbById = async (id: IRepresentativeApartment) => {
  const stringId = convertIdToStringFormat(id);
  const response:VisitState|null  = await dataStore.getItem(stringId);
  return response ? (response) : null;
};

const removeItemFromDataDbById = (id: IRepresentativeApartment) => {
  const stringId = convertIdToStringFormat(id);
  localForage.removeItem(stringId);
};

export default { storeToDataDb, getFromDataDbById, removeItemFromDataDbById };
