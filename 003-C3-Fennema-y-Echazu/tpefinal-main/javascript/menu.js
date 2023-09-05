"use strict"
//usamos el toggle, que lo que hace es mostrar una clase si está oculta, o ocultarla si esta expuesta
document.querySelector("#btn_menu").addEventListener("click", toggleMenu);

function toggleMenu(){
    document.querySelector(".navegador").classList.toggle("show");
}



