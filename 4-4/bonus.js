let romanNumbers = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
}

let stringNumber = 'cmxiii';

function stringToRomans(str, romanNumbers) {

  let lettersStr = str.toLowerCase().split("");
  let number = 0;

  for (let index = 0; index < lettersStr.length; index += 1) {
    
    if(romanNumbers[lettersStr[index]] < romanNumbers[lettersStr[index+1]]) {
      number =  romanNumbers[lettersStr[index+1]] - romanNumbers[lettersStr[index]] + number;
      index += 1;
            
    } else {
      number += romanNumbers[lettersStr[index]];

    }
  }
 
  return number;
}

console.log(stringToRomans(stringNumber, romanNumbers));