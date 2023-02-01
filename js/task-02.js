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



***************
ЗМІНИТИ:

ВИКОРИСТАТИ MAP


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


let elemArray = ingredients.map(ingredient => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  items.className = 'item';
  return items;
})


element.append(...elemArray);