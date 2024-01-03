const addToDoButton = document.getElementById('addToDo');
const inputField = document.getElementById('inputField');
const toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', () => {
  let paragraph
  if (inputField.value !== '') {
    paragraph = document.createElement('p'); 
    paragraph.innerHTML = inputField.value;
    paragraph.classList.add('paragrph_style');
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
  }
  paragraph.addEventListener('click', () => {
    paragraph.classList.add('paragrph_click');
  });

  paragraph.addEventListener('dblclick', () => {
    toDoContainer.removeChild(paragraph);
  });
});

