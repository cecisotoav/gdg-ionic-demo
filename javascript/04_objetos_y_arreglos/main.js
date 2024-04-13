/* Este ejercicio corresponde a la actividad guiada con tema objetos y arreglos del curso de Javascript impartida por el profesor Cesar Meza
Fecha de modificación: 15 de Febrero de 2024
Creado por: CSA */


//declaracion,inicializacion,definicion de un JSON
const Juego = {
    opciones: { 0: `🤛🏽`, 1: `✋🏽`, 2: `✌🏽` },
    nombreJugadores: { jugador1: "Jugador1", jugador2: "Computadora" },
    scores: { puntosJ1: 0, puntosJ2: 0 },
}

//definion de variable
let tiradaJugador1;
let tiradaJugador2;
let puntosJ1 = 0;
let puntosJ2 = 0;

//imprimir a consola
console.log("Opciones:", Juego.opciones);
console.log("Nombre de jugadores: ", Juego.nombreJugadores);
console.log("Scores: ", Juego.scores);

//declaracion de un arrow function (funcion flecha)
const pedirNuevoNombre = () => {
    return prompt("Ingresa tu nombre");
};

const cambiarNombre = (pedirNuevoNombre) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (regex.test(pedirNuevoNombre)) {
        console.log("Bienvenid@ " + pedirNuevoNombre + " !")
    } else {
        console.log("Mejor te llamaré " + Juego.nombreJugadores.jugador1)
    };
};

//invocacion, ejecucion, llamada de funcion -nombre de la funcion (argumentos o parametros puede no recibir-)


const generarNumeroAleatorio = () => {
    const aleatorio = Math.floor(Math.random() * 3);
    return "" + aleatorio;
}

const imprimirManoAleatoria = () => {
    const partida = generarNumeroAleatorio();
    return Juego.opciones[partida];
}

const imprimirElResultado = () => {
    tiradaJugador1 = imprimirManoAleatoria();
    tiradaJugador2 = imprimirManoAleatoria();
    console.log(tiradaJugador1);
    console.log(tiradaJugador2);

}

//imprimirElResultado();

const evalua = (tiradaJugador1, tiradaJugador2) => {
    let gana = 0;
    if (tiradaJugador1 == tiradaJugador2) {
        console.log(tiradaJugador1 + "VS" + tiradaJugador2 + "empatan");
    } else if (tiradaJugador1 == `✌🏽` && tiradaJugador2 == `✋🏽`) {
        console.log(tiradaJugador1 + "gana a " + tiradaJugador2);
        puntosJ1 = puntosJ1 + 1;
        gana = 1;
    } else if (tiradaJugador1 == `✋🏽` && tiradaJugador2 == `🤛🏽`) {
        console.log(tiradaJugador1 + "gana a " + tiradaJugador2);
        puntosJ1 = puntosJ1 + 1;
        gana = 1;
    } else if (tiradaJugador1 == `🤛🏽` && tiradaJugador2 == `✌🏽`) {
        console.log(tiradaJugador1 + "gana a " + tiradaJugador2);
        puntosJ1 = puntosJ1 + 1;
        gana = 1;
    } else if (tiradaJugador2 == `🤛🏽` && tiradaJugador1 == `✌🏽`) {
        console.log(tiradaJugador2 + "gana a " + tiradaJugador1);
        puntosJ2 = puntosJ2 + 1;
        gana = 2;
    } else if (tiradaJugador2 == `✌🏽` && tiradaJugador1 == `✋🏽`) {
        console.log(tiradaJugador2 + "gana a " + tiradaJugador1);
        puntosJ2 = puntosJ2 + 1;
        gana = 2;
    } else if (tiradaJugador2 == `✋🏽` && tiradaJugador1 == `🤛🏽`) {
        console.log(tiradaJugador2 + "gana a " + tiradaJugador1);
        puntosJ2 = puntosJ2 + 1;
        gana = 2;
    } 
}  



//definir una arrow function
const main = () => {
    let juegosGanados = 1;
    const jugador1 = pedirNuevoNombre();
    const jugador2 = ("Computadora");
    while (juegosGanados < 3) {
        let jugador1Hand = imprimirManoAleatoria();
        let jugador2Hand = imprimirManoAleatoria();
        console.log(jugador1 + jugador1Hand)
        console.log(jugador2 + jugador2Hand)
        evalua(jugador1Hand, jugador2Hand);
        juegosGanados++
    }
}


main();



