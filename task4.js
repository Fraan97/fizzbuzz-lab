// Refer to Task 4 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {              //Bucle: empieza en 1 y se repite hasta llegar a 105, aumentando i de 1 en 1
    let conc = "";                           //Crea una cadena de texto vacía para cada número de la lista

    if (i % 3 === 0) {                       //Si el número actual es múltiplo de 3 (resto 0 al dividir por 3)
        conc += "Fizz";                      //Añade la palabra "Fizz" a la cadena conc
    }

    if (i % 5 === 0) {                       //Si el número actual es múltiplo de 5
        conc += "Buzz";                      //Añade la palabra "Buzz" a la cadena conc (se suma a lo que ya tenga)
    }

    if (i % 7 === 0) {                       //Si el número actual es múltiplo de 7
        conc += "Woof";                      //Añade la palabra "Woof" a la cadena conc
    }

    console.log(conc || i);                  //Imprime conc si tiene algún texto ("Fizz", "Buzz", "Woof" o combinaciones);
                                             //si conc está vacía, imprime el número i
};
