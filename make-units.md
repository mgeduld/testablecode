## printTasks does more than it claims

```javascript
const printTasks = (store) => {
  const list = document.querySelector('#list');
	fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
    .then(tasks => {
    	const lis = tasks
      	.filter(task => !task.completed) 
        .map(task => `<li>${task.title}</li>`)
        .join('\n');
      list.innerHTML = lis;
      store.tasks = tasks;
    });
};
```

## Let's break it into units

```javascript
const fetchTasks = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
};

const getIncompleteTasks = (tasks) => tasks.filter(task => !task.completed);

const printTasks = (tasks) => {
    const list = document.querySelector('#list');
    const listItems = tasks
      .map(task => `<li>${task.title}</li>`)
      .join('\n');
    list.innerHTML = listItems;
};

const addTasksToStore = (tasks, store) => {
  store.tasks = tasks;
};

const save = (store) => {
	// upload store or save it to a local file
};

const start = () => {
  const store = {date: new Date()};
  fetchTasks()
    .then(tasks => {
      const incompleteTasks = getIncompleteTasks(tasks);
      printTasks(incompleteTasks);
      save(store, incompleteTasks);
    });
};

start();
```

[next](remove-mutation.md)