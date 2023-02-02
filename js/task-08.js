/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

    Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    Під час відправлення форми сторінка не повинна перезавантажуватися.
    Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
    Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
    а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
    Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const formElement = document.querySelector('.login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

formElement.addEventListener('submit', sendForm);

    function sendForm(event) {
        event.preventDefault();
        const {
            elements: { email, password }
        } = event.currentTarget

        if (email.value === ''||password.value === ''){
            alert('Warning! Check the fields! Fill in the form');
        } else {
           const user = {
            userEmail: email.value,
            userPassword: password.value,
        }
    
    console.log(user)
        }
        
       
        
        event.currentTarget.reset();
}