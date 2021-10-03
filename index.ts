const assertGet = (get: unknown) => {
	if (typeof get !== "function") {
		throw new TypeError("Expected a function");
	}
};

const assertNumber = (number: unknown) => {
	if (typeof number !== "number") {
		throw new TypeError("Expected a number");
	}
};

const assertDate = (date: unknown) => {
	if (!(date instanceof Date)) {
		throw new TypeError("Expected a date");
	}
};

const assertString = (string: unknown) => {
	if (typeof string !== "string" && !(string instanceof String)) {
		throw new TypeError("Expected a string");
	}
};

const collator = new Intl.Collator();

const insensitiveCompare = (l: string, r: string) => collator.compare(l.toLowerCase(), r.toLowerCase()) || collator.compare(l, r);

export type Get<T> = (_: unknown) => T;
export type ReturnType = (l: unknown, r: unknown) => number;

/**
Ascending sort comparator for numbers.
```
import { numberSmallToLarge } from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(numberSmallToLarge());
// => [Number.NaN, -Infinity, -42, 12, 123]
```
*/
export const numberSmallToLarge = (get: Get<number> = (v) => v as number): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertNumber(left);
		assertNumber(right);

		if (Number.isNaN(left)) return -1;
		if (Number.isNaN(right)) return 1;

		return left - right;
	};
};

/**
Descending sort comparator for numbers.
```
import { numberLargeToSmall } from "@iamnapo/sort";
[12, -42, -Infinity, 123, Number.NaN].sort(numberLargeToSmall());
// => [123, 12, -42, -Infinity, Number.NaN]
```
*/
export const numberLargeToSmall = (get: Get<number> = (v) => v as number): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertNumber(left);
		assertNumber(right);

		if (Number.isNaN(left)) return 1;
		if (Number.isNaN(right)) return -1;

		return right - left;
	};
};

/**
Ascending sort comparator for Dates.
```
import { dateOldToNew } from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateOldToNew());
// => [new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")]
```
*/
export const dateOldToNew = (get: Get<Date> = (v) => v as Date): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertDate(left);
		assertDate(right);

		if (String(left) === "Invalid Date") return -1;
		if (String(right) === "Invalid Date") return 1;

		return Number(left) - Number(right);
	};
};

/**
Descending sort comparator for Dates.
```
import { dateNewToOld } from "@iamnapo/sort";
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateNewToOld());
// => [new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")]
```
*/
export const dateNewToOld = (get: Get<Date> = (v) => v as Date): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertDate(left);
		assertDate(right);

		if (String(left) === "Invalid Date") return 1;
		if (String(right) === "Invalid Date") return -1;

		return Number(right) - Number(left);
	};
};

/**
Ascending sort comparator for strings.
```
import { stringAToZ } from "@iamnapo/sort";
["b", "a", "c"].sort(stringAToZ());
// => ["a", "b", "c"]
```
*/
export const stringAToZ = (get: Get<string> = (v) => v as string): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertString(left);
		assertString(right);

		return collator.compare(left, right);
	};
};

/**
Descending sort comparator for strings.
```
import { stringZToA } from "@iamnapo/sort";
["b", "a", "c"].sort(stringZToA());
// => ["c", "b", "a"]
```
*/
export const stringZToA = (get: Get<string> = (v) => v as string): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertString(left);
		assertString(right);

		return collator.compare(right, left);
	};
};

/**
Case-insensitive ascending sort comparator for strings.
```
import { stringAToZInsensitive } from "@iamnapo/sort";
["B", "a", "C"].sort(stringAToZInsensitive());
// => ["a", "B", "C"]
```
*/
export const stringAToZInsensitive = (get: Get<string> = (v) => v as string): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertString(left);
		assertString(right);

		return insensitiveCompare(left, right);
	};
};

/**
Case-insensitive descending sort comparator for strings.
```
import { stringZToAInsensitive } from "@iamnapo/sort";
["B", "a", "C"].sort(stringZToAInsensitive());
// => ["C", "B", "a"]
```
*/
export const stringZToAInsensitive = (get: Get<string> = (v) => v as string): ReturnType => {
	assertGet(get);
	return (l: unknown, r: unknown) => {
		const left = get(l);
		const right = get(r);

		assertString(left);
		assertString(right);

		return insensitiveCompare(right, left);
	};
};
