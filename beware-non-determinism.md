## let's extract the store creation from start()

```javascript
const getStore = () => {date: new Date()}

const start = () => {
  const store = getStore();
  fetchTasks()
    .then(tasks => {
      const incompleteTasks = getIncompleteTasks(tasks);
      const listItems = getListItems(incompleteTasks)
      printTasks(listItems);
      save(store, addTasksToStore(incompleteTasks, store));
    });
};
```

## on the day you write the code, this test might pass:

```javascript
test('getStore returns an object with the correct date', t => {
  t.is(getStore().date.toString(), 'Fri Mar 16 2018 15:38:10 GMT-0400 (EDT)');
});
```

But it would fail on any other day. 

[next](prune-branches.md)