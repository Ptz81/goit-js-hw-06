/*
Напиши скрипт, який під час набору тексту в інпуті input #name-input (подія input), підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

*******
ЯКЩО ПОРОЖНІЙ РЯДОК МАЄ БУТИ ПОРОЖНЬО
МАЄ ЗЯВЛЯТИСЬ АНОНІМ
TRiM - ПРИБИРАЄ ЗАЙВІ ПРОБІЛИ
ЯКЩО ЗАПОВНЕНО РЯДОК ПРОБІЛАМИ, ТО МИ ПОВЕРТАЄМО АНОНІМ


*/


const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
  nameOutput.textContent = e.target.value;
if (e.target.value === ''||e.target.value === ' ') {
    nameOutput.textContent = 'Anonymous';
} 
})