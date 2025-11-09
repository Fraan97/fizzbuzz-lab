// Refer to Task 6 in your Instructions to complete this task

const prompt = require('prompt-sync')();

let resultados = [];
let nro = parseInt(prompt("Ingrese nro del 1 al 105: "));

if (isNaN(nro) || nro <= 0 || nro > 105) {
  console.log('Eso no es un número válido!');
} else {
  for (let i = 1; i <= nro; i++) {
    let partes = []; // arreglo temporal para guardar las palabras

    if (i % 3 === 0) partes.push("Fizz");
    if (i % 5 === 0) partes.push("Buzz");
    if (i % 7 === 0) partes.push("Woof");

    // Si partes tiene algo, lo unimos. Si no, usamos el número.
    resultados.push(partes.join('') || i);
  }

  // Mostrar resultados
  console.log(`\n${resultados.join('-')}`);
  console.log(`\nTotal de elementos guardados en el arreglo: ${resultados.length}`);
}
