## printTasks is mixing business with logic with side effects

```javascript
const printTasks = (tasks) => {
    // side effect
    const list = document.querySelector('#list');

    // business logic
    const listItems = tasks
      .map(task => `<li>${task.title}</li>`)
      .join('\n');

    // side effect
    list.innerHTML = listItems;
};
```

## let's purify!

```javascript
const getListItems = (tasks) => tasks
  .map(task => `<li>${task.title}</li>`)
  .join('\n');

const printTasks = (listItems) => {
    const list = document.querySelector('#list');
    list.innerHTML = listItems;
};
```

## here's our improved app

```javascript
const fetchTasks = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
};

const getIncompleteTasks = (tasks) => tasks.filter(task => !task.completed);

const getListItems = (tasks) => tasks
  .map(task => `<li>${task.title}</li>`)
  .join('\n');

const printTasks = (listItems) => {
    const list = document.querySelector('#list');
    list.innerHTML = listItems;
};

const addTasksToStore = (tasks, store) => {
  return Object.assign({}, store, {tasks});
};

const save = (store) => {
	// upload store or save it to a local file
};

const start = () => {
  const store = {date: new Date()};
  fetchTasks()
    .then(tasks => {
      const incompleteTasks = getIncompleteTasks(tasks);
      const listItems = getListItems(incompleteTasks)
      printTasks(listItems);
      save(store, addTasksToStore(incompleteTasks, store));
    });
};

start();
```

[next](use-dependency-injection.md)

