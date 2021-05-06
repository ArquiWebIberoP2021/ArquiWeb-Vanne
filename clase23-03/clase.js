//filtrar un arreglo.
let arreglo = [ 'Holaa', 0, '', undefined, ':)', null, 5, false, NaN];
let filtrado = arreglo.filter(Boolean);
console.log('arreglo sin filtrar: ' + arreglo);
console.log('arreglo Filtradp: ' + filtrado);

// find - devuelve el primer valor que cumpla
//la funcion 
 let find = arreglo.find(buscar => buscar > 0);
console.log('Encontrar numero: '+ find );

//reduce - reduce todo lo que hay en una array 
// en un único valor. 
let alumnos = ['Bernardo','Mauricio','Vanne', 'Diana', 'Oscar','Bernardo', 'Alan', 'Vanne', 'Diego','Bernardo'];
const cantidadNpmbres = alumnos.reduce((contadorNombre, nombre) =>{
    contadorNombre[nombre] = (contadorNombre[nombre] || 0 ) +1;
    return contadorNombre;
}, {});

console.log(cantidadNpmbres); 
