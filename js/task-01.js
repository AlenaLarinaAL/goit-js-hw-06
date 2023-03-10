// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const idNumber = document.querySelector('#categories ');
console.log(idNumber);
const liItem = idNumber.querySelectorAll('.item');
console.log(liItem);
console.log('Number of categories:', liItem.length);

const items = liItem.forEach(element => {
    const names = element.firstElementChild.textContent;
    console.log('Category:', names);
    const numbers = element.lastElementChild.children.length;
    console.log('Elements:', numbers);
});





