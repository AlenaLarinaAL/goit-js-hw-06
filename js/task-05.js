// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


// const onInputBtnClick = () => {

// };
inputEl.addEventListener("input", (event) => {
    outputEl.textContent = event.currentTarget.value;
});