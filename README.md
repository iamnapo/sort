# @iamnapo/sort

> Sorting comparators so you don't have to remember what to substract from what

[![build](https://badges.iamnapo.me/ci/iamnapo/sort)](https://github.com/iamnapo/sort/actions) [![npm](https://badges.iamnapo.me/npm/@iamnapo/sort)](https://www.npmjs.com/package/@iamnapo/sort)

## Install

```sh
npm i @iamnapo/sort
```

## Usage

```js
import { numberSmallToLarge } from "@iamnapo/sort";

[12, -42, -Infinity, 123, Number.NaN].sort(numberSmallToLarge());
//=> [Number.NaN, -Infinity, -42, 12, 123]

[{ name: "Mary", age: 20 }, { name: "Bob", age: 30 }, { name: "Napoleon", age: 26 }].sort(numberSmallToLarge((p) => p.age));
//=> [{ name: "Mary", age: 20 }, { name: "Napoleon", age: 26 }, { name: "Bob", age: 30 }];
```

## API

### numberSmallToLarge(get?)

Ascending sort comparator for numbers.

### numberLargeToSmall(get?)

Descending sort comparator for numbers.

### dateOldToNew(get?)

Ascending sort comparator for Dates.

### dateNewToOld(get?)

Descending sort comparator for Dates.

### stringAToZ(get?)

Ascending sort comparator for strings.

### stringZToA(get?)

Descending sort comparator for strings.

### stringAToZInsensitive(get?)

Case-insensitive ascending sort comparator for strings.

> Note: In case of equality, a case-sensitive comparison is the tie-breaker.

### stringZToAInsensitive(get?)

Case-insensitive descending sort comparator for strings.

> Note: In case of equality, a case-sensitive comparison is the tie-breaker.

#### get

Type: `function`\
Default: `(v) => v`

Function used to extract each value to compare.
