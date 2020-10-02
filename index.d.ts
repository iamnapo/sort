/**
Ascending sort comparator for numbers.
```
import { numberSmallToLarge } from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(numberSmallToLarge());
// => [Number.NaN, -Infinity, -42, 12, 123]
```
*/
export function numberSmallToLarge(get?: (v: unknown) => number): (l: number, r: number) => number;

/**
Descending sort comparator for numbers.
```
import { numberLargeToSmall } from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(numberLargeToSmall());
// => [123, 12, -42, -Infinity, Number.NaN]
```
*/
export function numberLargeToSmall(get?: (v: unknown) => number): (l: number, r: number) => number;

/**
Ascending sort comparator for Dates.
```
import { dateOldToNew } from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateOldToNew());
// => [new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")]
```
*/
export function dateOldToNew(get?: (v: unknown) => Date): (l: Date, r: Date) => number;

/**
Descending sort comparator for Dates.
```
import { dateNewToOld } from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateNewToOld());
// => [new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")]
```
*/
export function dateNewToOld(get?: (v: unknown) => Date): (l: Date, r: Date) => number;

/**
Ascending sort comparator for strings.
```
import { stringAToZ } from "@iamnapo/sort";
["b", "a", "c"].sort(stringAToZ());
// => ["a", "b", "c"]
```
*/
export function stringAToZ(get?: (v: unknown) => string): (l: string, r: string) => number;

/**
Descending sort comparator for strings.
```
import { stringZToA } from "@iamnapo/sort";
["b", "a", "c"].sort(stringZToA());
// => ["c", "b", "a"]
```
*/
export function stringZToA(get?: (v: unknown) => string): (l: string, r: string) => number;

/**
Case-insensitive ascending sort comparator for strings.
```
import { stringAToZInsensitive } from "@iamnapo/sort";
["B", "a", "C"].sort(stringAToZInsensitive());
// => ["a", "B", "C"]
```
*/
export function stringAToZInsensitive(get?: (v: unknown) => string): (l: string, r: string) => number;

/**
Case-insensitive descending sort comparator for strings.
```
import { stringZToAInsensitive } from "@iamnapo/sort";
["B", "a", "C"].sort(stringZToAInsensitive());
// => ["C", "B", "a"]
```
*/
export function stringZToAInsensitive(get?: (v: unknown) => string): (l: string, r: string) => number;
