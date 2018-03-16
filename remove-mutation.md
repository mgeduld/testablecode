## addTasksToStore mutates its input

```javascript
const addTasksToStore = (tasks, store) => {
  store.tasks = tasks;
};
```

This is bad for a couple of reasons:

1. Whenever possible, we want to make functions return values
1. Mutations can cause errors your tests won't find!

## Let's purify the function

```javascript
const addTasksToStore = (tasks, store) => {
  return {...store, {tasks}};
};
```

## now our app looks like this

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
      printTasks(incompleteTasks);
      save(store, addTasksToStore(incompleteTasks, store));
    });
};

start();
```

[next](keep-purifying.md)