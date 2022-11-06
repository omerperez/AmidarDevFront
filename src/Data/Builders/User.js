class User {
  constructor(userName, { password, employeeNumber, countOfRows = 1000 } = {}) {
    this.B1_USER_SCR_0 = userName;
    this.B1_ZEHUT_0 = password;
    this.Mis_oved = employeeNumber;
    this.numOfRowsInTable = countOfRows;
  }
}

class ApplicationUser {
  constructor(employeeNumber, { SHEM_PRATI, SHEM_MISHPACHA, TELEFON_NAYAD }) {
    this.firstName = SHEM_PRATI;
    this.lastName = SHEM_MISHPACHA;
    this.mobileNumber = TELEFON_NAYAD;
    this.employeeNumber = employeeNumber;
  }
}

export { User, ApplicationUser };
