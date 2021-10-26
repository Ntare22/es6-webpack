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

function WebPage(list) {
  const container = document.createElement('div');
  container.classList = 'todo-container';

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

  list.forEach((item) => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const icon = document.createElement('iframe');

    checkBox.type = 'checkbox';
    checkBox.classList = 'check-box';
    listItem.innerHTML = item.description;
    icon.classList = 'three-dots';
    icon.src = threeDots;

    listItem.appendChild(checkBox);
    listItem.appendChild(icon);
    listConainer.appendChild(listItem);
  });

  container.appendChild(heading);
  container.appendChild(todoInput);
  container.appendChild(listConainer);
  container.appendChild(clearBtn);

  return container;
}

document.body.appendChild(WebPage(toDoList));
