/* Práctica de la materia de JavaScript impartida por el profesor Cesar Meza
Fecha de modificacion: 21 de febrero de 2024
Creado por: CSA*/


/*let persona={};
persona.hablar=function(linea){
    console.log("la persona dice `${linea}"`);
};*/

//I.Creando los libros
const _privado=new WeakMap();

class Libro {
 
    constructor(precio, titulo, autor) {
        const propiedades={
            _precio: precio,
            _titulo: titulo,
            _autor: autor
        }
        //const _privado=new WeakMap();
        _privado.set(this,propiedades)
    }
    //Establecer getter y setter de titulo
    get titulo() {
        return _private.get(this).propiedades["_titulo"];
    }
    set titulo(newTitulo) {
        return _privado.get(this).propiedades['_titulo'] = newTitulo;
    }
    //Establecer getter y setter de autor
    get autor() {
        return _privado.get(this).propiedades['_autor'];
    }
    set autor(newAutor) {
        return _privado.get(this).propiedades['_autor'] = newAutor;
    }
    //Establecer el getter del precio
    get precio() {
        const propiedades=_privado.get(this);
        return propiedades._precio;
    }
    obtenerTodosLosDatos() {
        const info = _privado.get(this);
        console.log(
          `Titulo: ${info._titulo}, Autor: ${info._autor}, Precio: ${info._precio}`
        );
      }
}
const libro1 = new Libro(20.99, "El nombre del viento", "Patrick Rothfuss");
console.log("Datos de libro1:");
libro1.obtenerTodosLosDatos();

class Comic extends Libro{
    //ilustradores=[];
    constructor(precio, titulo, autor,ilustradores){
    super(precio, titulo, autor);
    this.ilustradores = ilustradores;
    }
   agregarIlustrador(nuevosIlustradores){
        this.ilustradores.push(...nuevosIlustradores);
   } 
   obtenerTodosLosDatos() {
        super.obtenerTodosLosDatos();
        console.log(`Ilustradores: ${this.ilustradores}`);
    }
}
const comic1 = new Comic(15.99, "Spider-Man: Un Nuevo Día", "Dan Slott", [
    "John Romita Jr.",
    "Steve Ditko",
  ]);
  console.log("Datos de comic1:");
comic1.obtenerTodosLosDatos();

const libro=new Libro(40, "Naufrago", "Braulio")
libro.obtenerTodosLosDatos();

class CarritoCompras{
    constructor(){
        this.productos=[]
    }
    agregarProducto(cantidad,precio){
        this.productos.push(...Array(cantidad).fill(precio));   
    }
    mostrarProducto(){
        console.log("productos en carrito");
        this.productos.forEach((producto,index)=> {
            console.log(`producto No.${index+1}precio:${producto}`);
        });
    }
    calTotal(){
        return this.productos
            .map((precio) => precio)
            .reduce((ac, precio) => ac + precio, 0);
    }
    imprimiTickets(){
        console.log(`Total a pagar: $${this.calTotal()}`);
    }
}
const carrito=new CarritoCompras()

carrito.agregarProducto(1,comic1.precio);
carrito.agregarProducto(2,libro1.precio);
carrito.mostrarProducto();
carrito.imprimiTickets();
