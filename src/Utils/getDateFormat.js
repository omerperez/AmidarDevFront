function getDateFormat(date) {
  if (date) {
    const currentDate = new Date(date);
    const day = `0${currentDate.getDate()}`;
    const month = `0${currentDate.getMonth() + 1}`;
    const year = `${currentDate.getFullYear()}`;
    return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
  }
  return "תאריך לא זמין";
}

function getCurrentDate() {
  const currentDate = new Date();
  const day = `0${currentDate.getDate()}`;
  const month = `0${currentDate.getMonth() + 1}`;
  const year = `${currentDate.getFullYear()}`;
  return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
}

export { getDateFormat, getCurrentDate };
