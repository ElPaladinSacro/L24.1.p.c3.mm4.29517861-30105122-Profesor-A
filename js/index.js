/*En la Universidad se contratan los profesores por categorías 
(1=Instructor, 2=Asistente,3=Agregado, 4=Asociado, 5=Titular), 
también se conoce de cada profesor: su cédula, nombre y sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada. */

let profesores = [
    { categ: 1, cedula: 3423564, nombre: "Pedro", sexo: "M" },
    { categ: 4, cedula: 23876784, nombre: "Ciceron", sexo: "M" },
    { categ: 5, cedula: 22542784, nombre: "Ana", sexo: "F" },
    { categ: 2, cedula: 9442784, nombre: "Linda", sexo: "F" },
    { categ: 1, cedula: 12546664, nombre: "Carmen", sexo: "F" },
    { categ: 3, cedula: 10542789, nombre: "Carlos", sexo: "M" },
    { categ: 3, cedula: 9545784, nombre: "Alonzo", sexo: "M" },
    { categ: 4, cedula: 6552784, nombre: "Zuleima", sexo: "F" },
    { categ: 4, cedula: 80542784, nombre: "Yoana", sexo: "F" },
    { categ: 5, cedula: 17556784, nombre: "Arquimedes", sexo: "M" },
    { categ: 1, cedula: 2543384, nombre: "juarez", sexo: "M" },
];

let profesoresCategoria = (profesores, categ) => {
    let profesoresCatFiltrados = [];
    profesores.forEach(profesor => {
        if(profesor.categ === categ){
            profesoresCatFiltrados.push(profesor);
        }
    });
    return profesoresCatFiltrados;
}

let salida = document.getElementById('salida');
let profesores1 = profesoresCategoria(profesores, 1);
salida.innerHTML += '<h2>Profesores categoria 1: <br></h2>'
profesores1.forEach(profesor => {
    salida.innerHTML += `Categoria: ${profesor.categ} <br> Cedula: ${profesor.cedula} <br> Nombre: ${profesor.nombre} <br> Sexo: ${profesor.sexo} <br> <br>`
})