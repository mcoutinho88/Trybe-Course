const selectEl = document.querySelector('#state');
const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 
  'RS', 'SC', 'SE', 'SP', 'TO'];
const submitBtn = document.querySelector('button');

const selectState = (state) => {
  state.forEach((item) => {
    const optionEl = document.createElement('option');
    optionEl.innerHTML = item;
    optionEl.value = item;
    selectEl.appendChild(optionEl);
  })
};

const parseDate = (date) => {
  let day = date.slice(-2);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);
  return { label: 'Data do inicio:', value: `${day}-${month}-${year}`};
}

const getAllInputs = () => {
  const allInputs = [];
  const inputTexts = document.querySelectorAll('input[type=text]');
  const inputRadio = document.querySelectorAll('input[type=radio]');
  const inputTextArea = document.querySelector('textarea');
  const inputSelect = document.querySelector('select').selectedOptions[0].value;
  const inputDate = document.querySelector('input[type=date]').value;

  for(let i = 0; i < inputTexts.length; i += 1) {
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
        isRadio: true,
      };
      allInputs.push(radio);
    }
  }

  let textarea = {
    label: inputTextArea.labels[0].innerHTML,
    value: inputTextArea.value,
    isTextArea: true,
  };
  allInputs.push(textarea);

  allInputs.push(parseDate(inputDate));
  return allInputs;
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const allInputs = getAllInputs();
  console.log(allInputs);
})

window.onload = () => {
  selectState(estados);
}