window.addEventListener('DOMContentLoaded', () => {
  // ELEMENTS
  const days = document.querySelectorAll('.days');
  const hours = document.querySelectorAll('.hours');
  const minutes = document.querySelectorAll('.minutes');
  const seconds = document.querySelectorAll('.seconds');

  // Time
  const DAYS_TO_SECONDS = 86400;
  const HOURS_TO_SECONDS = 3600;
  const MINUTES_TO_SECONDS = 60;
  const time = {
    days: parseInt(days[0].textContent, 10),
    hours: parseInt(hours[0].textContent, 10),
    minutes: parseInt(minutes[0].textContent, 10),
    seconds: parseInt(seconds[0].textContent, 10),
  };
  let timeInSeconds = (time.days * DAYS_TO_SECONDS)
    + (time.hours * HOURS_TO_SECONDS)
    + (time.minutes * MINUTES_TO_SECONDS)
    + time.seconds;

  // FUNCTIONS
  /**
   * Computes remaining time
   * @returns {Promise} - promise that resolves when after 1s
   */
  function getRemainingTime() {
    let tempTimeInSeconds;
    return new Promise(((resolve) => {
      setTimeout(() => {
        timeInSeconds -= 1;
        tempTimeInSeconds = timeInSeconds;

        time.days = Math.floor(tempTimeInSeconds / DAYS_TO_SECONDS);
        tempTimeInSeconds %= DAYS_TO_SECONDS;

        time.hours = Math.floor(tempTimeInSeconds / HOURS_TO_SECONDS);
        tempTimeInSeconds %= HOURS_TO_SECONDS;

        time.minutes = Math.floor(tempTimeInSeconds / MINUTES_TO_SECONDS);
        time.seconds = tempTimeInSeconds % MINUTES_TO_SECONDS;
        resolve();
      }, 1000);
    }));
  }

  /**
   * Updates countdown
   */
  async function updateCountDown() {
    while (timeInSeconds) {
      await getRemainingTime();
      days.forEach((element) => {
        element.textContent = time.days.toString().padStart(2, '0');
      });
      hours.forEach((element) => {
        element.textContent = time.hours.toString().padStart(2, '0');
      });
      minutes.forEach((element) => {
        element.textContent = time.minutes.toString().padStart(2, '0');
      });
      seconds.forEach((element) => {
        element.textContent = time.seconds.toString().padStart(2, '0');
      });
    }
  }
  updateCountDown();
});
