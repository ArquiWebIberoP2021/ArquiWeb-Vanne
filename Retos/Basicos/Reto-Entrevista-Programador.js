
//Multiplicar 2 numeros sin usar operador.
let num1= 9;
let num2=9;
let lala=0;

for (let i=0;i<num2;i++)
{
let respuesta= lala + num1;
lala=respuesta;

}
console.log('multiplicacion sin operador: '+lala);

//Obtener el numero mayor de un arreglo
let numeros = [1,45,32,8,7,9];
console.log("numero mayor de un arreglo: " + Math.max(...numeros));

//filtrar un arreglo.
let arreglo = [ 'Holaa', 0, '', undefined, ':)', null, 5, false, NaN];
let filtrado = arreglo.filter(Boolean);
console.log('arreglo sin filtrar: ' + arreglo);
console.log('arreglo Filtradp: ' + filtrado);

//funcion que aplane los arreglos.
let lala2 = [[1, 2], [[3,4]], [1, []]];
let aplanado = lala2.flat();
console.log('aplanado: ', aplanado); 

//saber cantidad de veces que se repite una palabra
let palabras = ['Hola','Hola', 'vanne', 'Diana', 'lala'];
let repetidos = {};
palabras.forEach(function(pal){
  repetidos[pal] = (repetidos[pal] || 0) + 1;
});
console.log(repetidos);

//saber si es palindromo 
let palindromo = ['simis']
let alreves = palindromo.reverse();

if (palindromo == alreves){
    console.log('es palindromo ' + palindromo);
}
else {
    console.log('NO es palindromo ' + palindromo);
}
