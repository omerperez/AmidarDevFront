interface applicationUserProps {
  SHEM_PRATI: string;
  SHEM_MISHPACHA: string;
  TELEFON_NAYAD: string;
}

class ApplicationUser {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  employeeNumber: string;

  constructor(
    employeeNumber: string,
    { SHEM_PRATI, SHEM_MISHPACHA, TELEFON_NAYAD }: applicationUserProps
  ) {
    this.firstName = SHEM_PRATI;
    this.lastName = SHEM_MISHPACHA;
    this.mobileNumber = TELEFON_NAYAD;
    this.employeeNumber = employeeNumber;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export { ApplicationUser };
