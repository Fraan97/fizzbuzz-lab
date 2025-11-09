// Refer to Task 3 in your Instructions to complete this task
for (let i = 1; i <= 105; i++) {
  let concat = "";
  if(i % 3 === 0){
    concat += "Fizz"
  }
  if(i % 5 === 0){ //Igual que el anterior, pero para múltiplos de 5: si i es divisible por 5, se añade "Buzz" a conc. 
    concat += "Buzz"
  }
  console.log(concat || i);
  };
  //Usamos dos if separados (no else if), por eso si i es múltiplo de 3 y de 5 se ejecutan ambos y conc queda "FizzBuzz" (en ese orden)