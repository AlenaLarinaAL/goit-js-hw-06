// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = body.querySelector('.color');
const btnChangeClr = body.querySelector('.change-color');

const onBtnChangeClr = () => {
  const bgClr = getRandomHexColor();
  body.style.backgroundColor = bgClr;
  span.textContent = bgClr;
}

btnChangeClr.addEventListener('click', onBtnChangeClr);