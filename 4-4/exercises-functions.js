function verificaPalindrome(word) {
  let letters = word.split("");
  let size = letters.length;
  let palindrome = false;

  for(let letterIndex in letters) {
    if(letters[letterIndex] === letters[size - letterIndex - 1]) {
      palindrome = true;
    } else {
      return false;
    }
  }
  return palindrome;
}

function indexOfHighestValue(arr) {
  let highestValue = Math.max(...arr);
  return arr.indexOf(highestValue);
}

function indexOfLowestValue(arr) {
  let highestValue = Math.min(...arr);
  return arr.indexOf(highestValue);
}

function longestString(arr) {
  let size = [];
  for (let i in arr) {
    size[i] = arr[i].length;
  }
  let indexName = size.indexOf(Math.max(...size));
  return arr[indexName];
}

function mostOcorrence(arr) {
  let countNumber = 0;
  let countRepeated = 0;
  let indexNumber;
  
  for(let index_of_number in arr) {
    let number = arr[index_of_number];
    for (let comparing_index in arr) {
      if (number === arr[comparing_index]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
      indexNumber = index_of_number
    }
    countNumber = 0;
  }

  return arr[indexNumber];

}

function sumArray(number) {
  let sum = 0;
  
  for (let i = 1; i <= number; i += 1) {
    sum += i
  }
  return sum;
}

let array = [2, 3, 6, 7, 10, 1];
let array2 = [2, 4, 6, 7, 10, 0, -3];
let array3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let array4 = [2, 3, 2, 5, 8, 2, 3];
let N = 6;

console.log("Exercicio 1:")
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

console.log("Exercicio 2:")
console.log(array + " -> index of highest value: " + indexOfHighestValue(array));

console.log("Exercicio 3:")
console.log(array2 + " -> index of lowest value: " + indexOfLowestValue(array2));

console.log("Exercicio 4:")
console.log(array3 + " -> longest name: " + longestString(array3));

console.log("Exercicio 5:")
console.log(array4 + " -> most ocorrance: " + mostOcorrence(array4));

console.log("Exercicio 6:")
console.log("N = " + N + " -> most ocorrance: " + sumArray(N));
