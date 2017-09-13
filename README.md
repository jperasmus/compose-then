# compose-then
A better implementation of the "compose" FP function that allows for composing both synchronous and asynchronous functions.

## Installation:
```
yarn add compose-then
```
or
```
npm install --save compose-then
```

## Example:

```js
import compose from 'compose-then';

const double = x => x * 2;
const square = x => x * x;
const plus3 = x => new Promise(resolve => setTimeout(() => resolve(x + 3), 100));

compose(double, square, plus3)(2)
  .then(result => // Result equals 50)
  .catch(console.error);

```