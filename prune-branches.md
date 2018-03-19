## the many branches in this code make it hard to test

```javascript
const isUserValid = (user) => {
  const {age, hasLearnersPermit, hasPassedPhysical} = user;
  if (age >= 18) {
    if (age >= 65) {
      if (hasPassedPhysical) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    if (age >= 16 && hasLearnersPermit) {
      return true
    } else {
      return false;
    }
  }
};
```

You'll have to write a whole lot of tests for this one function, and if you miss something, your code will be brittle.

## let's extract conditions into separately testable units

```javascript
const isAdult = (age) => age >= 18;

const isSenior = (age) => age >= 65;

const isValidAdult = (age, hassPassedPhysical) => {
  if (isAdult(age)) {
    return isSenior(age) ? hasPassedPhysical : true;
  }
  return false;
};

const isValidYouth = (age, hasLearnersPermit) => 
  (!isAdult(age) && hasLearnersPermit) ? true : false;

const isUserValid = (user) => {
  const {age, hasLearnersPermit, hasPassedPhysical} = user;
  if (isLegalAdult(age)) {
    return isValidAdult(age, hasPassedPhysical);
  } 
  return isValidYouth(age, hasLearnersPermit);
};
```

[next](if-without-then.md)
