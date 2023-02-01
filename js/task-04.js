/*
    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.

**********

ДОСТУКАТИСЬ ДО КНОПОК ЧЕРЕЗ ДАТА АТРИБУТ
СТВОРИТИ ЗМІННУ, ДЕ ЗМІНЮВАТИ ЗНАЧЕННЯ ПРИ КЛІК І 2 ФУНКЦІЇ НА ЗБІЛЬШЕННЯ ТА ЗМЕНШЕННЯ


*/



const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let value = 0;

btnDecrement.addEventListener('click', () => {
    value--;
    counterValue.textContent = value;
})

btnIncrement.addEventListener('click', () => {
    value++;
    counterValue.textContent = value;
})
