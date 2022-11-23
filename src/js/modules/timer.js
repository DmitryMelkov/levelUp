export function timer() {
  const sale = new Date('Dec 15 2022 00:00:00');

  const daysVal = document.querySelector('.form__timer-days .form__timer-val');
  const hoursVal = document.querySelector('.form__timer-hours .form__timer-val');
  const minutesVal = document.querySelector('.form__timer-minutes .form__timer-val');
  const secondsVal = document.querySelector('.form__timer-seconds .form__timer-val');

  const daysText = document.querySelector('.form__timer-days .form__timer-text');
  const hoursText = document.querySelector('.form__timer-hours .form__timer-text');
  const minutesText = document.querySelector('.form__timer-minutes .form__timer-text');
  const secondsText = document.querySelector('.form__timer-seconds .form__timer-text');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = sale - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    daysText.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
    hoursText.textContent = declOfNum(days, ['Час', 'Часа', 'Часов']);
    minutesText.textContent = declOfNum(days, ['Минута', 'Минуты', 'Минут']);
    secondsText.textContent = declOfNum(days, ['Секунда', 'Секунды', 'Секунд']);
  };

  timeCount();
  setInterval(timeCount, 1000);
}
