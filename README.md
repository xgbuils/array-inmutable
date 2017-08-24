# array-inmutable

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`array-inmutable` exports a class that builds iterables that provide slice method.

## Install

``` bash
$ npm install array-inmutable --save
```

## Usage
``` javascript
const ArrayInmutable = require('array-inmutable')

const a = ArrayInmutable([1]) // (2)
    .push(2) // (1, 2)
const b = a.push(5)

a.every(e => e < 3) // true
b.every(e => e < 3) // false

a.reduce((x, y) => x * y, 1) // 2 (1 * 2)
a.reduce((x, y) => x * y, 1) // 10 (1 * 2 * 5)

```

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/array-inmutable.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/array-inmutable
  [3]: https://badge.fury.io/js/array-inmutable.svg
  [4]: https://badge.fury.io/js/array-inmutable
  [5]: https://coveralls.io/repos/github/xgbuils/array-inmutable/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/array-inmutable?branch=master
  [7]: https://david-dm.org/xgbuils/array-inmutable.svg
  [8]: https://david-dm.org/xgbuils/array-inmutable
