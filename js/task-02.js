/* 
Напиши скрипт, який для кожного елемента масиву ingredients:

    Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    Додасть назву інгредієнта як його текстовий вміст.
    Додасть елементу клас item.
    Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

    - знайти id
    - перебрати масив інгредієнтів
    - створити li
    - назвати
    - створити порожній масив
    - запушити
    - додати
*/


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = document.querySelector('#ingredients');
console.log(element)

let elemArray = [];

// функція для створення елементів

ingredients.forEach(ingredient => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  items.className = 'item';
  elemArray.push(items);
  return items;
})

element.append(...elemArray);