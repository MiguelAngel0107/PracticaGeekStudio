import {Ver} from "./Firebase.js"
const boton = document.getElementById("boton");

window.addEventListener("DOMContentLoaded", ()=>{
    Ver();

})

boton.addEventListener("click",async()=>{
    const Dato =  await getDate();
    console.log(Dato)
})