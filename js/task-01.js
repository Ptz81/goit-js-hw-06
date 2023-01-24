// 1 знайти елементи на сторінці 
// Порахує кількість li.item.
// виведе в консоль 
// Для кожного элемента li.item у списку ul#categories, знайде текст заголовку елемента (тегу <h2>)
// виведе в консоль текст заголовку елемента (тегу <h2>)
// виведе в консоль кількість елементів в категорії (усіх <li>, вкладених в нього)
/*
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const category = document.querySelector('#categories');
const categoryQuantity = category.children;
console.log(`Number of categories: ${categoryQuantity.length}`);


const titles = document.querySelectorAll('.item > h2')
console.log(titles);


