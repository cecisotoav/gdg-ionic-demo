/* Práctica de la materia JavaScript impartida por el profesor Cesar Meza, tema Programacion Funcional
Fecha de modificación: 21 de febrero 2024
Creado por: Cecilia Soto */



// Programaciópn Orientada a Objetos

function intersection(a,b){
    var resultado=[];

    for(var i = 0; i <a.length; i++) { 
        for (var j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
                resultado.push(a[i]);
                break;
            }
        }
    }
    return resultado.sort();
}

// Sintaxis moderna y en PL

const interseccion =(a,b) => a.filter (value => b.indexOf (value) >-1).sort();

//Funciones de JavaScript

    // Primera Clase

const hola=()=>4;
    console.log("Hola Mundo"); //Hola Mundo

    //Callback

["A","B","C"].forEach((e,i)=>
    console.log("i=" ,i,"list=",e));

    //Funciones de orden superior

const arreglo=[1,2,3];

const mapeo=arreglo.map(function(elemento){
    return elemento+1;
}); //mapeo es [2,3,4]

const reducido=arreglo.reduce(function(element1,element2){
    return element1+element2;
});//reducido es 6

const filtrado=arreglo.filter(function(elemento){
    return elemento !== 1;
});//filtrado is[2,3]

console.log(mapeo);
console.log(reducido);
console.log(filtrado);

    //Asincronicas

const suma=(x,y)=>console.log(x+y);
setTimeout(()=>suma(2,2),1000);
suma(4,4);    