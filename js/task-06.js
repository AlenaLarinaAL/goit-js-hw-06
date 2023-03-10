// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');

const onInput = (event) => {
    if (Number(input.dataset.length) !== event.currentTarget.value.length) {
        input.classList.add('invalid')
    } else {
        input.classList.add('valid')
    }
};

const onInputRemoveClassList =()=>{
    input.classList.remove('valid')
    input.classList.remove('invalid')
};
input.addEventListener('blur',onInput);
input.addEventListener('focus',onInputRemoveClassList);
