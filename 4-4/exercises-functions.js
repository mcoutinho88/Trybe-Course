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

let array = [2, 3, 6, 7, 10, 1];
let array2 = [2, 4, 6, 7, 10, 0, -3];
let array3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log("Exercicio 1:")
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

console.log("Exercicio 2:")
console.log(array + " -> index of highest value: " + indexOfHighestValue(array));

console.log("Exercicio 3:")
console.log(array2 + " -> index of lowest value: " + indexOfLowestValue(array2));

