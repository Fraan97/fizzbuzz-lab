const prompt = require('prompt-sync')();
// Refer to Task 5 in your Instructions to complete this task
function primo(numero) { //funcion que verifica si es primo, true o false
    if (numero <= 1) return false; //verifica que no sea 1 ni menor, ya que no puede ser primo si eso ocurre
    if (numero === 2) return true; // verifica si es 2, ya que este es nro primo, y así podemos descargarlo de el for que usaremos ams adelante
    if (numero % 2 === 0) return false; // verificamos que no sea par, ya que el 2, es el unico numero par primo
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) { //ahora que solo debemos verificar impares, y verificando que el num tiene un divisor mas pequeño que su raiz ya podemos descartar que sea primo
        if (numero % i === 0) return false;
    }
    
    return true;
}
let resultados = [];
let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang","Guido","Seba","Carmen"];

let nroLim = parseInt(prompt("Ingrese nro del 1 al 105: "))
let contPrim = 0;//con este hago un conteo de primos solo para despues emparejar con la lista de buzzWords


if (isNaN(nroLim)) { //comprueba que sea un numero, NaN es el resultado que me daba al intentar convertir un caracter no numerico a numero con parseInt
    console.log('Eso no es un numero!');
} else if (nroLim > 105 || nroLim <= 0 ){ //revisa que no sea menor que 0 o mayor de 105
  console.log('Eso no es un numero valido!');
} else {
      for (let i = 1; i <= nroLim; i++) {//recorro todos los numeros hasta el nro ingresado
        if(contPrim>=buzzWords.length){//con esta funcion compruebo que el contador de nros primos nunca sobrepase el total de buzzWords
          contPrim = 0; 
        }
        if(primo(i)){
          resultados.push(buzzWords[contPrim]) //hago un push de la buzzWord en la posicion del contador de primos
          contPrim +=1;
          
        } else{
          resultados.push(i)// de no ser primo hago un push del nro
        }
 
    };

}
console.log(resultados.join(`-`));
console.log(`Total de elementos guardados en el arreglo: `+resultados.length);