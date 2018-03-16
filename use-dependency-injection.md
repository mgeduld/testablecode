## a couple of our functions are dependent on 3rd-party resources

```javascript
const fetchTasks = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
};

const printTasks = (listItems) => {
    const list = document.querySelector('#list');
    list.innerHTML = listItems;
};
```

## let's use dependency injection and factories

```javascript
const fetchTodosFactory = (fetch) => () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
};

const fetchTasks = fetchTodosFactory(window.fetch);

const printTasksFactory = (document) => (listItems) => {
    const list = document.querySelector('#list');
    list.innerHTML = listItems;
};

const printTasks = printTasksFactory(window.document);
```

## which means our app now looks like this:

```javascript
const fetchTodosFactory = (fetch) => () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  	.then(response => response.json())
};

const fetchTasks = fetchTodosFactory(window.fetch);

const getIncompleteTasks = (tasks) => tasks.filter(task => !task.completed);

const getListItems = (tasks) => tasks
  .map(task => `<li>${task.title}</li>`)
  .join('\n');

const printTasksFactory = (document) => (listItems) => {
    const list = document.querySelector('#list');
    list.innerHTML = listItems;
};

const printTasks = printTasksFactory(window.document);

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

[next](beware-non-determinism.md)