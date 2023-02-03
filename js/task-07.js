/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>


**************
БУДЕ СКАЧОК ПО РОЗМІРУ
ПРИВЯЗАТИ РОЗМІР ШРИФТА ДО БІГУНКА АБО З ІНТУП ОТРИМАТИ ДЕФОЛТНЕ ЗНАЧЕННЯ І ДОДАТИ У СПАН

*/

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = input.value + "px";

function handleRange(e) {
  text.style.fontSize = e.currentTarget.value + "px";
}

input.addEventListener('input', handleRange);
