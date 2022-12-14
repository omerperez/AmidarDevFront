import { GridValidRowModel, GridValueGetterParams } from "@mui/x-data-grid";
import BackupVisit from "../../Components/Home/BackupVisit";
import { IRepresentativeApartment } from "../Interfaces/Home";
import { IMainTenantTableDetails } from "../Interfaces/Visit";

class TableRow {
  block: string;
  structure: string;
  entry: string;
  apartment: string;
  floor: string;
  city: string;
  street: string;
  number: string;
  tenantName: string;
  lastVisit: string;
  hour: string;
  coordinationDate: string;
  createMeeting: string;
  addVisit: string;

  constructor() {
    this.block = "V_YOMAN_BIKUR_SHIKUN_0";
    this.structure = "V_YOMAN_BIKUR_MIVNE_0";
    this.entry = "V_YOMAN_BIKUR_KNISA_0";
    this.apartment = "V_YOMAN_BIKUR_DIRA_0";
    this.floor = "V_YOMAN_BIKUR_KOMA_0";
    this.city = "V_YOMAN_BIKUR_SHEM_ISHUV_0";
    this.street = "V_YOMAN_BIKUR_SHEM_RECHOV_0";
    this.number = "V_YOMAN_BIKUR_MIS_BAIT_0";
    this.tenantName = "V_YOMAN_BIKUR_SHEM_0";
    this.lastVisit = "V_YOMAN_BIKUR_BIKUR_ACHARON_0";
    this.hour = "V_YOMAN_BIKUR_SHAAT_BIKUR_0";
    this.coordinationDate = "V_YOMAN_BIKUR_TARICH_BIKUR_0";
    this.createMeeting = "createMeeting";
    this.addVisit = "addVisit";
  }
}

class MainTenantTableDetails {
  id: string;
  block: string;
  structure: string;
  entry: string;
  apartment: string;
  floor: string;
  city: string;
  street: string;
  number: string;
  tenantName: string;
  lastVisit: string;
  hour: string;
  coordinationDate: string;
  createMeeting: string;
  color: string;

  constructor({
    V_YOMAN_BIKUR_TARICH_BIKUR_0,
    V_YOMAN_BIKUR_SHIKUN_0,
    V_YOMAN_BIKUR_SHEM_RECHOV_0,
    V_YOMAN_BIKUR_SHEM_ISHUV_0,
    V_YOMAN_BIKUR_SHEM_0,
    V_YOMAN_BIKUR_SHAAT_BIKUR_0,
    V_YOMAN_BIKUR_MIVNE_0,
    V_YOMAN_BIKUR_MIS_ZIHUY_0,
    V_YOMAN_BIKUR_MIS_BAIT_0,
    V_YOMAN_BIKUR_KOMA_0,
    V_YOMAN_BIKUR_KNISA_0,
    V_YOMAN_BIKUR_DIRA_0,
    V_YOMAN_BIKUR_BIKUR_ACHARON_0,
    GREEN,
    PINK,
  }: IMainTenantTableDetails) {
    this.id = V_YOMAN_BIKUR_MIS_ZIHUY_0;
    this.block = V_YOMAN_BIKUR_SHIKUN_0;
    this.structure = V_YOMAN_BIKUR_MIVNE_0;
    this.entry = V_YOMAN_BIKUR_KNISA_0;
    this.apartment = V_YOMAN_BIKUR_DIRA_0;
    this.floor = V_YOMAN_BIKUR_KOMA_0;
    this.city = V_YOMAN_BIKUR_SHEM_ISHUV_0;
    this.street = V_YOMAN_BIKUR_SHEM_RECHOV_0;
    this.number = V_YOMAN_BIKUR_MIS_BAIT_0;
    this.tenantName = V_YOMAN_BIKUR_SHEM_0;
    this.lastVisit = V_YOMAN_BIKUR_BIKUR_ACHARON_0;
    this.hour = V_YOMAN_BIKUR_SHAAT_BIKUR_0;
    this.coordinationDate = V_YOMAN_BIKUR_TARICH_BIKUR_0;
    this.createMeeting = "createMeeting";
    this.color = GREEN === "1" ? "green" : PINK === "1" ? "pink" : "white";
  }
}

class Column {
  field: string;
  headerName: string;
  headerAlign: string;
  headerClassName: string;
  cellClassName: string;
  sortable: Boolean = true;
  disableColumnMenu: Boolean = false;
  disableColumnSelector: Boolean = false;
  disableColumnFilter: Boolean = false;
  type: string = "";
  width: Number = ((window.innerWidth * 0.97) / 15) * 0.71;
  renderCell: ((params: GridValueGetterParams) => any) | undefined;

  constructor(field: string, headerName: string) {
    this.field = field;
    this.headerName = headerName;
    this.headerAlign = "center";
    this.headerClassName = "super-app-theme--header";
    this.cellClassName = "super-app-theme--cell";

    if (this.getFieldWithoutSortable().includes(field)) {
      this.sortable = false;
      this.disableColumnMenu = true;
      this.disableColumnFilter = true;
      this.disableColumnSelector = true;
    }
    if (field === "addVisit") {
      this.type = "actions";
      this.renderCell = (params: GridValueGetterParams) => {
        return (
          <BackupVisit
            representativeApartment={this.getRepresentativeNumber(params.row)}
          />
        );
      };
    }
    if (this.getColumnsLargeWidth().includes(headerName)) {
      this.width = ((window.innerWidth * 0.97) / 15) * (1 + 1 / 3);
    }
  }

  getRepresentativeNumber(row: GridValidRowModel) {
    const currentRepresentativeApartment: IRepresentativeApartment = {
      blockId: row.V_YOMAN_BIKUR_SHIKUN_0,
      buildingNumber: row.V_YOMAN_BIKUR_MIVNE_0,
      entrance: row.V_YOMAN_BIKUR_KNISA_0,
      flatId: row.V_YOMAN_BIKUR_DIRA_0,
      personId: row.V_YOMAN_BIKUR_MIS_ZIHUY_0,
    };
    return currentRepresentativeApartment;
  }

  getFieldWithoutSortable() {
    return ["createMeeting", "addVisit", "map"];
  }

  getColumnsLargeWidth() {
    return [
      "??????????",
      "????????",
      "???? ????????",
      "?????????? ??????????",
      "???????? ??????????",
      "?????? ??????????",
      "?????? ??????????",
    ];
  }
}

class TableColumns {
  columns: Column[];

  constructor() {
    const tableRow = new TableRow();
    this.columns = [
      new Column("map", "??????"),
      new Column(tableRow.block, "??????????"),
      new Column(tableRow.structure, "????????"),
      new Column(tableRow.entry, "??????????"),
      new Column(tableRow.apartment, "????????"),
      new Column(tableRow.floor, "????????"),
      new Column(tableRow.city, "??????????"),
      new Column(tableRow.street, "????????"),
      new Column(tableRow.number, "????????"),
      new Column(tableRow.tenantName, "???? ????????"),
      new Column(tableRow.lastVisit, "?????????? ??????????"),
      new Column(tableRow.hour, "??????"),
      new Column(tableRow.coordinationDate, "???????? ??????????"),
      new Column(tableRow.createMeeting, "?????? ??????????"),
      new Column(tableRow.addVisit, "?????? ??????????"),
    ];
  }
}

class RepresentativeApartment implements IRepresentativeApartment {
  blockId;
  buildingNumber;
  entrance;
  flatId;
  personId;

  constructor(representativeObject: { [k: string]: string }) {
    this.blockId = representativeObject.blockId;
    this.buildingNumber = representativeObject.buildingNumber;
    this.entrance = representativeObject.entrance;
    this.flatId = representativeObject.flatId;
    this.personId = representativeObject.personId;
  }
}

export {
  TableColumns,
  TableRow,
  MainTenantTableDetails,
  RepresentativeApartment,
};
