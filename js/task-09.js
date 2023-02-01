/*  
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

******************
ДВІЧІ ВИКЛИКАЮ РАНДОМ, І КОЛЬОРИ НЕ БУДУТЬ СПІВПАДАТИ
СТВОРИТИ ЗМІННУ І В НЕЇ ЗАПИСАТИ РАНДОМ,
ПОТІМ ДОДАВАТИ ЗМІННУ ПРИ ПЕРЕДАВАННІ ЗНАЧЕНЬ


*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const btnElement = document.querySelector('.change-color');

const colorElement = document.querySelector('span');

btnElement.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  colorElement.textContent = getRandomHexColor();
})