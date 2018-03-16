# writing testable code
tips for unit testers

## Here's some bad code. What's wrong with it?

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

const save = (store) => {
	// upload store or save it to a local file
};

const start = () => {
	const store = {date: new Date()}
  printTasks(store);
  save(store);
};

start();
```

[next](make-units.md)