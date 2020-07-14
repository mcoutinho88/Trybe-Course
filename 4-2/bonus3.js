let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i+1]) {
    newArr.push(numbers[i]*numbers[i+1]);
  } else {
    newArr.push(numbers[i]*2);
  }
}

console.log(newArr);