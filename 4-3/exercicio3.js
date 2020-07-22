let n = 5;

let ast = '*';
let line = '';
let input = n;

for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
  for(let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < input) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  line = ' ';
  input -= 1; 
}

