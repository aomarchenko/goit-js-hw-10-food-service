import menuTemplete from './templates/menu-template.hbs';
import menu from './menu.json';

window.addEventListener('load', onLoad);
function onLoad(load) {
  let storageValue = localStorage.getItem('theme');
  if (body.classList.value !== localStorage.getItem('theme')) body.classList.add(storageValue);
}
const switcher = document.querySelector('.theme-switch__toggle');
const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const markupContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuMarkup(menu);

toggle.addEventListener('change', addClassOperation);
function addClassOperation(event) {
  body.classList.toggle('dark-theme');
  //    if(body.classList.value==='dark-theme'){

  //    }
}

toggle.addEventListener('change', changeStorageValue);
function changeStorageValue() {
  localStorage.setItem('theme', body.classList.value);
}

window.addEventListener('load', isToggleChecked);

function isToggleChecked() {
  if (body.classList.value === 'dark-theme')
    document.querySelector('.theme-switch__toggle').checked = true;
}

console.log(menu);

function createMenuMarkup(menu) {
  return menu.map(menuTemplete).join('');
}
console.log(cardsMarkup);
console.log(markupContainer);
markupContainer.insertAdjacentHTML('beforeend', cardsMarkup);
