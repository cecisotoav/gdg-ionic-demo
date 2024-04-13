/*Estos son ejercicios del tema Control de Flujo del curso Javascript impartida por Jesus Cruz Cruz
Fecha de modificacion: 5 de febrero
Creado: CSA*/


/* 
const hora = 13;
let saludo;

if (hora < 12) {
    saludo = "Buenos días";
}

if (hora < 20) {
    saludo = "Buenas tardes";
}

if (hora <= 20) {
    saludo = "Buenos noches";
}
console.log(saludo);
*/

const hora = 13;
let saludo;

if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 20); {
    saludo = "Buenas tardes";
} else (hora <= 20); {
    saludo = "Buenas noches";
}

console.log(saludo);

switch (dia) {
    case 1:
        text = "Domingo";
        break
    case 2:
        text = "Lunes";
        break
    case 3:
        text = "Martes";
        break
    case 4:
        text = "Miércoles";
        break
    case 5:
        text = "Jueves";
        break
    case 6:
        text = "Viernes";
        break
    case 7:
        text = "Sábado";
        break
    default:
        text = "Error";
}
console.log(text);


const speed = 120;
if (speed >100){
console.log("Vas muy rápido");
} else {
    console.log ("Bien, vas debajo del límite");
}

const velocidad = 120;
console.mensaje = velocidad <100 ? "Vas muy rápido" : "Bien, vas debajo del límite";
console.log (mensaje)