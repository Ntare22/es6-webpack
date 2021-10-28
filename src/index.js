import './style.css';
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

function displayList(list) {
  const listConainer = document.createElement('ul');
  listConainer.classList = 'list-container';

  list.forEach((item) => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const icon = document.createElement('iframe');

    checkBox.type = 'checkbox';
    checkBox.classList = 'check-box';
    listItem.innerHTML = item.description;
    icon.classList = 'three-dots';
    icon.src = threeDots;

    if (item.completed) {
      checkBox.checked = 'true';
    }

    checkBox.addEventListener('change', () => {
      if (!item.completed) {
        item.completed = true;
        checkBox.checked = true;
        localStorage.setItem('list', JSON.stringify(list));
      } else {
        item.completed = false;
        checkBox.checked = false;
        localStorage.setItem('list', JSON.stringify(list));
      }
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(icon);
    listConainer.appendChild(listItem);
    container.appendChild(listConainer);
  });
}

function WebPage(list) {
  const heading = document.createElement('h3');
  heading.innerHTML = 'Today\'s To Do';

  const todoInput = document.createElement('input');
  todoInput.placeholder = 'Add to your list...';
  todoInput.classList = 'input-todo';

  const listConainer = document.createElement('ul');
  listConainer.classList = 'list-container';

  const clearBtn = document.createElement('button');
  clearBtn.classList = 'clear-btn';
  clearBtn.innerHTML = 'Clear all completed';

  container.appendChild(heading);
  container.appendChild(todoInput);
  displayList(list);
  container.appendChild(clearBtn);

  return container;
}

window.onload = () => {
  const localStorageList = JSON.parse(localStorage.getItem('list'));
  const updatedList = localStorageList === null ? toDoList : localStorageList;
  document.body.appendChild(WebPage(updatedList));
};
