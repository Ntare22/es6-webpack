import '@fortawesome/fontawesome-free/js/fontawesome';
import './style.css';
import checkCompleted from './checkCompleted.js';
import threeDots from './assets/three-dots.svg';


const localStorageList = JSON.parse(localStorage.getItem('list'));

const container = document.createElement('div');
container.classList = 'todo-container';

const listConainer = document.createElement('ul');
listConainer.classList = 'list-container';
listConainer.id = 'list-container';

const clearBtn = document.createElement('button');
clearBtn.classList = 'clear-btn';
clearBtn.innerHTML = 'Clear all completed';
clearBtn.addEventListener('click', () => clearFinishedTasks())

let indexCount;
function displayList(list) {
  listConainer.innerHTML = '';

  indexCount = 1;
  list.forEach((item) => {
    item['index'] = indexCount;
    indexCount++;
    const listItem = document.createElement('li');
    const listText = document.createElement('input')
    const checkBox = document.createElement('input');
    const icon = document.createElement('button');

    checkBox.type = 'checkbox';
    checkBox.classList = 'check-box';
    listText.value = item.description;
    listText.classList = 'list-text'
    listItem.id = item.index;

    icon.classList = 'three-dots';
    icon.id = 'three-dots';
    icon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';

    icon.addEventListener('click', () => removeTask(item));
    listText.addEventListener('keydown', (e) => editTask(item, list, e))

    if (item.completed) {
      checkBox.checked = 'true';
    }

    checkCompleted(checkBox, item, list);

    listItem.appendChild(checkBox);
    listItem.appendChild(listText)
    listItem.appendChild(icon);
    listConainer.appendChild(listItem);
    container.appendChild(listConainer);
  });

  localStorage.setItem('list', JSON.stringify(list))

  container.appendChild(clearBtn);
}

function addTask() {
  const inputElement = document.getElementById('input-todo');
  inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const newItem = {
        description: inputElement.value,
        completed: false,
      };
      inputElement.value = ''
      const currentList = JSON.parse(localStorage.getItem('list'))
      currentList.push(newItem);
      displayList(currentList);
    }
  });
}


function editTask(item, list, e) {
  const arrayList = document.querySelector('#list-container').childNodes;
  for (let i = 0; i < arrayList.length; i++) {
    if (item.index == arrayList[i].id) {
      e.keyCode === 13 ? item.description = arrayList[i].childNodes[1].value : null;
    }
  }
  localStorage.setItem('list', JSON.stringify(list))
}


function removeTask(item) {
  const currentList = JSON.parse(localStorage.getItem('list'));
  const newList = currentList.filter(todo => todo.index !== item.index);
  localStorage.setItem('list', JSON.stringify(newList));
  displayList(newList)
}

function WebPage(list) {
  const heading = document.createElement('h3');
  heading.innerHTML = 'Today\'s To Do';

  const todoInput = document.createElement('input');
  todoInput.placeholder = 'Add to your list...';
  todoInput.id = 'input-todo';

  const listConainer = document.createElement('ul');
  listConainer.classList = 'list-container';

  container.appendChild(heading);
  container.appendChild(todoInput);
  displayList(list);

  return container;
}

function clearFinishedTasks() {
  const currentList = JSON.parse(localStorage.getItem('list'))
  const newList = currentList.filter((item) => item.completed !== true);
  displayList(newList)
  localStorage.setItem('list', JSON.stringify(newList));
}

const updatedList = localStorageList === null ? localStorage.setItem('list', JSON.stringify([])) : localStorageList;;
document.body.appendChild(WebPage(updatedList));
addTask();
