class TableRow {
    constructor() {
        this.block = 'V_YOMAN_BIKUR_SHIKUN_0';
        this.structure = 'V_YOMAN_BIKUR_MIVNE_0';
        this.entry = 'V_YOMAN_BIKUR_KNISA_0';
        this.apartment = 'V_YOMAN_BIKUR_DIRA_0';
        this.floor = 'V_YOMAN_BIKUR_KOMA_0';
        this.city = 'V_YOMAN_BIKUR_SHEM_ISHUV_0';
        this.street = 'V_YOMAN_BIKUR_SHEM_RECHOV_0';
        this.number = 'V_YOMAN_BIKUR_MIS_BAIT_0';
        this.tenantName  = 'V_YOMAN_BIKUR_SHEM_0';
        this.lastVisit = 'V_YOMAN_BIKUR_BIKUR_ACHARON_0';
        this.hour = 'V_YOMAN_BIKUR_SHAAT_BIKUR_0';
        this.coordinationDate = 'V_YOMAN_BIKUR_TARICH_BIKUR_0';
    }
}

class Column {
    constructor(field, headerName){
        this.field = field;
        this.headerName = headerName; 
        this.headerAlign = 'center';
        this.headerClassName = 'super-app-theme--header';
        this.cellClassName = 'super-app-theme--cell';
        if(field === 'map'){
            this.sortable = false;
            this.disableColumnMenu = true;
            this.disableColumnFilter = true;
            this.disableColumnSelector = true;
        }
        this.width =  (window.innerWidth * 0.96) / 13;
    }
}

class TableColumns {
    constructor() {
        const tableRow = new TableRow();
        this.columns = [
            new Column('map','מפה'),
            new Column(tableRow.block,'שיכון'),
            new Column(tableRow.structure,'מבנה'),
            new Column(tableRow.entry,'כניסה'),
            new Column(tableRow.apartment,'דירה'),
            new Column(tableRow.floor,'קומה'),
            new Column(tableRow.city,'יישוב'),
            new Column(tableRow.street,'רחוב'),
            new Column(tableRow.number,'מספר'),
            new Column(tableRow.tenantName,'שם דייר'),
            new Column(tableRow.lastVisit,'ביקור אחרון'),
            new Column(tableRow.hour,'שעה'),
            new Column(tableRow.coordinationDate,'מועד תיאום'),
        ]
    }
}

export {
    TableColumns,
    TableRow
}
