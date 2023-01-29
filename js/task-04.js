/*
    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
*/


const btn = document.querySelectorAll('#counter button');
const counterValue = document.querySelector('#value');

const btnDecrement = btn[0];
const btnIncrement = btn[1];


btnDecrement.addEventListener('click', () => {
    counterValue.textContent --;
})

btnIncrement.addEventListener('click', () => {
    
    counterValue.textContent ++;
})
