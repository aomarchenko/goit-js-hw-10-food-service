window.addEventListener("load", onLoad);
function onLoad() {
      let storageValue = localStorage.getItem("theme")

body.classList.add(storageValue)


console.log("loaded")
}
const toggle = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
toggle.addEventListener("change", addClassOperation)
function addClassOperation(event) {
   body.classList.toggle('dark-theme');
   

}
console.log(body.classList.value)

toggle.addEventListener("change", changeStorageValue)
function changeStorageValue(){
    localStorage.setItem("theme", body.classList.value) 
    
}

