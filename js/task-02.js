const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const items = ingredients.map(ingridient=>{
  const newItem = document.createElement('li');
  newItem.textContent = ingridient;
  newItem.classList.add('item');
  return newItem;
})

console.log(items);

const listEl = document.querySelector('#ingredients');
listEl.append(...items);
