## If this is all of our code, will we have 100% test converage?

No! There's a phantom possibilty we haven't tested

```javascript
let testing = true; 

const log(message) => {
  if (testing) => {
    console.log(message);
  }
  /* THE PHANTOM!!!
  else {
    // do nothing
  }
  */
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

There's a possible branch we haven't tested. Even though `testing` is defined at the top of the file, in the unit we're testing, it could be true or false, and we haven't tested for false. The *implied* else hasn't been tested.

```javascript
let testing = true; 

const log(message) => {
  if (testing) {
    console.log(message);
  }
};

const test = require('ava');
const td = require('tesdouble');
test('log happens', t => {
  const spy = td.func();
  console = {log: spy};
  testing = true;
  log('foo');
  t.is(spy.callCount, 1)
});

test('log does not happen', t => {
  const spy = td.func();
  console = {log: spy};
  testing = false;
  log('foo');
  t.is(spy.callCount, 0)
});
```

## Sneaky IFS-without-ELSES can lurk all over your code. 

Each phantom else is a possibility that should be tested!

```javascript
const testing = true;

const log = (message) => testing ? console.log(message) : null;
```

```javascript
const getDays = (startAtIndex: number | null = null) => {
  return ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'].slice(startAtIndex);
};
```

```javascript
const getFullName = () => {
  const firstName = process.env.FIRST_NAME || 'John';
  const lastName = process.env.LAST_NAME || 'Doe';
  return `${firstName} ${lastName}`;
};
```

[next](assignment.md)