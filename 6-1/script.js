const selectEl = document.querySelector('#state');
const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 
  'RS', 'SC', 'SE', 'SP', 'TO'];
const submitBtn = document.querySelector('button[type = submit]');
const resetBtn = document.querySelector('button[type = reset]');
var picker = new Pikaday({ 
  field: document.getElementById('datepicker'), 
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
},
});


const selectState = (state) => {
  state.forEach(function (item) {
    const optionEl = document.createElement('option');
    optionEl.innerHTML = item;
    optionEl.value = item;
    selectEl.appendChild(optionEl);
  })
};

// const parseDate = (date) => {
//   let day = date.slice(-2);
//   let month = date.slice(5, 7);
//   let year = date.slice(0, 4);
//   return { label: 'Data do inicio:', value: `${day}-${month}-${year}`};
// }

const getAllInputs = () => {
  const allInputs = [];
  const inputTexts = document.querySelectorAll('input[type=text]');
  const inputRadio = document.querySelectorAll('input[type=radio]');
  const inputTextArea = document.querySelector('textarea');
  const inputSelect = document.querySelector('select').selectedOptions[0].value;
  

  for(let i = 0; i < inputTexts.length - 1; i += 1) {
    let input = {
      label: inputTexts[i].labels[0].innerHTML,
      value:  inputTexts[i].value,
    };
    allInputs.push(input);
  }

  allInputs.push({label: 'Estado:', value: inputSelect});

  for (let i = 0; i < inputRadio.length; i += 1) {
    if (inputRadio[i].checked) {
      let radio = {
        label: inputRadio[i].labels[0].innerHTML,
        value: inputRadio[i].value,
      };
      allInputs.push(radio);
    }
  }

  let textarea = {
    label: inputTextArea.labels[0].innerHTML,
    value: inputTextArea.value,
  };
  allInputs.push(textarea);

  allInputs.push({ label: 'Data do inicio: ', value: picker.toString() });

  return allInputs;
}

const renderOutput = (inputs) => {
  const renderOutputDiv = document.querySelector('#render-output');

  for (let i = 0; i < inputs.length; i += 1) {
    renderOutputDiv.innerHTML += `<div><p><strong>${inputs[i].label}</strong>  ${inputs[i].value}</p></div>`;
  }
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const allInputs = getAllInputs();
  console.log(allInputs);
  renderOutput(allInputs);
});

resetBtn.addEventListener('click', () => {
  const renderOutputDiv = document.querySelector('#render-output');

  renderOutputDiv.innerHTML = '';
})

window.onload = () => {
  selectState(states);
}