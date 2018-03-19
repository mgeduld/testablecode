## If this is all of our code, will we have 100% test converage?

```javascript
let testing = true; 

const log(message) => {
  if (testing) => {
    console.log(message);
  }
};

const test = require('ava');
test('will log message', t => {
  console = {
    log(message) {
      t.is(message, 'foo');
    }
  )};

  log('foo');
});
```

[next](if-without-then-2.md)