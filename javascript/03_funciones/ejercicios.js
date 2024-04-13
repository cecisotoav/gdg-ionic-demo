/* Este ejercicio corresponde a la actividad guiada numero tres, del curso de Javascript impartida por el prfesor Jesus Cruz Cruz
Fecha de modificación: 9 de Febrero de 2024
Creado por: CSA */

/*function holamundo(nombre, nombre2) {
    return `Hola mundo somos: ${nombre} y ${nombre2}`;
}
console.log(holamundo("Renato", "Amaia"));

const holamundoarrow = (nombre, nombre2)=>{
    return `Hola mundo somos: ${nombre} y ${nombre2}`; 
}
console.log(holamundoarrow ("Cecilia","Renata"));
*/

const pelicula = (movie) => {
    return `El nombre de la película es: ${movie}`;
}
console.log(pelicula("Avengers"));

/*const sumame = (num1, num2) => {
    let suma = num1 + num2;
    console.log(suma)
}
sumame(2, 4);*/

const sumameCallback = (num1, num2, callBack1, callBack2) => {
    let suma = num1 + num2;
    console.log(`La suma es: `, callBack1(suma));
    console.log(`La suma por dos es: `, callBack2(suma));
}
const sumaPorDos =(num) => {
    return num * 2;
}

const sumaYMuestra =(num) => {
    return num;
}
sumameCallback(2,4,sumaYMuestra,sumaPorDos);

/*const crearCita = (cita, callback) => {
    var miCita = "Como yo siempre digo, " + cita;
    callback(miCita);
}
const logCita=(cita)=> {
    console.log(cita);
}
crearCita("come tus vegetales!", logCita);*/
