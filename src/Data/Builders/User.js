class User {
    constructor(userName, {password, employeeNumber, countOfRows = 1000} = {}) {
        this.B1_USER_SCR_0 = userName;
        this.B1_ZEHUT_0 = password;
        this.Mis_oved = employeeNumber;
        this.numOfRowsInTable = countOfRows;
    }
}

export {
    User
}
