import { maintenanceQualityList } from "./MaintenanceVisitAssets";

const getIncompleteFields = (values) => {
  if (Object.keys(values).length < maintenanceQualityList.length) {
    for (let index = 0; index < maintenanceQualityList.length; index++) {
      if (values[maintenanceQualityList[index].name] === undefined) {
        return maintenanceQualityList[index].indexLocation;
      }
    }
  }
  return -1;
};

const minRateForNoDescriptionRequire = 4;

const isFormDescriptionsFieldsFilled = (values, elementsRef) => {
  const rateLowerThanThree = Object.keys(values).filter(
    (itemRate) => values[itemRate] < minRateForNoDescriptionRequire
  );

  if (rateLowerThanThree.length > 0) {
    for (let index = 0; index < rateLowerThanThree.length; index++) {
      const currentItem = maintenanceQualityList.find(
        (it) => it.name === rateLowerThanThree[index]
      );
      if (elementsRef.current[currentItem.indexLocation].current.value === "") {
        return currentItem.indexLocation;
      }
    }
  }
  return -1;
};

export { getIncompleteFields, isFormDescriptionsFieldsFilled };
