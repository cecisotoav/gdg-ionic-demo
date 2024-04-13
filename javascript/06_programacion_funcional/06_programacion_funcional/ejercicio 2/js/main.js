const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)
const descripcionInput=document.getElementById("descripcion");
const caloriasInput=document.getElementById("calorias");
const carbohidratosInput=document.getElementById("carbohidratos");
const proteinaInput=document.getElementById("proteina");
let datos=[];

const validarInput=()=>{
    descripcionInput.value.trim() === "" ? descripcionInput.classList.add("is-invalid"): descripcionInput.classList.remove("is-invalid");
    caloriasInput.value === "" ? caloriasInput.classList.add("is-invalid"): caloriasInput.classList.remove("is-invalid");
    carbohidratosInput.value === "" ? carbohidratosInput.classList.add("is-invalid"): carbohidratosInput.classList.remove("is-invalid");
    proteinaInput.value === "" ? proteinaInput.classList.add("is-invalid")
    : proteinaInput.classList.remove("is-invalid");
   
}
    /*$(descripcion).val() ? '' : $(descripcion).addClass('is-invalid');
    $(calorias).val() ? '' : $(calorias).addClass('is-invalid');
    $(carbohidratos).val() ? '' : $(carbohidratos).addClass('is-invalid');
    $(proteina).val() ? '' : $(proteina).addClass('is-invalid');*/
