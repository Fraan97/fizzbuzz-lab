// Refer to Task 5 in your Instructions to complete this task
import promptSync from "prompt-sync";
const prompt = promptSync();
while (true) {
    let nro = parseInt(prompt("Para elegir el largo de la lista, ingrese un número del 1 al 105: "))
    if (isNaN(nro)) {                              //Validación: recoge los casos en que usuario ingrese algo distinto de un número
        console.log('¡Ingresa un número!');        //Entrega mensaje de error y vuelve al bucle (permite al usuario volver a intentar ingresar un número válido)
    } else if (nro > 105 || nro <= 0 ){            //Validación: recoge los casos en que usuario ingrese un número fuera del rango
    console.log('¡Ingresa un número válido! (entre 1 y 105)'); //Entrega mensaje de error y vuelve al bucle (permite al usuario volver a intentar ingresar un número válido)
    } else {                                        //Número válido ingresado
        for (let i = 1; i <= nro; i++) {            //Recorre el bucle, iniciando en 1 e incrementando de a 1, hasta llegar al número indicado por el usuario
            let conc = "";                          //Crea cadena de texto vacía a la que agregar palabras según se cumplan las condiciones
            if(i % 3 === 0){                        //Identifica múltiplos de 3
                conc += "Fizz"                      //Agrega un "Fizz" a la cadena de texto, en caso de ser múltiplo de 3
            }
            if(i % 5 === 0){                        //Identifica múltiplos de 5
                conc += "Buzz"                      //Agrega un "Buzz" a la cadena de texto, en caso de ser múltiplo de 5
            }
            if(i % 7 === 0){                        //Identifica múltiplos de 7
                conc += "Woof"                      //Agrega "Woof"a la cadena de texto, en caso de ser múltiplo de 7
            }
            console.log(conc || i);                 //Imprime la cadena de texto "Fizz" y/o "Buzz" y/o "Woof", según corresponda. En caso de que la cadena de texto permanezca vacía, imprime el número de iteración
            };
        break}                                      //Termina el bucle while, para no volver a pedir a usuario que indique un número
}
