const toggle = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
toggle.addEventListener("change", addClassOperation)
function addClassOperation(event) {
   body.classList.toggle('dark-theme');
   if(body.classList.value === 'dark-theme'){
       localStorage.setItem("theme", "dark-theme")
   console.log("темная тема")}
   else (console.log("светлая тема")
   )
}
const storageValue = localStorage.getItem("theme")
console.log(storageValue)
// function setTheme (){

// }