export type NumberComparator = (get: (v: any) => v) => (left: number, right: number) => number;
export type DateComparator = (get: (v: any) => v) => (left: Date, right: Date) => number;
export type StringComparator = (get: (v: any) => v) => (left: string, right: string) => string;

/**
Ascending sort comparator for numbers.
@example
```
import sort from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(sort.numberSmallToLarge());
//=> [Number.NaN, -Infinity, -42, 12, 123]
```
*/
export const numberSmallToLarge: NumberComparator;

/**
Descending sort comparator for numbers.
@example
```
import sort from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(sort.numberLargeToSmall());
//=> [123, 12, -42, -Infinity, Number.NaN]
```
*/
export const numberLargeToSmall: NumberComparator;

/**
Ascending sort comparator for Dates.
@example
```
import sort from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(sort.dateOldToNew());
//=> [new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")]
```
*/
export const dateOldToNew: DateComparator;

/**
Descending sort comparator for Dates.
@example
```
import sort from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(sort.dateNewToOld());
//=> [new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")]
```
*/
export const dateNewToOld: DateComparator;

/**
Ascending sort comparator for strings.
@example
```
import sort from "@iamnapo/sort";
["b", "a", "c"].sort(sort.stringAToZ());
//=> ["a", "b", "c"]
```
*/
export const stringAToZ: StringComparator;

/**
Descending sort comparator for strings.
@example
```
import sort from "@iamnapo/sort";
["b", "a", "c"].sort(sort.stringZToA());
//=> ["c", "b", "a"]
```
*/
export const stringZToA: StringComparator;

/**
Case-insensitive ascending sort comparator for strings.
@example
```
import sort from "@iamnapo/sort";
['B', 'a', 'C'].sort(sort.stringAToZInsensitive());
//=> ['a', 'B', 'C']
```
*/
export const stringAToZInsensitive: StringComparator;

/**
Case-insensitive descending sort comparator for strings.
@example
```
import sort from "@iamnapo/sort";
['B', 'a', 'C'].sort(sort.stringZToAInsensitive());
//=> ['C', 'B', 'a']
```
*/
export const stringZToAInsensitive: StringComparator;
