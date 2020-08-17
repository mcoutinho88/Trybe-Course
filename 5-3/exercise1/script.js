const button = document.querySelector('#lib-button');

button.addEventListener('click', function(event) {
  let nounInput = document.querySelector('#noun');
  let adjectiveInput = document.querySelector('#adjective');
  let personInput = document.querySelector('#person');

  let storyDiv = document.querySelector('#story');
  let storyP = document.createElement('p');
  storyP.innerText = `${personInput.value} really likes ${adjectiveInput.value} ${nounInput.value}`;

  storyDiv.appendChild(storyP);
  document.body.appendChild(storyDiv);
})