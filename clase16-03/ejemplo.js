let alumnos = ['Bernardo ','Mauricio '];
let masintegrantes = ['Vaneesa ', 'Diana '];
console.log('Los primeros alumnos: '+alumnos);

let nuevosalumnos = Array.prototype.push.apply(alumnos, masintegrantes);
console. log('Agregamos dos alumnos mas (push): '+ alumnos);

console.log('Agregamos al Prof'+alumnos.unshift('Toño ')+' (unshift)');
console.log(alumnos);

console.log('Eliminamos a '+ alumnos.pop() +' (pop)');

console.log(alumnos);

console.log('Eliminamos al Prof '+ alumnos.shift() + ' (shift)');

console.log(alumnos); 

console.log('los alumnos que quedan: ' + alumnos);

console.log('Agregamos a Alan (splice)'+ alumnos.splice(0,0,'Alan '));

console.log('uso de reverse: ' + alumnos.reverse());

console.log('uso de sort: '+ alumnos.sort());
