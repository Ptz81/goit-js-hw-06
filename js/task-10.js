/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

    Розміри найпершого <div> - 30px на 30px.
    Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

*/
const btn = document.querySelectorAll('button');
const btnCreate = btn[0];
const btnDestroy = btn[1];
const boxElement = document.querySelector('#boxes');
const inputElement = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  const boxArray = [];

  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    boxArray.push(box);
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.background = getRandomHexColor()
  }
  
}

btnCreate.addEventListener('click', () => {
  let boxAdd = createBoxes(inputElement.value);
  return boxElement.append(...boxAdd);
})


const boxDestroy = () => {
  boxElement.innerHTML = '';
}

btnDestroy.addEventListener('click', ()=>{
  boxDestroy.apply();
})