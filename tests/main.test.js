import test from "ava";

import { stringZToAInsensitive, stringAToZInsensitive, stringZToA, stringAToZ, dateNewToOld, dateOldToNew, numberLargeToSmall, numberSmallToLarge } from "../index.js";

test("main", (t) => {
	t.truthy(numberSmallToLarge());
	t.truthy(numberLargeToSmall());
	t.truthy(dateOldToNew());
	t.truthy(dateNewToOld());
	t.truthy(stringAToZ());
	t.truthy(stringZToA());
	t.truthy(stringAToZInsensitive());
	t.truthy(stringZToAInsensitive());
	t.deepEqual([12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberSmallToLarge()), [Number.NaN, Number.NEGATIVE_INFINITY, -42, 12, 123]);
	t.deepEqual([12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberLargeToSmall()), [123, 12, -42, Number.NEGATIVE_INFINITY, Number.NaN]);
	t.deepEqual([
		new Date("2019-06-28"),
		new Date("2019-06-10"),
		new Date("2019-06-22"),
	].sort(dateOldToNew()), [new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")]);
	t.deepEqual([
		new Date("2019-06-28"),
		new Date("2019-06-10"),
		new Date("2019-06-22"),
	].sort(dateNewToOld()), [new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")]);
	t.deepEqual(["b", "a", "c"].sort(stringAToZ()), ["a", "b", "c"]);
	t.deepEqual(["b", "a", "c"].sort(stringZToA()), ["c", "b", "a"]);
	t.deepEqual(["B", "a", "C"].sort(stringAToZInsensitive()), ["a", "B", "C"]);
	t.deepEqual(["B", "a", "C"].sort(stringZToAInsensitive()), ["C", "B", "a"]);
	t.deepEqual([
		{ name: "Alice", age: 20 },
		{ name: "Bob", age: 30 },
		{ name: "Napoleon", age: 26 },
	].sort(numberSmallToLarge((p) => p.age)), [{ name: "Alice", age: 20 }, { name: "Napoleon", age: 26 }, { name: "Bob", age: 30 }]);
});
