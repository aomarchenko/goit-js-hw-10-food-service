window.addEventListener("load", onLoad);
function onLoad(load) {
      let storageValue = localStorage.getItem("theme")
if(body.classList.value!==localStorage.getItem("theme"))
body.classList.add(storageValue)



}
const switcher = document.querySelector(".theme-switch__toggle")
const toggle = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
toggle.addEventListener("change", addClassOperation)
function addClassOperation(event) {
   body.classList.toggle('dark-theme');
   if(body.classList.value==='dark-theme'){
       
        

   }
   

}


toggle.addEventListener("change", changeStorageValue)
function changeStorageValue(){
    localStorage.setItem("theme", body.classList.value) 
    
}


window.addEventListener("load", isToggleChecked)

function isToggleChecked(){
    if(body.classList.value==='dark-theme')
    document.querySelector(".theme-switch__toggle").checked = true
}
console.log(document.querySelector(".theme-switch__toggle").checked)