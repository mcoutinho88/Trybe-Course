const solutionDiv = document.querySelector('#solution');
const solutionP = document.createElement('p');

const squareInput = document.querySelector('#square-input');
const squareButton = document.querySelector('#square-button');

squareButton.addEventListener('click', function() {
  const num = squareInput.value;
  const squaredNumber = num * num;
  solutionP.innerText = 'The result of squaring the number ' + num + ' is ' + squaredNumber;
  solutionDiv.appendChild(solutionP);
}
)

const halfInput = document.querySelector('#half-input');
const halfButton = document.querySelector('#half-button');

halfButton.addEventListener('click', function() {
  const num = halfInput.value;
  const half = num / 2;
  console.log('Half of ' + num + ' is ' +  half);
  return half;
})


const percentInput1 = document.querySelector('#percent1-input');
const percentInput2 = document.querySelector('#percent2-input');
const percentButton = document.querySelector('#percent-button');

percentButton.addEventListener('click', function() {
  const num1 = percentInput1.value;
  const num2 = percentInput2.value;

  const percent = (num1/num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}
)

const areaInput = document.querySelector('#area-input');
const areaButton = document.querySelector('#area-button');
areaButton.addEventListener('click', function () {
  const radius = areaInput.value;
  const area = Math.PI * squareNumber(radius);
  console.log('The area of circle with radius ' + radius + ' is ' + area);
  return area;
})


