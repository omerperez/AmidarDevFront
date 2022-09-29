class Defect {
  constructor(rate, descriptionOfDefect) {
    this.rate = rate;
    this.descriptionOfDefect = descriptionOfDefect;
  }

  setRate(rate) {
    this.rate = rate;
    return this;
  }

  setDescription(descriptionOfDefect) {
    this.descriptionOfDefect = descriptionOfDefect;
    return this;
  }
}

class MaintenanceVisitClass {
  constructor(values, descriptionsOfDefect) {
    this.waterHeating = values.waterHeating;
    this.securityRoom = values.securityRoom;
    this.flooring = new Defect(
      values.flooring,
      descriptionsOfDefect.current[0].current?.value ?? null
    );
    this.enteryDoor = new Defect(
      values.enteryDoor,
      descriptionsOfDefect.current[1].current?.value ?? null
    );
    this.caulking = new Defect(
      values.caulking,
      descriptionsOfDefect.current[2].current?.value ?? null
    );
    this.barsAndRailings = new Defect(
      values.barsAndRailings,
      descriptionsOfDefect.current[3].current?.value ?? null
    );
    this.electricalSystem = new Defect(
      values.electricalSystem,
      descriptionsOfDefect.current[4].current?.value ?? null
    );
    this.pipingLeaks = new Defect(
      values.pipingLeaks,
      descriptionsOfDefect.current[5].current?.value ?? null
    );
    this.insidesDoors = new Defect(
      values.insidesDoors,
      descriptionsOfDefect.current[6].current?.value ?? null
    );
    this.bathroomDoors = new Defect(
      values.bathroomDoors,
      descriptionsOfDefect.current[7].current?.value ?? null
    );
    this.windows = new Defect(
      values.windows,
      descriptionsOfDefect.current[8].current?.value ?? null
    );
    this.blinds = new Defect(
      values.blinds,
      descriptionsOfDefect.current[9].current?.value ?? null
    );
    this.kitchen = new Defect(
      values.kitchen,
      descriptionsOfDefect.current[10].current?.value ?? null
    );
    this.toilet = new Defect(
      values.toilet,
      descriptionsOfDefect.current[11].current?.value ?? null
    );
    this.shower = new Defect(
      values.shower,
      descriptionsOfDefect.current[12].current?.value ?? null
    );
    this.generalApartmentCondition = new Defect(
      values.generalApartmentCondition,
      descriptionsOfDefect.current[13].current?.value ?? null
    );
  }

  setDefectRate(name, rate) {
    const changeRate = this[name].setRate(rate);
    this[name] = changeRate;
    return this;
  }

  setDefectDescription(name, descriptionOfDefect) {
    this[name] = this[name].setDescription(descriptionOfDefect);
    return this;
  }

  setDefect(name, { rate, descriptionOfDefect }) {
    this[name] = { rate, descriptionOfDefect };
    return this;
  }

  // constructor(
  //   waterHeating,
  //   securityRoom,
  //   { flooring, flooringDescriptionOfDefect },
  //   { enteryDoor, enteryDoorDescriptionOfDefect },
  //   { caulking, caulkingDescriptionOfDefect },
  //   { barsAndRailings, barsAndRailingsDescriptionOfDefect },
  //   { electricalSystem, electricalSystemDescriptionOfDefect },
  //   { pipingLeaks, pipingLeaksDescriptionOfDefect },
  //   { insidesDoors, insidesDoorsDescriptionOfDefect },
  //   { bathroomDoors, bathroomDoorsDescriptionOfDefect },
  //   { windows, windowsDescriptionOfDefect },
  //   { blinds, blindsDescriptionOfDefect },
  //   { kitchen, kitchenDescriptionOfDefect },
  //   { toilet, toiletDescriptionOfDefect },
  //   { shower, showerDescriptionOfDefect },
  //   { generalApartmentCondition, generalApartmentConditionDescriptionOfDefect }
  // ) {
  //   this.waterHeating = waterHeating;
  //   this.securityRoom = securityRoom;
  //   this.flooring = Defect(flooring, flooringDescriptionOfDefect);
  //   this.enteryDoor = Defect(enteryDoor, enteryDoorDescriptionOfDefect);
  //   this.caulking = Defect(caulking, caulkingDescriptionOfDefect);
  //   this.barsAndRailings = Defect(
  //     barsAndRailings,
  //     barsAndRailingsDescriptionOfDefect
  //   );
  //   this.electricalSystem = Defect(
  //     electricalSystem,
  //     electricalSystemDescriptionOfDefect
  //   );
  //   this.pipingLeaks = Defect(pipingLeaks, pipingLeaksDescriptionOfDefect);
  //   this.insidesDoors = Defect(insidesDoors, insidesDoorsDescriptionOfDefect);
  //   this.bathroomDoors = Defect(
  //     bathroomDoors,
  //     bathroomDoorsDescriptionOfDefect
  //   );
  //   this.windows = Defect(windows, windowsDescriptionOfDefect);
  //   this.blinds = Defect(blinds, blindsDescriptionOfDefect);
  //   this.kitchen = Defect(kitchen, kitchenDescriptionOfDefect);
  //   this.toilet = Defect(toilet, toiletDescriptionOfDefect);
  //   this.shower = Defect(shower, showerDescriptionOfDefect);
  //   this.generalApartmentCondition = Defect(
  //     generalApartmentCondition,
  //     generalApartmentConditionDescriptionOfDefect
  //   );
  // }
}

export { MaintenanceVisitClass, Defect };
