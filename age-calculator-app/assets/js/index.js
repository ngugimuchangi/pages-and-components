document.addEventListener('DOMContentLoaded', () => {
  // ELEMENTS
  const ageCalculatorForm = document.forms['age-calculator'];

  // FUNCTIONS
  /**
   * Checks if a field is valid
   * @param {object} field - form input element
   * @returns {boolean} - true if a field are valid
   * else false
   */
  function isValidField(field) {
    const nullError = 'This field is required';
    const valueError = `Must be a valid ${field.name}`;
    const errorElement = field.nextElementSibling;
    const testNumeric = /^([0-9]{1}|[0-9]{2}|[0-9]{4,})$/;
    if (!field.value) {
      errorElement.innerText = nullError;
      errorElement.classList.add('show');
      field.parentElement.classList.add('invalid');
      return false;
    }
    if (field.value === '0' || !testNumeric.test(field.value)) {
      errorElement.innerText = valueError;
      errorElement.classList.add('show');
      field.parentElement.classList.add('invalid');
      return false;
    }
    return true;
  }

  /**
   * Checks if date of birth entered is valid
   * @param {object} day - day input element
   * @param {object} month - month input element
   * @param {object} year - year input element
   * @returns
   */
  function isValidDate(day, month, year) {
    const presentTimeError = 'Must be in the past';
    const valueError = 'Must be a valid ';
    const evenMonths = [4 ,6, 9, 11];
    const today = new Date();
    const dayValue = parseInt(day.value, 10);
    const monthValue = parseInt(month.value, 10);
    const yearValue = parseInt(year.value, 10);
    if (dayValue > 31) {
      day.nextElementSibling.innerText = valueError + day.name;
      day.nextElementSibling.classList.add('show');
      day.parentElement.classList.add('invalid');
      return false;
    }
    if (monthValue > 12) {
      month.nextElementSibling.innerText = valueError + month.name;
      month.nextElementSibling.classList.add('show');
      month.parentElement.classList.add('invalid');
      return false;
    }
    if (today.getFullYear() < yearValue) {
      year.nextElementSibling.innerText = presentTimeError;
      year.nextElementSibling.classList.add('show');
      year.parentElement.classList.add('invalid');
      return false;
    }

    if (
      (monthValue === 2 && yearValue % 4 === 0 && dayValue > 29)
      || (monthValue === 2 && yearValue % 4 !== 0 && dayValue > 28)) {
      day.nextElementSibling.innerText = valueError + day.name;
      day.nextElementSibling.classList.add('show');
      day.parentElement.classList.add('invalid');
      return false;
    }
    if (evenMonths.includes(monthValue) && dayValue > 30) {
      day.nextElementSibling.innerText = valueError + day.name;
      day.nextElementSibling.classList.add('show');
      day.parentElement.classList.add('invalid');
      return false;
    }
    if (!evenMonths.includes(monthValue) && dayValue > 31) {
      day.nextElementSibling.innerText = valueError + day.name;
      day.nextElementSibling.classList.add('show');
      day.parentElement.classList.add('invalid');
      return false;
    }
    if (yearValue === today.getFullYear() && monthValue > today.getMonth() + 1) {
      month.nextElementSibling.innerText = presentTimeError;
      month.nextElementSibling.classList.add('show');
      month.parentElement.classList.add('invalid');
      return false;
    }
    if (yearValue === today.getFullYear()
    && monthValue === today.getMonth() + 1
    && dayValue > today.getDate()) {
      day.nextElementSibling.innerText = presentTimeError;
      day.nextElementSibling.classList.add('show');
      day.parentElement.classList.add('invalid');
      return false;
    }
    return true;
  }
  /**
   * Validates form fields
   * @param {object} form - HTML form element
   * @returns {boolean} - true if the the form fields and
   * date are valid
   */
  function validate(form) {
    const { day, month, year } = form;
    const fields = [day, month, year];
    for (const field of fields) {
      if (!isValidField(field)) return false;
    }
    if (!isValidDate(day, month, year)) return false;
    return true;
  }

  /**
   * Restores default styling and content of error
   * marked fields and results section
   */
  function restoreDefault() {
    const resultElements = document.querySelectorAll('.res-item span:first-child');
    const errorElements = document.querySelectorAll('.show');
    const errorParentElements = document.querySelectorAll('.invalid');
    resultElements.forEach((element) => {
      element.innerText = '--';
    });
    errorElements.forEach((element) => {
      element.classList.remove('show');
    });
    errorParentElements.forEach((element) => {
      element.classList.remove('invalid');
    });
  }

  /**
   * Calculates number of days remaining till
   * the end of the month
   * @param {object} date - date object
   * @returns {number} - number of days
   * remaining till the end of the month
   */
  function getRemainDays(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const evenMonths = [4, 6, 9, 11];
    let remainDays;

    if (month === 2 && year % 4) remainDays = 29 - day;
    else if (month === 2 && !year % 4) remainDays = 28 - day;
    else if (evenMonths.includes(month)) remainDays = 30 - day;
    else remainDays = 31 - day;
    return remainDays;
  }

  /**
   * Calculates the age of a person
   * @param {object} event - submit event
   */
  function getAge(event) {
    event.preventDefault();
    const form = this;
    restoreDefault();
    if (!validate(form)) return;
    const yearsRes = document.getElementById('res-years');
    const monthsRes = document.getElementById('res-months');
    const daysRes = document.getElementById('res-days');
    const day = parseInt(form.day.value, 10);
    const month = parseInt(form.month.value, 10);
    const year = parseInt(form.year.value, 10);
    const dateOfBirth = new Date(year, month - 1, day);
    const today = new Date();
    let numberOfYears = today.getFullYear() - dateOfBirth.getFullYear();
    let numberOfMonths = (12 - dateOfBirth.getMonth()) + today.getMonth();
    let numberOfDays = today.getDate() - dateOfBirth.getDate();
    // Days not on the same months or on
    // same months but D.O.B not yet reached
    if (numberOfDays < 0 ){
      numberOfDays = getRemainDays(dateOfBirth) + today.getDate();
      numberOfMonths -= 1;
    }
    // Absolute days value if negative.
    // Necessary for days in the same month.
    numberOfDays = Math.abs(numberOfDays);
    // M.O. not yet reached
    if (numberOfMonths < 12 && numberOfYears > 0) numberOfYears -= 1;
    // Offset for months exceeding 12
    if (numberOfMonths >= 12) numberOfMonths -= 12;

    yearsRes.innerText = numberOfYears;
    monthsRes.innerText = numberOfMonths;
    daysRes.innerText = numberOfDays;
  }

  // EVENTS
  ageCalculatorForm.addEventListener('submit', getAge);
});
