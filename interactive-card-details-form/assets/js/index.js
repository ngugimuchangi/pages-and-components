window.addEventListener('DOMContentLoaded', () => {
  // ELEMENTS
  // Form inputs
  const cardHolderInput = document.getElementById('cardholder');
  const cardNumberInput = document.getElementById('card-number');
  const expMonthInput = document.getElementById('exp-month');
  const expYearInput = document.getElementById('exp-year');
  const cvcInput = document.getElementById('cvc');
  const continueButton = document.getElementById('continue');

  // Card details
  const cardHolder = document.getElementById('card-front-cardholder');
  const cardNumber = document.getElementById('card-front-number');
  const expMonth = document.getElementById('card-front-exp-month');
  const expYear = document.getElementById('card-front-exp-year');
  const cvc = document.getElementById('card-back-cvc');

  // FUNCTIONS
  /**
   * Autofill card on load if input fields have values
   */
  (() => {
    if (cardHolderInput.value) cardHolder.innerText = cardHolderInput.value.toUpperCase();
    if (cardNumberInput.value) cardNumber.innerText = cardNumberInput.value;
    if (expMonthInput.value) expMonth.innerText = expMonthInput.value;
    if (expYearInput.value) expYear.innerText = expYearInput.value;
    if (cvcInput.value) cvc.innerText = cvcInput.value;
  })();

  /**
   * Toggle form visibility
   * @param {Event} event - click event
   */
  function toggleForm(event) {
    const formMainSection = document.getElementById('main-form-section');
    const completeSection = document.getElementById('complete-section');
    if (event.target.id === 'continue') {
      cardHolder.innerText = cardHolder.attributes.default.value;
      cardNumber.innerText = cardNumber.attributes.default.value;
      expMonth.innerText = expMonth.attributes.default.value;
      expYear.innerText = expYear.attributes.default.value;
      cvc.innerText = cvc.attributes.default.value;
    }
    formMainSection.classList.toggle('hide');
    completeSection.classList.toggle('hide');
  }

  /**
   * Fill card details using user input
   * @param {HTMLInputElement} input - input field
   * @param {HTMLElement} detail - card section to fill
   * @param {string} key - character
   * @param {number} max - max number of characters for the field
   */
  function fillCard(input, detail, key, max) {
    const { name } = input;
    let { value } = input;
    const isAlphaNumeric = /^(\w| )$/;

    if (isAlphaNumeric.test(key) && value.length !== max) {
      if (
        name === 'card-number'
        && !(value.replace(/\s/g, '').length % 4)
        && value.length > 1
        && value.length !== max
      ) input.value += ` ${key}`;
      else input.value += key;
      value = input.value;
    }
    if (key === 'Backspace') {
      input.value = input.value.slice(0, input.value.length - 1);
      value = input.value;
    }
    if (!value) detail.innerHTML = detail.attributes.default.value;
    else if (name === 'exp-month') detail.innerText = value.padStart(2, '0');
    else detail.innerText = value.toUpperCase();
  }

  /**
   * Retrieve alphanumeric characters from keydown events
   * @param {Event} event - keydown event
   * @returns {void}
   */
  function getKeyEvent(event) {
    // Max field lengths
    const MAX_CARDHOLDER_LENGTH = 25;
    const MAX_CARD_NUMBER_LENGTH = 19;
    const MAX_DATE_LENGTH = 2;
    const MAX_CVC_LENGTH = 3;

    const { name } = this;
    const { key } = event;
    const isAlphaNumeric = /^(\w| )$/;

    if (!isAlphaNumeric.test(key) && key !== 'Backspace') return;
    event.preventDefault();
    switch (name) {
      case 'cardholder':
        fillCard(this, cardHolder, key, MAX_CARDHOLDER_LENGTH);
        break;
      case 'card-number':
        fillCard(this, cardNumber, key, MAX_CARD_NUMBER_LENGTH);
        break;
      case 'exp-month':
        fillCard(this, expMonth, key, MAX_DATE_LENGTH);
        break;
      case 'exp-year':
        fillCard(this, expYear, key, MAX_DATE_LENGTH);
        break;
      case 'cvc':
        fillCard(this, cvc, key, MAX_CVC_LENGTH);
        break;
      default:
        break;
    }
  }

  // EVENTS
  cardHolderInput.addEventListener('keydown', getKeyEvent);
  cardNumberInput.addEventListener('keydown', getKeyEvent);
  expMonthInput.addEventListener('keydown', getKeyEvent);
  expYearInput.addEventListener('keydown', getKeyEvent);
  cvcInput.addEventListener('keydown', getKeyEvent);
  continueButton.addEventListener('click', toggleForm);

  // FORM VALIDATION
  const validate = new window.JustValidate(
    document.querySelector('form'),
    {
      errorFieldCssClass: 'invalid',
    },
  );
  const blankFieldError = 'Can\'t be blank';
  const numberTypeError = 'Wrong format, numbers only';
  const invalidYearError = 'Two last digits required';
  const invalidCardError = 'Card number must be 16 digits';
  const invalidCvcError = 'CVC must be 3 digits';
  const cardExpiredError = 'Enter a valid expiration date';
  const today = new Date();

  validate
    .addField(
      '#cardholder',
      [
        {
          rule: 'required',
          errorMessage: blankFieldError,
        },
      ],
      { errorsContainer: '.cardholder-error-container' },
    )
    .addField(
      '#card-number',
      [
        {
          rule: 'required',
          errorMessage: blankFieldError,
        },
        {
          rule: 'isDigit',
          validator: (value) => () => new Promise((resolve) => {
            const isDigit = /^\d+$/;
            value = value.replace(/\s/g, '');
            resolve(!!isDigit.test(value));
          }),
          errorMessage: numberTypeError,
        },
        {
          rule: 'minLength',
          value: 19,
          errorMessage: invalidCardError,
        },
      ],
      { errorsContainer: '.card-number-error-container' },
    )
    .addField(
      '#exp-month',
      [
        {
          rule: 'required',
          errorMessage: blankFieldError,
        },
        {
          rule: 'integer',
          errorMessage: numberTypeError,
        },
        {
          rule: 'minNumber',
          value: today.getMonth() + 1,
          errorMessage: cardExpiredError,
        },
      ],
      { errorsContainer: '.exp-date-error-container' },
    )
    .addField(
      '#exp-year',
      [
        {
          rule: 'required',
          errorMessage: blankFieldError,
        },
        {
          rule: 'integer',
          errorMessage: numberTypeError,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: invalidYearError,
        },
        {
          rule: 'minNumber',
          value: today.getFullYear() - 2000,
          errorMessage: cardExpiredError,
        },
      ],
      { errorsContainer: '.exp-date-error-container' },
    )
    .addField(
      '#cvc',
      [
        {
          rule: 'required',
          errorMessage: blankFieldError,
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: invalidCvcError,
        },
        {
          rule: 'integer',
          errorMessage: numberTypeError,
        }],
      { errorsContainer: '.cvc-error-container' },
    )
    .onSuccess((event) => {
      toggleForm(event);
    });
});
