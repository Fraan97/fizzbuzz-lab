// Refer to Task 2 in your Instructions to complete this task
for (let i = 1; i <= 105; i++) {
  let concat = ""; // Declara una variable concat vacía para cada número.
  if(i% 3 === 0){ //Si el número es múltiplo de 3 (i % 3 === 0), le agrega "Fizz".
    concat += "Fizz"
  }
  console.log(concat || i); //Significa que el programa muestra "concat" si contiene algo (por ejemplo "Fizz"), y si está vacía, muestra el número actual (i).
  };
 // || sirve para decir: “Muestra el primer valor que no esté vacío o que sea verdadero.”