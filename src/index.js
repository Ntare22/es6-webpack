import './style.css';
import checkCompleted from './checkCompleted.js';
import threeDots from './assets/three-dots.svg';

const toDoList = [
  {
    index: 1,
    description: 'wash the car',
    completed: true,
  },
  {
    index: 2,
    description: 'go out to eat',
    completed: false,
  },
  {
    index: 3,
    description: 'complete feature',
    completed: false,
  },
  {
    index: 3,
    description: 'complete feature',
    completed: false,
  },
];

const container = document.createElement('div');
container.classList = 'todo-container';

const listConainer = document.createElement('ul');
listConainer.classList = 'list-container';
listConainer.id = 'list-container';

const clearBtn = document.createElement('button');
clearBtn.classList = 'clear-btn';
clearBtn.innerHTML = 'Clear all completed';

function displayList(list) {
  listConainer.innerHTML = '';

  list.forEach((item) => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const icon = document.createElement('iframe');

    checkBox.type = 'checkbox';
    checkBox.classList = 'check-box';
    listItem.innerHTML = item.description;
    icon.classList = 'three-dots';
    icon.id = 'three-dots';
    icon.src = threeDots;

    if (item.completed) {
      checkBox.checked = 'true';
    }

    checkCompleted(checkBox, item, list);

    listItem.appendChild(checkBox);
    listItem.appendChild(icon);
    listConainer.appendChild(listItem);
    container.appendChild(listConainer);
  });

  container.appendChild(clearBtn);
}

function addTask(list) {
  const inputElement = document.getElementById('input-todo');
  inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const newItem = {
        index: 'adfad',
        description: inputElement.value,
        completed: false,
      };
      list.push(newItem);
      localStorage.setItem('list', JSON.stringify(list));
      displayList(list);
    }
  });
}

function removeTask() {
  document.getElementById('three-dots').addEventListener('mouseover', () => {
    console.log(document.getElementById('three-dots'));
    console.log(document.getElementById('three-dots'));
  });
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

const localStorageList = JSON.parse(localStorage.getItem('list'));
const updatedList = localStorageList === null ? toDoList : localStorageList;
document.body.appendChild(WebPage(updatedList));
addTask(updatedList);
removeTask();
