let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maxNumber = 0;
let totalNumbers = 0;
let minNumber;
let oddNumbers = 0;
console.log("Exercicio 1 - Imprimir numeros do array: ")

for (let number of numbers) {
  console.log(number)
  sum+=number;

  if(number > maxNumber) {
    maxNumber = number;
  }
  if(totalNumbers === 0) {
    totalNumbers += 1;
    minNumber = number;
  } else {
    totalNumbers +=1;
  }
  if(number < minNumber) {
    minNumber = number;
  }

  if(number % 2 === 1) {
    oddNumbers++; 
  }
}

let avgSum = sum/numbers.length;

console.log("Exercicio 2 - Soma = " + sum);

console.log("Exercicio 3 - Media Aritmetica = " + avgSum);

if (avgSum > 20) {
  console.log("Exercicio 4 - Valor maior que 20");
} else {
  console.log("Exercicio 4 - Valor menor que 20");
}

console.log("Exercicio 5 - Maior valor = " + maxNumber);

if(oddNumbers === 0) {
  console.log("Exercicio 6 - Valores impares = Nenhum valor impar encontrado"); 
} else {
  console.log("Exercicio 6 - Valores impares = " + oddNumbers); 
}

console.log("Exercicio 7 - Menor valor = " + minNumber);
