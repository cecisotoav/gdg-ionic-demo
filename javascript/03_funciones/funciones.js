/* Estos son ejercicios del tema Funciones del curso JavaScript impartida por el Profesor Jesus Cruz Cruz.
Fecha de modificacion: 8 de Febrero.
Creado: CSA*/


/*function numerodecaracteres(string) {
    return string.lenght;
}

var string = "Hola";

console.log(`Tu string` string `tiene:` (numerodecaracteres)`caracteres`);*/


function countCharacters(input){
    let len=input.lenght;
    if (!input){
      return console.warn("No ingresaste una cadena.")
    } else {
      return console.log(`La cadena ${input} tiene ${len} caracteres.`);
    }
  }
  
  counCh();
  countCh("abcd");


  const contarCaracteres = input => !input ? console.warn("No ingresaste una cadena") : console.log(`La cadena ${input} tiene ${input.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola");