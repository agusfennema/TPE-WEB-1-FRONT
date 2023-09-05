"use strict"

//declaramos las variables que van a generar los numeros al azar para el captcha y tambiden la suma de estas
let numero1 = Math.floor(Math.random()*(10-1)+1)
let numero2 = Math.floor(Math.random()*(10-1)+1);
let suma = numero1 + numero2;

//colocamos los valores generados en el span vacío previamente creado en el html
let span1 = document.getElementById("num1");
span1.innerHTML = numero1;

let span2 = document.getElementById("num2");
span2.innerHTML = numero2;
//en la funcion tomamos el valor ingresado por el usuario y lo comparamos al resultado de la suma.
function captcha(){
    let valorIngresadoCaptcha = document.getElementById("ingresarCaptcha").value;
    let respuesta = document.getElementById("respuestaCaptcha");
if(valorIngresadoCaptcha == suma){
    respuesta.innerHTML = "Captcha Correcto.";
    respuesta.classList.toggle('true');
    document.getElementById("enviar").disabled= false;
} else{
        respuesta.innerHTML = "Captcha incorrecto.";
        respuesta.classList.toggle('false');
    }
}
document.getElementById("validarCaptcha").addEventListener("click", captcha);