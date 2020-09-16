# @iamnapo/sort

> Sorting comparators so you don't have to remember what to substract from what

[![build](https://img.shields.io/github/workflow/status/iamnapo/sort/ci?style=for-the-badge&logo=github&label=)](https://github.com/iamnapo/sort/actions) [![npm](https://img.shields.io/npm/v/@iamnapo/sort.svg?style=for-the-badge&logo=npm&label=)](https://www.npmjs.com/package/@iamnapo/sort) [![license](https://img.shields.io/github/license/iamnapo/sort.svg?style=for-the-badge)](./LICENSE)

## Install

```sh
$ npm i @iamnapo/sort
```

## Usage

```js
const sort = require("@iamnapo/sort");

[12, -42, -Infinity, 123, Number.NaN].sort(sort.numberSmallToLarge());
//=> [Number.NaN, -Infinity, -42, 12, 123]

[{ name: "Mary", age: 20 }, { name: "Bob", age: 30 }, { name: "Napoleon", age: 26 }].sort(sort.numberSmallToLarge((p) => p.age));
//=> [{ name: "Mary", age: 20 }, { name: "Napoleon", age: 26 }, { name: "Bob", age: 30 }];
```

## API

### sort.numberSmallToLarge(get?)

Ascending sort comparator for numbers.

### sort.numberLargeToSmall(get?)

Descending sort comparator for numbers.

### sort.dateOldToNew(get?)

Ascending sort comparator for Dates.

### sort.dateNewToOld(get?)

Descending sort comparator for Dates.

### sort.stringAToZ(get?)

Ascending sort comparator for strings.

### sort.stringZToA(get?)

Descending sort comparator for strings.

### sort.stringAToZInsensitive(get?)

Case-insensitive ascending sort comparator for strings.

> Note: In case of equality, a case-sensitive comparison is the tie-breaker.

### sort.stringZToAInsensitive(get?)

Case-insensitive descending sort comparator for strings.

> Note: In case of equality, a case-sensitive comparison is the tie-breaker.

#### get

Type: `function`\
Default: `(v) => v`

Function used to extract each value to compare.
